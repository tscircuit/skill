# `<fabricationnotedimension />`

Dimension callout drawn on the fabrication layer.

## Example

```tsx
export default () => (
  <board width="20mm" height="15mm">
    <fabricationnotedimension
      from={{ x: -4, y: 0 }}
      to={{ x: 4, y: 0 }}
      fontSize={1.2}
      arrowSize={0.8}
    />
  </board>
)
```

## Props

Commonly used: `from`, `to`, `text`, `offset`, `font`, `fontSize`, `color`, `arrowSize`

## References

- Props: [FabricationNoteDimensionProps](https://github.com/tscircuit/props#fabricationnotedimensionprops-fabricationnotedimension)
- Source: [lib/components/fabrication-note-dimension.ts](https://github.com/tscircuit/props/blob/main/lib/components/fabrication-note-dimension.ts)
