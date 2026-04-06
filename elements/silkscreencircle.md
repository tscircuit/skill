# `<silkscreencircle />`

Silkscreen circles are often used to indicate "pin1" on a chip.

## Example

```tsx
export default () => (
<board width="5mm" height="5mm">
  <group>
    <footprint>
      <silkscreencircle pcbX={0} pcbY={0} radius={1} />
    </footprint>
  </group>
</board>
)
```

## Props

Commonly used: `isFilled`, `isOutline`, `strokeWidth`, `radius`, `name`, `footprint`, `connections`

## References

- Props: [SilkscreenCircleProps](https://github.com/tscircuit/props#silkscreencircleprops-silkscreencircle)
- Source: [lib/components/silkscreen-circle.ts](https://github.com/tscircuit/props/blob/main/lib/components/silkscreen-circle.ts)
- Local docs: [docs/docs/footprints/silkscreencircle.mdx](../docs/docs/footprints/silkscreencircle.mdx)
