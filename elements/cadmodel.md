# `<cadmodel />`

A CAD model is a 3D model of a component that can be used in a CAD assembly.

## Example

```tsx
export default () => (
  <board>
    <chip
      name="U1"
      footprint="soic8"
      cadModel={
        <cadmodel
          modelUrl="https://modelcdn.tscircuit.com/jscad_models/soic8.glb"
        />
      }
    />
  </board>
)
```

## Props

Commonly used: `modelUrl`, `stepUrl`, `pcbX`, `pcbY`, `pcbLeftEdgeX`, `pcbRightEdgeX`, `pcbTopEdgeY`, `pcbBottomEdgeY`

## References

- Props: [CadModelProps](https://github.com/tscircuit/props#cadmodelprops-cadmodel)
- Source: [lib/components/cadmodel.ts](https://github.com/tscircuit/props/blob/main/lib/components/cadmodel.ts)
- Local docs: [docs/docs/elements/cadmodel.mdx](../docs/docs/elements/cadmodel.mdx)
