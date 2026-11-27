# `<assembly.drawing.wiringtable />`

A pin-to-pin wiring list for one [`<assembly.cable />`](./assemblycable.md) on
an `<assembly.drawing.page />`, one row per wire in `fromPin` order.

## Example

```tsx
<assembly.drawing.wiringtable
  cableRef="I2C"
  title="WIRING"
  paperX={0}
  paperY={-12}
  anchorAlignment="top_center"
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `cableRef` | `string` | Required. The cable's `name`, or a selector matching one cable with wires |
| `paperX`, `paperY` | distance | Required position relative to the page anchor; +X right, +Y up |
| `anchorAlignment` | nine-point anchor | Required. The point of the table at `paperX`/`paperY`: `top_left`, `top_center`, `top_right`, `center_left`, `center`, `center_right`, `bottom_left`, `bottom_center`, `bottom_right` |
| `title` | `string` | Heading row spanning the table |
| `name` | `string` | Table identity |

The pin columns are headed with the cable's `fromConnectorName` and
`toConnectorName` (`A` and `B` when unset). `SIGNAL`, `COLOR` and `AWG` columns
appear only when some wire states a `name`, `color` or gauge. Pin columns are
14 mm wide, detail columns 24 mm, rows 6 mm.

## References

- Props: [AssemblyDrawingWiringTableProps](https://github.com/tscircuit/props/blob/main/lib/assembly/drawing/wiringtable.ts)
- Docs: [`<assembly.drawing.wiringtable />`](https://docs.tscircuit.com/elements/assembly-drawing-wiringtable)
- See also: [Wire harness drawings](../WIRE_HARNESS.md)
