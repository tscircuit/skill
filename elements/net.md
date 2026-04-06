# `<net />`

The `<net />` element represents a bunch of traces that are all connected. You should use nets for representing power buses such as "V5", "V3_3" and "GND"

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
   <group>
    <capacitor capacitance="1uF" footprint="0603" name="C1" />
    <net name="V5" />
    <trace from="net.V5" to=".C1 .pos" />
   </group>
  </board>
)
```

## Props

Commonly used: `name`, `connectsTo`, `highlightColor`, `isPowerNet`, `isGroundNet`, `footprint`, `connections`

## References

- Props: [NetProps](https://github.com/tscircuit/props#netprops-net)
- Source: [lib/components/net.ts](https://github.com/tscircuit/props/blob/main/lib/components/net.ts)
- Local docs: [docs/docs/elements/net.mdx](../docs/docs/elements/net.mdx)
