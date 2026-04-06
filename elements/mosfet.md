# `<mosfet />`

A MOSFET or "metal-oxide-semiconductor field-effect transistor" is a type of transistor that is used to control the flow of current through a circuit.

## Example

```tsx
export default () => (
  <mosfet
    name="Q1"
    channelType="n"
    mosfetMode="depletion"
    footprint="sot23"
  />
)
```

## Props

Commonly used: `channelType`, `mosfetMode`, `name`, `footprint`, `connections`

## References

- Props: [MosfetProps](https://github.com/tscircuit/props#mosfetprops-mosfet)
- Source: [lib/components/mosfet.ts](https://github.com/tscircuit/props/blob/main/lib/components/mosfet.ts)
- Local docs: [docs/docs/elements/mosfet.mdx](../docs/docs/elements/mosfet.mdx)
