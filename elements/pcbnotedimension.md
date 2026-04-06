# `<pcbnotedimension />`

The `<pcbnotedimension />` element adds dimension annotations to PCBs showing measurements between two points.

## Example

```tsx
export default () => (
  <board width="20mm" height="15mm">
    <resistor name="R1" resistance="10k" footprint="0402" pcbX={-3} pcbY={0} />
    <resistor name="R2" resistance="10k" footprint="0402" pcbX={3} pcbY={0} />
    <pcbnotedimension
      from={{ x: -3, y: 2 }}
      to={{ x: 3, y: 2 }}
      arrowSize={0.8}
      fontSize={1.5}
      color="#ffffff"
    />
  </board>
)
```

## Props

Commonly used: `from`, `to`, `text`, `offset`, `font`, `fontSize`, `color`, `arrowSize`

## References

- Props: [PcbNoteDimensionProps](https://github.com/tscircuit/props#pcbnotedimensionprops-pcbnotedimension)
- Source: [lib/components/pcb-note-dimension.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-note-dimension.ts)
- Local docs: [docs/docs/elements/pcbnotedimension.mdx](../docs/docs/elements/pcbnotedimension.mdx)
