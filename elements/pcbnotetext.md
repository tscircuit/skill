# `<pcbnotetext />`

Add text annotations and labels to your PCB layout.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <pcbnotetext
      pcbX={0}
      pcbY={0}
      text="Hello PCB"
      fontSize={1.5}
      anchorAlignment="center"
    />
  </board>
)
```

## Props

Commonly used: `text`, `anchorAlignment`, `font`, `fontSize`, `color`, `name`, `footprint`, `connections`

## References

- Props: [PcbNoteTextProps](https://github.com/tscircuit/props#pcbnotetextprops-pcbnotetext)
- Source: [lib/components/pcb-note-text.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-note-text.ts)
- Local docs: [docs/docs/elements/pcbnotetext.mdx](../docs/docs/elements/pcbnotetext.mdx)
