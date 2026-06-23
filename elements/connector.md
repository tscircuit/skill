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

## USB-C standard example

Use the built-in USB-C standard instead of modeling a USB-C receptacle as a
plain `<chip />`. This exposes semantic connector pins to routing, DRC, and
pinout tooling.

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <connector
      name="USBC"
      standard="usb_c"
      pcbX={0}
      pcbY="-9mm"
      pcbRotation={180}
      connections={{
        VBUS1: "net.VBUS",
        VBUS2: "net.VBUS",
        GND1: "net.GND",
        GND2: "net.GND",
        DP1: "net.USB_DP",
        DP2: "net.USB_DP",
        DM1: "net.USB_DM",
        DM2: "net.USB_DM",
        CC1: "net.USB_CC1",
        CC2: "net.USB_CC2",
      }}
    />
  </board>
)
```

Typical USB-C pin aliases exposed by `standard="usb_c"` include `VBUS1`,
`VBUS2`, `GND1`, `GND2`, `DP1`, `DP2`, `DM1`, `DM2`, `CC1`, and `CC2`.
Connect both duplicated pins for power and USB 2.0 data nets so the board works
with either plug orientation.

For a USB-C device or sink, add the required CC pull-down resistors in your
circuit:

```tsx
<resistor name="R_CC1" resistance="5.1k" footprint="0402" connections={{
  pin1: "USBC.CC1",
  pin2: "net.GND",
}} />
<resistor name="R_CC2" resistance="5.1k" footprint="0402" connections={{
  pin1: "USBC.CC2",
  pin2: "net.GND",
}} />
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

Other insertion directions are `from_left`, `from_right`, `from_front`, and `from_back`.

## Props

Commonly used: `standard`, `name`, `footprint`, `connections`

## References

- Props: [ConnectorProps](https://github.com/tscircuit/props#connectorprops-connector)
- Source: [lib/components/connector.ts](https://github.com/tscircuit/props/blob/main/lib/components/connector.ts)
- Local docs: [docs/docs/elements/connector.mdx](../docs/docs/elements/connector.mdx)
