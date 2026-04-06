# `<group />`

A group is the basic container element that can contain other elements.

## Example

```tsx
import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <resistor name="R1" resistance="1k" schX={-2} />
    <group schY={-3}>
      <resistor name="R2" resistance="1k" schX={2} />
      <trace from={sel.R1.pin2} to={sel.R2.pin1} />
    </group>
  </board>
)
```

## Props

Commonly used: `layoutMode`, `position`, `grid`, `gridCols`, `gridRows`, `gridTemplateRows`, `gridTemplateColumns`, `gridTemplate`

## References

- Props: [BaseGroupProps](https://github.com/tscircuit/props#basegroupprops-group)
- Source: [lib/components/group.ts](https://github.com/tscircuit/props/blob/main/lib/components/group.ts)
- Local docs: [docs/docs/elements/group.mdx](../docs/docs/elements/group.mdx)
