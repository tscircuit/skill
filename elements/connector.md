# `<connector />`

A general-purpose connector component for board-to-board, cable, and edge interfaces.

## Example

```tsx
export default () => (
  <board width="40mm" height="40mm">
    <connector
      name="J1"
      manufacturerPartNumber="AF_QTZB1_0"
      pinLabels={{
        pin1: ["VCC"],
        pin2: ["D_NEG"],
        pin3: ["D_POS"],
        pin4: ["GND"],
        pin5: ["EH1"],
        pin6: ["EH2"],
      }}
      footprint={
        <footprint>
          <hole pcbX="-2.5mm" pcbY="-2.125mm" diameter="1.3mm" />
          <hole pcbX="2.5mm" pcbY="-2.125mm" diameter="1.3mm" />
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.5mm"
            pcbY="1.575mm"
            width="1.1mm"
            height="3.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1mm"
            pcbY="1.575mm"
            width="1.1mm"
            height="3.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1mm"
            pcbY="1.575mm"
            width="1.1mm"
            height="3.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="3.5mm"
            pcbY="1.575mm"
            width="1.1mm"
            height="3.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="7.15mm"
            pcbY="-1.475mm"
            width="1.8mm"
            height="4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-7.15mm"
            pcbY="-1.475mm"
            width="1.8mm"
            height="4mm"
            shape="rect"
          />
        </footprint>
      }
    />
  </board>
)
```

## USB Connectors (`standard="usb_c"`)

tscircuit provides first-class support for USB receptacles and interfaces through `<connector />`. For standard USB Type-C ports, setting `standard="usb_c"` automatically supplies:
1. **Canonical Pin Labels**: Built-in signal routing ports (`VBUS1`, `VBUS2`, `CC1`, `CC2`, `DP1`, `DP2`, `DM1`, `DM2`, `SBU1`, `SBU2`, `GND1`, `GND2`) and mounting tabs (`SHELL1`-`SHELL4`).
2. **Integrated Schematic Symbol**: The official USB-C symbol is placed directly inside the component schematic box.
3. **Automated Footprint and 3D CAD Loading**: The parts engine resolves standard surface-mount footprints and step models without requiring external JLC component imports.

> **Note on Syntax**: In conversational prompts or templates, references to `<connector variant="usbc" />` correspond to `<connector standard="usb_c" />`. Use `standard="usb_c"` in TypeScript source code to satisfy the `ConnectorProps` interface.

### Canonical Pinout Table

| Signal | Group | Function |
| :--- | :--- | :--- |
| `VBUS1`, `VBUS2` | Power | Bus power supply (+5V nominal up to 20V with PD negotiation) |
| `GND1`, `GND2` | Power | Ground reference returns |
| `CC1`, `CC2` | Configuration | Cable orientation detection and current advertisement |
| `DP1`, `DP2` | USB 2.0 Data | High-speed differential pair positive line ($D+$) |
| `DM1`, `DM2` | USB 2.0 Data | High-speed differential pair negative line ($D-$) |
| `SBU1`, `SBU2` | Sideband | Auxiliary sideband channels used in Alternate Modes |
| `SHELL1`-`SHELL4` | Chassis | Metallic shield tabs for chassis grounding and strain relief |

### Standard 5V Power Sink Circuit (UFP)

To power a device as an Upstream Facing Port (UFP), terminate both `CC1` and `CC2` with independent 5.1 kΩ pull-down resistors to ground. This signals the USB-C source or host to supply +5V on `VBUS`.

