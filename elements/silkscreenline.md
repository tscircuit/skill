# `<silkscreenline />`

The `<silkscreenline />` element creates a line on the silkscreen layer within a footprint.

## Example

```tsx
export default () => (
  <board width="50mm" height="50mm">
    <footprint>
      <silkscreenline 
        x1="-20mm" 
        y1="0mm" 
        x2="20mm" 
        y2="0mm"
        strokeWidth="0.1mm"
      />
    </footprint>
  </board>
)
```

## Props

Commonly used: `pcbX`, `pcbY`, `pcbOffsetX`, `pcbOffsetY`, `pcbRotation`, `strokeWidth`, `x1`, `y1`

## References

- Props: [SilkscreenLineProps](https://github.com/tscircuit/props#silkscreenlineprops-silkscreenline)
- Source: [lib/components/silkscreen-line.ts](https://github.com/tscircuit/props/blob/main/lib/components/silkscreen-line.ts)
- Local docs: [docs/docs/footprints/silkscreenline.mdx](../docs/docs/footprints/silkscreenline.mdx)
