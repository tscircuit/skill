# `<crystal />`

A crystal oscillator provides a stable clock signal essential for timing applications and microcontroller operations.

## Example

```tsx
export default () => (
  <board width="50mm" height="50mm">
    <crystal
      name="XT1"
      frequency="16MHz"
      loadCapacitance="18pF"
      footprint="hc49"
    />
  </board>
)
```

## Props

Commonly used: `frequency`, `loadCapacitance`, `manufacturerPartNumber`, `mpn`, `pinVariant`, `schOrientation`, `connections`, `name`

## References

- Props: [CrystalProps](https://github.com/tscircuit/props#crystalprops-crystal)
- Source: [lib/components/crystal.ts](https://github.com/tscircuit/props/blob/main/lib/components/crystal.ts)
- Local docs: [docs/docs/elements/crystal.mdx](../docs/docs/elements/crystal.mdx)