```tsx
export default () => (
  <board width="40mm" height="30mm">
    {/* USB-C Receptacle */}
    <connector
      name="USBC"
      standard="usb_c"
      pcbX="-15mm"
      pcbY="0mm"
      pcbRotation={0}
      schX="-4"
      schY="0"
    />

    {/* CC Pin Pull-Down Resistors (5.1k to GND for 5V UFP Sink) */}
    <resistor
      name="R_CC1"
      resistance="5.1k"
      footprint="0402"
      schX="-1"
      schY="-1"
    />
    <resistor
      name="R_CC2"
      resistance="5.1k"
      footprint="0402"
      schX="-1"
      schY="-2"
    />

    {/* Decoupling Capacitors */}
    <capacitor
      name="C_BULK"
      capacitance="10uF"
      footprint="0805"
      schX="2"
      schY="1"
    />
    <capacitor
      name="C_BYPASS"
      capacitance="100nF"
      footprint="0402"
      schX="3"
      schY="1"
    />

    {/* Power & Ground Rails */}
    <trace from="USBC.VBUS1" to="net.VBUS" />
    <trace from="USBC.VBUS2" to="net.VBUS" />
    <trace from="USBC.GND1" to="net.GND" />
    <trace from="USBC.GND2" to="net.GND" />
    <trace from="USBC.SHELL1" to="net.GND" />
    <trace from="USBC.SHELL2" to="net.GND" />

    {/* CC Pull-Down Connections */}
    <trace from="USBC.CC1" to="R_CC1.pin1" />
    <trace from="R_CC1.pin2" to="net.GND" />
    <trace from="USBC.CC2" to="R_CC2.pin1" />
    <trace from="R_CC2.pin2" to="net.GND" />

    {/* Decoupling Connections */}
    <trace from="net.VBUS" to="C_BULK.pin1" />
    <trace from="C_BULK.pin2" to="net.GND" />
    <trace from="net.VBUS" to="C_BYPASS.pin1" />
    <trace from="C_BYPASS.pin2" to="net.GND" />
  </board>
)
```

### Full-Speed USB 2.0 Data Routing

For reversible plug orientation on USB 2.0 circuits, tie the corresponding differential data lines together:
- Bridge `USBC.DP1` and `USBC.DP2` to create `net.USB_DP`.
- Bridge `USBC.DM1` and `USBC.DM2` to create `net.USB_DM`.
- Connect `net.USB_DP` and `net.USB_DM` to microcontroller transceiver pins (often through 22 Ω series termination resistors).

```tsx
<trace from="USBC.DP1" to="net.USB_DP" />
<trace from="USBC.DP2" to="net.USB_DP" />
<trace from="USBC.DM1" to="net.USB_DM" />
<trace from="USBC.DM2" to="net.USB_DM" />
```

## Accessible orientation warning

Placement checks can warn when a connector faces away from the nearest board edge:

```text
J1 is facing x+ but should face x- so the connector is accessible from the board edge
```

For side-entry connectors, place the connector near the board edge it should face, then use `pcbRotation` if needed so the cable or mating part enters from that edge.

For vertical-entry connectors, such as a battery connector inserted from above, set `insertionDirection="from_above"` on the `<footprint />`. This tells the checker that the connector does not need to face a board edge.

```tsx
<connector
  name="J1"
  pcbX="0"
  pcbY="0"
  footprint={
    <footprint insertionDirection="from_above">
      {/* pads / holes */}
    </footprint>
  }
/>
```

Other insertion directions are `from_left` (-X), `from_right` (+X), `from_top`
(+Y), `from_bottom` (-Y) and `from_below` (-Z).

`insertionDirection` describes the part **in its own footprint frame** -- which
way the cable or mating part comes from as the footprint is drawn. It is not the
board edge you want the part on. Placement supplies the rest: core rotates the
declared direction by the component's `pcbRotation` and mirrors it for the
mounting layer, then records the result on `pcb_component.insertion_direction`.

So to move a part to a different edge, rotate the part and leave the declared
direction alone:

```tsx
{/* Declared -X; rotating 180 degrees carries it round to +X. */}
<connector name="J2" pcbX={19} pcbY={6} pcbRotation={180}
  footprint={<footprint insertionDirection="from_left">{/* pads */}</footprint>}
/>
```

The direction must match the part's CAD model, if it has one -- see
[`<cadmodel />`](./cadmodel.md#model-orientation).

`from_front` and `from_back` are deprecated spellings of `from_top` and
`from_bottom`. They still parse, but are never emitted; prefer the canonical
names. They were retired because they read as though they described a 3D
viewport rather than the board as drawn in the 2D PCB view, and different
packages had resolved that ambiguity in opposite directions.

## Props

Commonly used: `standard`, `name`, `footprint`, `connections`

## References

- Props: [ConnectorProps](https://github.com/tscircuit/props#connectorprops-connector)
- Source: [lib/components/connector.ts](https://github.com/tscircuit/props/blob/main/lib/components/connector.ts)
- Local docs: [docs/docs/elements/connector.mdx](../docs/docs/elements/connector.mdx)
