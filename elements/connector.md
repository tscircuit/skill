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

## USB connectors

Use `<connector />` (rather than `<chip />`) for all USB receptacles and plugs (USB-C, Micro-USB, Mini-USB, and USB-A/B) so connector placement and accessible-orientation checks apply.

### USB-C (`standard="usb_c"`)

For a standard 16-pin USB-C 2.0 receptacle, set `standard="usb_c"` (do not use `variant="usbc"`, as `<connector />` has no `variant` prop). When no explicit `footprint` is provided, the parts engine selects a compatible USB-C receptacle, loads its footprint and 3D CAD model without a JLCPCB import, renders the USB-C symbol inside the schematic box, and exposes canonical port labels:

- Power: `VBUS1`, `VBUS2`, `GND1`, `GND2`
- Configuration & sideband: `CC1`, `CC2`, `SBU1`, `SBU2`
- USB 2.0 differential data: `DP1`, `DP2`, `DM1` (alias `DN1`), `DM2` (alias `DN2`)
- Shield / mounting tabs: `SHELL1`–`SHELL4` (aliases `MH1`–`MH4`, `EH1`–`EH4`, `MOUNT1`–`MOUNT4`)

For a 5V upstream-facing port (UFP / power sink) with reversible USB 2.0 data, pull `CC1` and `CC2` to `net.GND` through separate `5.1k` resistors and tie each reversible pair (`VBUS1`/`VBUS2`, `DP1`/`DP2`, `DM1`/`DM2`) together:

```tsx
export default () => (
  <board width="30mm" height="25mm">
    <connector name="USBC" standard="usb_c" pcbX={-10} pcbY={0} />
    <resistor name="R_CC1" resistance="5.1k" footprint="0402" pcbX={-2} pcbY={3} />
    <resistor name="R_CC2" resistance="5.1k" footprint="0402" pcbX={-2} pcbY={-3} />

    <trace from=".USBC > .VBUS1" to="net.VBUS" />
    <trace from=".USBC > .VBUS2" to="net.VBUS" />
    <trace from=".USBC > .GND1" to="net.GND" />
    <trace from=".USBC > .GND2" to="net.GND" />
    <trace from=".USBC > .SHELL1" to="net.GND" />
    <trace from=".USBC > .SHELL2" to="net.GND" />
    <trace from=".USBC > .SHELL3" to="net.GND" />
    <trace from=".USBC > .SHELL4" to="net.GND" />

    <trace from=".USBC > .CC1" to=".R_CC1 > .pin1" />
    <trace from=".R_CC1 > .pin2" to="net.GND" />
    <trace from=".USBC > .CC2" to=".R_CC2 > .pin1" />
    <trace from=".R_CC2 > .pin2" to="net.GND" />

    <trace from=".USBC > .DP1" to="net.USB_DP" />
    <trace from=".USBC > .DP2" to="net.USB_DP" />
    <trace from=".USBC > .DM1" to="net.USB_DM" />
    <trace from=".USBC > .DM2" to="net.USB_DM" />
  </board>
)
```

To pin a specific USB-C part or custom geometry, pass `manufacturerPartNumber`, `supplierPartNumbers`, or an explicit `footprint` (an explicit `footprint` takes precedence over `standard` part lookup). For Micro-USB, Mini-USB, or USB-A/B connectors, keep `<connector />` and provide `footprint` and `pinLabels` (as in the `AF_QTZB1_0` USB-A example above) or import a supplier part.

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

Commonly used: `standard`, `pinCount`, `name`, `footprint`, `pinLabels`, `internallyConnectedPins`, `manufacturerPartNumber`, `supplierPartNumbers`, `connections`.

- `standard`: `"usb_c" | "m2" | "jst_sh" | "jst_gh" | "jst_zh" | "jst_ph" | "jst_xh" | "jst_vh"`.
- `pinCount`: positive integer circuit count when using a JST `standard` (`jst_sh` 1.0 mm, `jst_gh` 1.25 mm, `jst_zh` 1.5 mm, `jst_ph` 2.0 mm, `jst_xh` 2.5 mm, `jst_vh` 3.96 mm).

## References

- Props: [ConnectorProps](https://github.com/tscircuit/props#connectorprops-connector)
- Source: [lib/components/connector.ts](https://github.com/tscircuit/props/blob/main/lib/components/connector.ts)
- Local docs: [docs/docs/elements/connector.mdx](../docs/docs/elements/connector.mdx)
