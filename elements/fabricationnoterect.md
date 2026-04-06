# `<fabricationnoterect />`

Highlight fabrication callouts and assembly regions with rectangular annotations on the fabrication layer.

## Example

```tsx
export default () => (
  <board width="28mm" height="20mm">
    <resistor name="R1" resistance="1k" footprint="0603" pcbX={-6} pcbY={-2} />
    <capacitor name="C1" capacitance="1uF" footprint="0603" pcbX={-2} pcbY={2} />
    <fabricationnotetext
      text="Install last"
      pcbX={5}
      pcbY={2}
      anchorAlignment="bottom_left"
      fontSize="1.4mm"
    />
    <fabricationnoterect
      pcbX={0}
      pcbY={0}
      width={18}
      height={12}
      strokeWidth={0.3}
      color="#2563eb"
      hasStroke
    />
  </board>
)
```

## Props

Commonly used: `width`, `height`, `strokeWidth`, `isFilled`, `hasStroke`, `isStrokeDashed`, `color`, `cornerRadius`

## References

- Props: [FabricationNoteRectProps](https://github.com/tscircuit/props#fabricationnoterectprops-fabricationnoterect)
- Source: [lib/components/fabrication-note-rect.ts](https://github.com/tscircuit/props/blob/main/lib/components/fabrication-note-rect.ts)
- Local docs: [docs/docs/footprints/fabricationnoterect.mdx](../docs/docs/footprints/fabricationnoterect.mdx)
