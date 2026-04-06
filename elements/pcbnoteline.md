# `<pcbnoteline />`

Draw straight lines on your PCB for annotations, guides, and visual indicators.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <pcbnoteline
      x1={-5}
      y1={0}
      x2={5}
      y2={0}
      strokeWidth={0.5}
      color="#ff0000"
    />
  </board>
)
```

## Props

Commonly used: `x1`, `y1`, `x2`, `y2`, `strokeWidth`, `color`, `isDashed`, `name`

## References

- Props: [PcbNoteLineProps](https://github.com/tscircuit/props#pcbnotelineprops-pcbnoteline)
- Source: [lib/components/pcb-note-line.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-note-line.ts)
- Local docs: [docs/docs/elements/pcbnoteline.mdx](../docs/docs/elements/pcbnoteline.mdx)
