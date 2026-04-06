# `<breakoutpoint />`

Specifies a PCB location where a connection inside a breakout should exit.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <breakout autorouter="auto">
      <resistor name="R1" resistance="1k" footprint="0402" pcbX={0} pcbY={0} />
      <breakoutpoint connection="R1.1" pcbX={5} pcbY={5} />
    </breakout>
  </board>
)
```

## Props

Commonly used: `connection`, `name`, `footprint`, `connections`

## References

- Props: [BreakoutPointProps](https://github.com/tscircuit/props#breakoutpointprops-breakoutpoint)
- Source: [lib/components/breakoutpoint.ts](https://github.com/tscircuit/props/blob/main/lib/components/breakoutpoint.ts)
- Local docs: [docs/docs/elements/breakoutpoint.mdx](../docs/docs/elements/breakoutpoint.mdx)
