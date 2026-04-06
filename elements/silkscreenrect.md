# `<silkscreenrect />`

Silkscreen rectangles can be used to encapsulate a rectangular area around a chip.

## Example

```tsx
export default () => (
<board width="5mm" height="5mm">
   <footprint>
     <silkscreenrect pcbX={0} pcbY={0} width={1} height={1} />
   </footprint>
 </board>
 )
```

## Props

Commonly used: `filled`, `stroke`, `strokeWidth`, `width`, `height`, `cornerRadius`, `name`, `footprint`

## References

- Props: [SilkscreenRectProps](https://github.com/tscircuit/props#silkscreenrectprops-silkscreenrect)
- Source: [lib/components/silkscreen-rect.ts](https://github.com/tscircuit/props/blob/main/lib/components/silkscreen-rect.ts)
- Local docs: [docs/docs/footprints/silkscreenrect.mdx](../docs/docs/footprints/silkscreenrect.mdx)
