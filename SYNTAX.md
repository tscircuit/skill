# tscircuit syntax primer

## 1) Root element

A circuit is typically a default export that returns a `<board />` or a form-factor board component from `@tscircuit/common`.

Example:

```tsx
import React from "react"

export default () => (
  <board width="10mm" height="10mm" layers={2}>
    <resistor name="R1" resistance="1k" footprint="0402" />
  </board>
)
```


## 2) Layout properties

You can place nearly any element with:
- `pcbX`, `pcbY` (PCB position)
- `pcbRotation`
- `layer` (e.g., `"bottom"`)


For schematics:
- `schX`, `schY`
- `schRotation`
- `schOrientation`

Units
- Numbers are interpreted as mm.
- Strings can include units (e.g., `"0.1in"`, `"2.54mm"`).

## 3) Pin labels with `pinLabels`

Use `pinLabels` to map physical pin numbers to meaningful names. This is essential for chips and ICs.

```tsx
<chip
  name="U1"
  footprint="qfp32"
  pinLabels={{
    pin1: ["GP0", "SPI0_RX", "I2C0_SDA", "UART0_TX"],
    pin2: ["GP1", "SPI0_CS", "I2C0_SCL", "UART0_RX"],
    pin3: "GND",
    // ...
  }}
/>
```

With multi-alias, any of the names can be used in traces:

```tsx
<trace from="U1.GP0" to="U2.SDA" />
<trace from="U1.SPI0_RX" to="U3.MISO" />
```

## 4) Pin attributes with `pinAttributes`

Use `pinAttributes` to add semantic metadata to pins. This enables DRC checks, schematic arrows, and board-level pinout exposure.

Example using a 555 timer (NE555):

```tsx
<chip
  name="U1"
  footprint="dip8"
  pinLabels={{
    pin1: "GND",
    pin2: "TRIG",
    pin3: "OUT",
    pin4: "RESET",
    pin5: "CTRL",
    pin6: "THRES",
    pin7: "DISCH",
    pin8: "VCC",
  }}
  pinAttributes={{
    VCC: { requiresPower: true },
    RESET: { mustBeConnected: true },
  }}
/>
```

Available attributes:

| Attribute | Type | Description |
|-----------|------|-------------|
| `requiresPower` | boolean | Signal goes INTO the chip (shows input arrow on schematic) |
| `providesPower` | boolean | Signal comes OUT of the chip (shows output arrow on schematic) |
| `mustBeConnected` | boolean | DRC error if this pin is left floating |
| `includeInBoardPinout` | boolean | Expose this pin to the board-level pinout |

## 5) Type-safe chip components

For reusable chip components, define `pinLabels` as a const and use `ChipProps` for type safety:

```tsx
import type { ChipProps } from "tscircuit"

const pinLabels = {
  pin1: "VCC",
  pin2: "GND",
  pin3: ["SDA", "I2C_DATA"],
  pin4: ["SCL", "I2C_CLK"],
} as const

export const MyChip = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...props}
    pinLabels={pinLabels}
    footprint="soic4"
  />
)
```

## 6) Use `<connector />` for USB connectors

Use `<connector />` for all USB connector footprints (USB-C, Micro-USB, Mini-USB, and USB-A/B variants). This gives the design checker better semantic information for connector-related DRC.

If a `<chip />` is currently modeling a USB receptacle, plug, or jack, consider refactoring it to `<connector />` so additional USB-specific DRC checks can apply.

## 7) Connectivity with `<trace />`

Connect pins with port selectors:

```tsx
<trace from="R1.pin1" to="C1.pin1" />
```

Connect to named nets. Net names must start with a letter or underscore and can only contain letters, numbers and underscores. 

```tsx
<trace from="U1.pin1" to="net.GND" />
<trace from="U1.pin8" to="net.VCC" />
<trace from="U1.pin8" to="net.V3_3" />
```

Pin labels (in `pinLabels`) can contain letters, numbers, and underscores. Unlike net names, pin labels **can** start with a number (e.g., `"3V3"` is valid).

Useful trace props (optional)
- `width` / `thickness`
- `minLength` / `maxLength`

## 8) Grouping for PCB layout

Use `<group />` like a container to move/layout parts together.

```tsx
<board width="20mm" height="20mm">
  <group pcbX={5} pcbY={5}>
    <resistor name="R1" resistance="1k" footprint="0402" pcbX={2.5} pcbY={2.5} />
    <resistor name="R2" resistance="1k" footprint="0402" pcbX={2.5} pcbY={0} />
    <resistor name="R3" resistance="1k" footprint="0402" pcbX={2.5} pcbY={-2.5} />
  </group>
</board>
```

## 9) Schematic pin arrangement

Control how pins appear on the schematic symbol with `schPinArrangement`:

```tsx
<chip
  name="U1"
  footprint="soic16"
  pinLabels={{
    pin1: "VCC1",
    pin2: "IN1",
    pin3: "IN2",
    pin4: "IN3",
    pin5: "IN4",
    pin6: "GND1",
    pin7: "GND2",
    pin8: "VCC2",
    pin9: "OUT1",
    pin10: "OUT2",
    pin11: "OUT3",
    pin12: "OUT4",
  }}
  schPinArrangement={{
    topSide: { pins: ["VCC1", "VCC2"], direction: "left-to-right" },
    bottomSide: { pins: ["GND1", "GND2"], direction: "left-to-right" },
    leftSide: { pins: ["IN1", "IN2", "IN3", "IN4"], direction: "top-to-bottom" },
    rightSide: { pins: ["OUT1", "OUT2", "OUT3", "OUT4"], direction: "top-to-bottom" },
  }}
/>
```

Available sides: `leftSide`, `rightSide`, `topSide`, `bottomSide`
- Left/right sides use `direction: "top-to-bottom"` or `"bottom-to-top"`
- Top/bottom sides use `direction: "left-to-right"` or `"right-to-left"`

## 10) Manufacturing helpers

For turnkey assembly you will often want:
- `supplierPartNumbers` (pin a specific supplier SKU/part number)
- `doNotPlace` (exclude from automated placement)

Example:

```tsx
<capacitor
  name="C1"
  capacitance="100nF"
  footprint="0402"
  supplierPartNumbers={{ jlcpcb: "C14663" }}
/>

<resistor name="R1" resistance="10k" footprint="0402" doNotPlace />
```
