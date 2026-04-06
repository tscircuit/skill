# `<tracehint />`

Autorouter hint that nudges a trace through preferred points.

## Example

```tsx
export default () => (
  <board width="20mm" height="12mm">
    <trace from=".U1 > .pin1" to=".R1 > .pin1">
      <tracehint offset={{ x: 0, y: 3 }} />
    </trace>
  </board>
)
```

## Props

Commonly used: `x`, `y`, `via`, `toLayer`, `for`, `order`, `offset`, `offsets`

## References

- Props: [TraceHintProps](https://github.com/tscircuit/props#tracehintprops-tracehint)
- Source: [lib/components/trace-hint.ts](https://github.com/tscircuit/props/blob/main/lib/components/trace-hint.ts)
