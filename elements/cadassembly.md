# `<cadassembly />`

A CAD assembly is a collection of cad models and constraints to "put together" a component.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="J1"
      cadModel={
        <cadassembly>
          <cadmodel
            positionOffset={{ x: 0, y: -4, z: 0 }}
            rotationOffset={{ x: 0, y: 0, z: 0 }}
            modelUrl="https://modelcdn.tscircuit.com/jscad_models/pinrow4.glb"
          />
          <cadmodel
            positionOffset={{ x: 0, y: 4, z: 0 }}
            rotationOffset={{ x: 0, y: 0, z: 0 }}
            modelUrl="https://modelcdn.tscircuit.com/jscad_models/pinrow4.glb"
          />
        </cadassembly>
      }
    />
  </board>
)
```

## Props

Commonly used: `originalLayer`, `children`, `name`, `footprint`, `connections`

## References

- Props: [CadAssemblyProps](https://github.com/tscircuit/props#cadassemblyprops-cadassembly)
- Source: [lib/components/cadassembly.ts](https://github.com/tscircuit/props/blob/main/lib/components/cadassembly.ts)
- Local docs: [docs/docs/elements/cadassembly.mdx](../docs/docs/elements/cadassembly.mdx)
