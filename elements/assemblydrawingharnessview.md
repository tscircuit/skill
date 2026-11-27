# `<assembly.drawing.harnessview />`

A flattened wiring view of one [`<assembly.cable />`](./assemblycable.md) on an
`<assembly.drawing.page />`: both connectors, one line per wire, end pin
numbers and the length dimension.

## Example

```tsx
<assembly.drawing.page name="i2c-cable" width={180} height={70}>
  <assembly.drawing.harnessview cableRef="I2C" width={160} height={50} />
</assembly.drawing.page>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `cableRef` | `string` | Required. The cable's `name`, or a selector matching one cable |
| `width`, `height` | distance | Required viewport size on paper |
| `centerX`, `centerY` | distance | Viewport center relative to the page anchor; default `0` |
| `leftOfRef`, `rightOfRef`, `aboveRef`, `belowRef` | `string` | Place beside a sibling view, such as `".battery"` |
| `name` | `string` | Name for sibling placement selectors |
| `displayName` | `string` | Caption; defaults to the view name, then the cable name |
| `showBalloons` | `boolean` | Circle parts-list item numbers; needs a `bomtable` for the same cable on the page |
| `children` | | `<assembly.drawing.note />` elements positioned with `xOffsetFromViewCenter` / `yOffsetFromViewCenter` |

## References

- Props: [AssemblyDrawingHarnessViewProps](https://github.com/tscircuit/props/blob/main/lib/assembly/drawing/harnessview.ts)
- Docs: [`<assembly.drawing.harnessview />`](https://docs.tscircuit.com/elements/assembly-drawing-harnessview)
- See also: [Wire harness drawings](../WIRE_HARNESS.md)
