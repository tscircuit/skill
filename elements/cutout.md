# `<cutout />`

Remove material from a board outline to create slots, notches, or other interior shapes.

## Example

```tsx
export default () => (
    <board width="30mm" height="20mm">
      <cutout shape="rect" width="5mm" height="3mm" pcbX="-10mm" pcbY="0mm" />
      <cutout shape="circle" radius="2mm" pcbX="0mm" pcbY="0mm" />
      <cutout
        shape="polygon"
        points={[
          { x: 5, y: -2 },
          { x: 8, y: 0 },
          { x: 5, y: 2 },
          { x: 6, y: 0 },
        ]}
        pcbX="5mm"
        pcbY="0mm"
      />
    </board>
  )
```

## Props

Commonly used: `name`, `shape`, `width`, `height`, `footprint`, `connections`

## References

- Props: [RectCutoutProps](https://github.com/tscircuit/props#rectcutoutprops-cutout)
- Source: [lib/components/cutout.ts](https://github.com/tscircuit/props/blob/main/lib/components/cutout.ts)
- Local docs: [docs/docs/elements/cutout.mdx](../docs/docs/elements/cutout.mdx)
