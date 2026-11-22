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

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <connector name="USBC" standard="usb_c" pcbX={0} pcbY={0} />
  </board>
)
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

When the footprint is a footprinter string, keep the string and add an empty
`<footprint />` child that carries only the direction:

```tsx
<connector name="J1" footprint="jst2_p2.5mm_xh" pinLabels={{ pin1: "VM", pin2: "GND" }}>
  <footprint insertionDirection="from_above" />
</connector>
```

The full diagnostic, as printed by `tsci check placement`, is
`pcb_connector_not_in_accessible_orientation_warning`.

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

Commonly used: `standard`, `name`, `footprint`, `connections`, `pinLabels`, `schPinArrangement`

A two-pin connector on a power rail is drawn horizontally by default and is
reported as `TwoPinComponentShouldBeVertical`. Put the rail pins on the top and
bottom with `schPinArrangement={{ topSide: ["VM"], bottomSide: ["GND"] }}`;
see [Schematic placement](../SCHEMATIC_PLACEMENT.md).

## References

- Props: [ConnectorProps](https://github.com/tscircuit/props#connectorprops-connector)
- Source: [lib/components/connector.ts](https://github.com/tscircuit/props/blob/main/lib/components/connector.ts)
- Local docs: [docs/docs/elements/connector.mdx](../docs/docs/elements/connector.mdx)
