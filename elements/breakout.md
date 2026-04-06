# `<breakout />`

A breakout is a container that lets you route nets out of a group at explicit points.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <breakout autorouter="auto">
      <resistor
        name="R1"
        resistance="1k"
        footprint="0402"
        pcbX={0}
        pcbY={0}
      />
      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="0402"
        pcbX={2}
        pcbY={0}
      />
      <trace from="R1.2" to="C1.1" />
      <breakoutpoint connection="R1.1" pcbX={5} pcbY={5} />
    </breakout>
  </board>
)
```

## Props

Commonly used: `padding`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingBottom`, `name`, `footprint`, `connections`

## References

- Props: [BreakoutProps](https://github.com/tscircuit/props#breakoutprops-breakout)
- Source: [lib/components/breakout.ts](https://github.com/tscircuit/props/blob/main/lib/components/breakout.ts)
- Local docs: [docs/docs/elements/breakout.mdx](../docs/docs/elements/breakout.mdx)
