# `<transistor />`

A transistor is a three-terminal semiconductor device that can amplify or switch electronic signals. It is a fundamental component in many electronic circuits, including amplifiers, oscillators, and digital logic gates.

## Example

```tsx
export default () => (
  <transistor
    name="Q1"
    type="npn"
    footprint="sot23"
  />
)
```

## Props

Commonly used: `type`, `connections`, `name`, `footprint`

## References

- Props: [TransistorProps](https://github.com/tscircuit/props#transistorprops-transistor)
- Source: [lib/components/transistor.ts](https://github.com/tscircuit/props/blob/main/lib/components/transistor.ts)
- Local docs: [docs/docs/elements/transistor.mdx](../docs/docs/elements/transistor.mdx)
