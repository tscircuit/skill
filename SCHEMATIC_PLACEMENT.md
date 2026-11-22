# Pass `tsci check schematic-placement` in fewer rounds

`tsci check schematic-placement [file]` lists schematic boxes that are sized or
oriented badly. It exits 0 even when it reports issues, so read the output: a
clean run prints nothing, and a failing run prints `<SchematicBoxPositions>`
followed by `<SchematicPlacementIssues>`.

Most issues carry the fix as an attribute. Copy that value; do not estimate
one. The limits are tight (0.1 schematic units), and an oversized guess trades
one issue for another: a chip box widened from 1.7 to 3.6 to clear label
collisions is reported as `GenericSchematicBoxTooWide` with
`suggestedSchWidth="2.49"`.

| Issue | When it appears | Fix |
| --- | --- | --- |
| `SchematicBoxInnerLabelCollision` | Pin labels on adjacent sides of a box overlap or sit closer than 0.1 units. Typical for a chip with pins on all four sides and many pins on one side: the default box does not grow for the top and bottom labels. | Set `schWidth` or `schHeight` to the reported `suggestedSchWidth` / `suggestedSchHeight`. |
| `GenericSchematicBoxTooWide`, `SchematicPinPaddingToEdgeTooLarge` | The box leaves more than 1 unit of empty space between facing labels. | Set `schWidth` to `suggestedSchWidth`. |
| `PinHeaderSchematicBoxTooWide` | A `<pinheader />` with `pinLabels`. The default box is 1.7 wide and at most 0.1 units of empty space is allowed beside the labels. | Set `schWidth` to `suggestedSchWidth` (0.77 for short labels such as `STEP`, `nFAULT`). |
| `TwoPinComponentShouldBeVertical` | A two-pin part has a pin on a power or ground net and is drawn horizontally. | Passive: add the reported `deltaSchRotation` to `schRotation` so the power pin faces up (`schRotation={270}` when `pin1` is on the power net). `<connector />`: put the rail pins on the top and bottom with `schPinArrangement`; `schRotation` and `schOrientation` do not clear it. |

These defaults are flagged before any layout work, so set them in the first
draft:

```tsx
export default () => (
  <board width="30mm" height="30mm">
    <net name="VM" isPowerNet />
    <net name="GND" isGroundNet />

    {/* Labelled pin header: narrow the box to the labels. */}
    <pinheader
      name="J2"
      pinCount={4}
      pitch="2.54mm"
      pinLabels={["STEP", "DIR", "nFAULT", "GND"]}
      schWidth={0.77}
      schX={6}
      pcbY={10}
      connections={{ pin4: "net.GND" }}
    />

    {/* Two-pin power connector: rail pins on top and bottom. */}
    <connector
      name="J1"
      footprint="jst2_p2.5mm_xh"
      pinLabels={{ pin1: "VM", pin2: "GND" }}
      schPinArrangement={{ topSide: ["VM"], bottomSide: ["GND"] }}
      schX={-6}
      pcbY={-10}
      connections={{ pin1: "net.VM", pin2: "net.GND" }}
    />

    {/* Two-pin passive across the rails: power pin up. */}
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0603"
      schX={-3.5}
      schRotation={270}
      connections={{ pin1: "net.VM", pin2: "net.GND" }}
    />
  </board>
)
```

## Keep the loop short

- Schematic props (`schX`, `schY`, `schRotation`, `schWidth`, `schHeight`,
  `schPinArrangement`, sheets and sections) do not change the PCB. After an
  edit that touches only those, rerun `tsci check schematic-placement` alone.
  Run the PCB checks and `tsci build` again once the schematic is clean.
- Fix every reported issue in one edit. Each issue names its component and its
  suggested value.
- Sheet size and overflow are reported by `tsci build`, not by this check. See
  [`<schematicsheet />`](./elements/schematicsheet.md).
