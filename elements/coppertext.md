# `<coppertext />`

Copper-layer text for labels, logos, and exposed copper markings.

## Example

```tsx
export default () => (
  <board width="20mm" height="10mm">
    <coppertext
      text="GND"
      pcbX={0}
      pcbY={0}
      layers={["top"]}
      fontSize="2mm"
    />
  </board>
)
```

## Props

Commonly used: `text`, `anchorAlignment`, `font`, `fontSize`, `layers`, `knockout`, `mirrored`, `pcbX`

## References

- Props: [CopperTextProps](https://github.com/tscircuit/props#coppertextprops-coppertext)
- Source: [lib/components/copper-text.ts](https://github.com/tscircuit/props/blob/main/lib/components/copper-text.ts)
