# `<fabricationnotetext />`

The `<fabricationnotetext />` element adds fabrication layer callouts and build notes for assemblers.

## Example

```tsx
export default () => (
  <board width="24mm" height="18mm">
    <resistor name="R1" resistance="10k" footprint="0402" pcbX={-5} pcbY={0} />
    <led name="D1" footprint="0603" pcbX={5} pcbY={0} />
    <fabricationnotetext
      text="Install connector last"
      pcbX={0}
      pcbY={6}
      fontSize="1.6mm"
      anchorAlignment="top_left"
      color="#d97706"
    />
  </board>
)
```

## Props

Commonly used: `text`, `anchorAlignment`, `font`, `fontSize`, `color`, `name`, `footprint`, `connections`

## References

- Props: [FabricationNoteTextProps](https://github.com/tscircuit/props#fabricationnotetextprops-fabricationnotetext)
- Source: [lib/components/fabrication-note-text.ts](https://github.com/tscircuit/props/blob/main/lib/components/fabrication-note-text.ts)
- Local docs: [docs/docs/footprints/fabricationnotetext.mdx](../docs/docs/footprints/fabricationnotetext.mdx)
