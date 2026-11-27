# `<assembly.drawing.bomtable />`

A numbered parts list on an `<assembly.drawing.page />`. Its item numbers are
the numbers that harness view balloons show.

## Example

```tsx
<assembly.drawing.bomtable
  partRef="MOTOR_CABLE"
  paperX={5}
  paperY={5}
  anchorAlignment="bottom_left"
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `partRef` | `string` | A cable's `name`, or a selector for one assembly part, whose parts are listed. Omit to list the assembly's top-level parts |
| `paperX`, `paperY` | distance | Required position relative to the page anchor; +X right, +Y up |
| `anchorAlignment` | nine-point anchor | Required. The point of the table at `paperX`/`paperY` |
| `name` | `string` | Table identity |

For a wired cable the rows are: wire by gauge and color (counted in cut
pieces), each end's housing, and one crimp contact per wire end. Identical
lines merge. The table is 100 mm wide with 6 mm rows. With a `bottom_*`
`anchorAlignment` the heading is at the bottom and items number upward.

## References

- Props: [AssemblyDrawingBomTableProps](https://github.com/tscircuit/props/blob/main/lib/assembly/drawing/bomtable.ts)
- Docs: [`<assembly.drawing.bomtable />`](https://docs.tscircuit.com/elements/assembly-drawing-bomtable)
- See also: [Wire harness drawings](../WIRE_HARNESS.md)
