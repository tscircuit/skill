# `<courtyardcircle />`

Draw circular IPC courtyard markings around footprint features.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <chip
      name="U1"
      footprint={
        <footprint>
          <platedhole shape="circle" pcbX={-2.5} pcbY={0} outerDiameter={2.2} holeDiameter={1.1} />
          <platedhole shape="circle" pcbX={2.5} pcbY={0} outerDiameter={2.2} holeDiameter={1.1} />
          <courtyardcircle pcbX={0} pcbY={0} radius={4} strokeWidth={0.1} />
        </footprint>
      }
    />
  </board>
)
```

## Props

Commonly used: `radius`, `name`, `footprint`, `connections`

## References

- Props: [CourtyardCircleProps](https://github.com/tscircuit/props#courtyardcircleprops-courtyardcircle)
- Source: [lib/components/courtyard-circle.ts](https://github.com/tscircuit/props/blob/main/lib/components/courtyard-circle.ts)
- Local docs: [docs/docs/elements/courtyardcircle.mdx](../docs/docs/elements/courtyardcircle.mdx)
