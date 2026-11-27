# Draw wire harness (cable manufacturing) sheets

A harness drawing shows one cable flattened: both connectors, which pin each
wire lands on, the cut length, a wiring list and a parts list. Describe the
cable with `<assembly.cable />` and `<assembly.cablewire />`, then place an
`<assembly.drawing.harnessview />` on an `<assembly.drawing.page />`.

Needs `tscircuit` 0.0.3290 or later. If `assembly.cablewire` or
`assembly.drawing.harnessview` is reported as an unknown element, update
`tscircuit` before changing the code.

Pages, title blocks, notes and part views are covered in
[Assembly drawings](./ASSEMBLY_DRAWINGS.md); a harness view can share a page
with them.

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device>
    {/* The board only anchors the cable's two endpoints. */}
    <board width={40} height={20} routingDisabled>
      <connector name="J1" standard="jst_ph" pinCount={6} footprint="jst6_ph" pcbX={-12} />
      <connector name="J2" standard="jst_ph" pinCount={6} footprint="jst6_ph" pcbX={12} />
    </board>
    <assembly.cable
      name="MOTOR_CABLE"
      from=".J1"
      to=".J2"
      length="50mm"
      lengthTolerance="3mm"
      wireAwg={22}
      fromConnectorName="H1"
      toConnectorName="H2"
    >
      <assembly.cablewire name="A+" fromPin={1} toPin={1} color="black" />
      <assembly.cablewire name="A-" fromPin={3} toPin={4} color="green" />
      <assembly.cablewire name="B+" fromPin={4} toPin={3} color="red" />
      <assembly.cablewire name="B-" fromPin={6} toPin={6} color="blue" />
    </assembly.cable>
    <assembly.drawing.page name="motor-cable" size="iso_a4" anchorAlignment="bottom_left">
      <assembly.drawing.harnessview
        cableRef="MOTOR_CABLE"
        centerX={148.5}
        centerY={150}
        width={230}
        height={76}
        showBalloons
      />
      <assembly.drawing.wiringtable
        cableRef="MOTOR_CABLE"
        title="WIRING"
        paperX={292}
        paperY={100}
        anchorAlignment="top_right"
      />
      <assembly.drawing.bomtable
        partRef="MOTOR_CABLE"
        paperX={5}
        paperY={5}
        anchorAlignment="bottom_left"
      />
      <assembly.drawing.titleblock
        title="MOTOR CABLE, PH-6P, 22AWG, L=50mm"
        identificationNumber="CBL-MOTOR-001"
        revisionIndex="A"
        legalOwner="ACME"
        creator="ACME"
        sheetNumber={1}
        numberOfSheets={1}
      />
    </assembly.drawing.page>
  </assembly.device>
)
```

Export and open the sheet before reporting it done:

```bash
tsci export motor-cable.circuit.tsx --drawing motor-cable
```

`tsci build motor-cable.circuit.tsx --drawings` writes every page to
`dist/motor-cable/drawings/<page name>.svg`.

## Describe the cable

- The cable needs two endpoints. Put two `<connector />` elements on a board
  inside `<assembly.device>`; add `routingDisabled` when the board exists only
  to hold them.
- For JST cables, give both connectors the same `standard` (`"jst_ph"` or
  `"jst_sh"`) and `pinCount`, with the matching footprint (`jst6_ph`,
  `jst4_sh`). The cable type is inferred.
- For different ends, set `model` on the cable, for example
  `model="adaptercable_a(jst_sh_pins4)_b(jst_ph_pins4)"`. End A is `from`.
- Add one `<assembly.cablewire />` per conductor. `fromPin` and `toPin` are
  positions on the cable's own plugs, counted from 1. A cavity with no wire is
  left empty.
- Set `length` (and optionally `lengthTolerance`) to get the length dimension.
  It is the authored build length; it is never measured from the 3D route.
- `wireAwg` on the cable is inherited by its wires; `awg` on a wire overrides it.

Props: [`<assembly.cable />`](./elements/assemblycable.md),
[`<assembly.cablewire />`](./elements/assemblycablewire.md).

## Lay out the sheet

- Page positions are relative to the page's `anchorAlignment`, which defaults
  to `center`. With `bottom_left`, every position on the sheet is positive. An
  A4 landscape sheet is 297 × 210 mm. For a small figure, give the page a
  `width` and `height` instead of `size`.
- A harness view needs about 160 × 50 mm, and about 70 mm of height with
  `showBalloons`.
- Tables always need `paperX`, `paperY` and `anchorAlignment`. The alignment
  names the point of the table that sits at that position, so `top_right`
  makes the table extend left and down.
- Reserve space from the table sizes. Rows are 6 mm tall. A wiring list is
  28 mm wide plus 24 mm for each of the `SIGNAL`, `COLOR` and `AWG` columns it
  shows; a column appears only when some wire states that attribute. A parts
  list is 100 mm wide.
- A parts list anchored at a `bottom_*` point has its heading at the bottom
  and numbers items upward, which suits the corner beside a title block.
- `showBalloons` needs an `<assembly.drawing.bomtable />` on the same page
  whose `partRef` is the same cable.
- Several cables go on one page as several views; place them with `belowRef`
  or `rightOfRef` and give each its own tables.

Props: [`<assembly.drawing.harnessview />`](./elements/assemblydrawingharnessview.md),
[`<assembly.drawing.wiringtable />`](./elements/assemblydrawingwiringtable.md),
[`<assembly.drawing.bomtable />`](./elements/assemblydrawingbomtable.md).

## Read the drawing correctly

- Both housings are drawn from the same face of the cable. Pin 1 is at the top
  of the `from` end and at the bottom of the `to` end, so a pin-to-pin cable
  (1→1, 2→2, …) is drawn with all its wires crossing, and a reversed pinout
  (1→N, …, N→1) is drawn as parallel wires. This is correct; do not "fix" it by
  changing the pinout.
- The drawn length is not to scale. Only the dimension text states the length.
- Wires are black line work. Colors appear in the wiring list.
- Keep `fromConnectorName` and `toConnectorName` to three characters or fewer
  (`H1`, `J2`, `MCU`); longer names can overlap the pin numbers.

## Errors

| Message contains | Fix |
| --- | --- |
| `uses fromPin=7, but its from connector has 6 contacts` | The pin exceeds the plug's contact count. Use a larger connector or correct the pin. |
| `lands two wires on toPin=2` | Each contact takes one wire per end. |
| `needs assembly.cablewire children` | A cable with numbered contacts must list its wires before it can be drawn. |
| `showBalloons needs an assembly.drawing.bomtable` | Add a `bomtable` with `partRef` set to that cable on the same page. |
| `must select exactly one assembly.cable` | `cableRef` is the cable's `name`, or a selector matching one cable. |
| `Adapter connector pin counts must match` | Both ends of a cable must have the same contact count. Use the larger housing at both ends and leave cavities empty. |
| `lengthTolerance requires length` | Set `length` as well. |

## Not supported

- Cables whose two ends have different contact counts.
- Splices, branches and more than two connectors on one cable.
- Showing the 3D cable route in a harness view; use
  `<assembly.drawing.partview />` for geometry.
