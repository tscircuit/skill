# `<pcbnotepath />`

Draw complex paths and polylines on your PCB using multiple connected points.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <pcbnotepath
      strokeWidth={0.3}
      color="#ff0000"
      route={[
        { x: -5, y: 0 },
        { x: 0, y: 5 },
        { x: 5, y: 0 },
      ]}
    />
  </board>
)
```

## Props

Commonly used: `route`, `strokeWidth`, `color`, `name`, `footprint`, `connections`

## References

- Props: [PcbNotePathProps](https://github.com/tscircuit/props#pcbnotepathprops-pcbnotepath)
- Source: [lib/components/pcb-note-path.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-note-path.ts)
- Local docs: [docs/docs/elements/pcbnotepath.mdx](../docs/docs/elements/pcbnotepath.mdx)
