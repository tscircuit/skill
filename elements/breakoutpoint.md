# `<breakoutpoint />`

A `<breakoutpoint />` defines an explicit location where a connection should exit a [`<breakout />`](./breakout.md). Use it when you want to control exactly where a net escapes the breakout region instead of relying on auto-generated breakout points.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <breakout>
      <resistor name="R1" resistance="1k" footprint="0402" pcbX={0} pcbY={0} />
      <breakoutpoint connection="R1.1" pcbX={5} pcbY={5} />
    </breakout>
  </board>
)
```

## Props

Commonly used: `connection` (the pin selector that should exit at this point), `pcbX`, `pcbY`

## References

- Props: [BreakoutPointProps](https://github.com/tscircuit/props#breakoutpointprops-breakoutpoint)
- Source: [lib/components/breakout-point.ts](https://github.com/tscircuit/props/blob/main/lib/components/breakout-point.ts)
- Related: [`<breakout />`](./breakout.md)
- Docs: https://docs.tscircuit.com/elements/breakoutpoint
