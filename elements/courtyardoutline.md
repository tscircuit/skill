# `<courtyardoutline />`

Draw custom polygon courtyard boundaries for irregular package geometry.

## Example

```tsx
export default () => (
  <board width="30mm" height="24mm">
    <chip
      name="U1"
      footprint={
        <footprint>
          <platedhole shape="circle" pcbX={-4} pcbY={-2.5} outerDiameter={2.2} holeDiameter={1.1} />
          <platedhole shape="circle" pcbX={-4} pcbY={2.5} outerDiameter={2.2} holeDiameter={1.1} />
          <platedhole shape="circle" pcbX={4} pcbY={-2.5} outerDiameter={2.2} holeDiameter={1.1} />
          <platedhole shape="circle" pcbX={4} pcbY={2.5} outerDiameter={2.2} holeDiameter={1.1} />
          <courtyardoutline
            outline={[
              { x: -6, y: -5 },
              { x: 6, y: -5 },
              { x: 6, y: 5 },
              { x: 0, y: 7 },
              { x: -6, y: 5 },
            ]}
          />
        </footprint>
      }
    />
  </board>
)
```

## Props

Commonly used: `pcbLeftEdgeX`, `pcbRightEdgeX`, `pcbTopEdgeY`, `pcbBottomEdgeY`, `pcbX`, `pcbY`, `pcbOffsetX`, `pcbOffsetY`

## References

- Props: [CourtyardOutlineProps](https://github.com/tscircuit/props#courtyardoutlineprops-courtyardoutline)
- Source: [lib/components/courtyard-outline.ts](https://github.com/tscircuit/props/blob/main/lib/components/courtyard-outline.ts)
- Local docs: [docs/docs/elements/courtyardoutline.mdx](../docs/docs/elements/courtyardoutline.mdx)
