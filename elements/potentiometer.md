# `<potentiometer />`

A potentiometer is a three-terminal resistor with a sliding or rotating contact that forms an adjustable voltage divider. You can also attach two terminals to create a variable resistor.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <potentiometer
      name="P1"
      maxResistance="10k"
      footprint="pinrow3"
    />
  </board>
)
```

## Props

Commonly used: `maxResistance`, `pinVariant`, `connections`, `name`, `footprint`

## References

- Props: [PotentiometerProps](https://github.com/tscircuit/props#potentiometerprops-potentiometer)
- Source: [lib/components/potentiometer.ts](https://github.com/tscircuit/props/blob/main/lib/components/potentiometer.ts)
- Local docs: [docs/docs/elements/potentiometer.mdx](../docs/docs/elements/potentiometer.mdx)
