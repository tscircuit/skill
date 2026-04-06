# `<inductor />`

An `<inductor />` stores electrical energy in a magnetic field when current flows through it. Inductors are commonly used in filters, oscillators, power supplies, and RF circuits. They oppose changes in current flow and can smooth out rapid current variations.

## Example

```tsx
export default () => (
 <board width="10mm" height="10mm">
  <inductor
    name="L1"
    footprint="0603"
    inductance="10μH"
  />
 </board>
)
```

## Props

Commonly used: `inductance`, `maxCurrentRating`, `schOrientation`, `connections`, `name`, `footprint`

## References

- Props: [InductorProps](https://github.com/tscircuit/props#inductorprops-inductor)
- Source: [lib/components/inductor.ts](https://github.com/tscircuit/props/blob/main/lib/components/inductor.ts)
- Local docs: [docs/docs/elements/inductor.mdx](../docs/docs/elements/inductor.mdx)
