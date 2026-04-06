# `<jumper />`

A simple connector that typically uses a pinrow footprint but can be used for custom layouts as well.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <jumper name="J1" footprint="pinrow4" />
  </board>
)
```

## Props

Commonly used: `manufacturerPartNumber`, `pinLabels`, `schPinStyle`, `schPinSpacing`, `schWidth`, `schHeight`, `schDirection`, `schPinArrangement`

## References

- Props: [JumperProps](https://github.com/tscircuit/props#jumperprops-jumper)
- Source: [lib/components/jumper.ts](https://github.com/tscircuit/props/blob/main/lib/components/jumper.ts)
- Local docs: [docs/docs/elements/jumper.mdx](../docs/docs/elements/jumper.mdx)
