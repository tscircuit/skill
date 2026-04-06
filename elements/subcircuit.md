# `<subcircuit />`

A `<subcircuit />` is a powerful organizational element in tscircuit that represents a collection of elements that are tightly coupled. Subcircuits are often used for a small functional block, such as a voltage regulator.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <subcircuit name="subcircuit1" schX={-2}>
      <resistor name="R1" resistance="1k" footprint="0402" />
    </subcircuit>
    <subcircuit name="subcircuit2" schX={2}>
      <resistor name="R2" resistance="1k" footprint="0402"  />
    </subcircuit>
    <trace from=".subcircuit1 .R1 .pin1" to=".subcircuit2 .R2 .pin1" />
  </board>
)
```

## Props

Commonly used: `name`, `footprint`, `connections`

## References

- Props: [SubcircuitProps](https://github.com/tscircuit/props#subcircuitprops-subcircuit)
- Source: [lib/components/subcircuit.ts](https://github.com/tscircuit/props/blob/main/lib/components/subcircuit.ts)
- Local docs: [docs/docs/elements/subcircuit.mdx](../docs/docs/elements/subcircuit.mdx)
