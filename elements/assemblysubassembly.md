# `<assembly.subassembly />`

Groups nested assembly elements and CAD models, optionally with its own model.
It is a mechanical grouping, not an electrical subcircuit.

## Example

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device name="product">
    <assembly.subassembly name="housing" displayName="Display housing">
      <assembly.part
        name="cover"
        modelUrl="https://docs.tscircuit.com/models/assembly/cover.glb"
      />
      <cadmodel
        modelUrl="https://docs.tscircuit.com/models/assembly/bracket.glb"
        pcbX={10}
        pcbZ={4}
      />
    </assembly.subassembly>
  </assembly.device>
)
```

## Props and behavior

- `name`: required nonempty stable identity.
- `displayName`: optional human-facing alternate.
- `model`, `modelUrl`, `cadModel`: optional, mutually exclusive sources for its
  own geometry. `cadModel` accepts existing CAD formats, JSX, and `null`.
- `children`: nested assembly elements and CAD geometry.

Omit the model for a geometry-free container. Children inherit its assembly
origin; offsets on the container's own model do not move its children. There
is no `connectsTo` or face-mounting API on a subassembly.

## References

- [Docs](https://docs.tscircuit.com/elements/assembly-subassembly)
- [Props](https://github.com/tscircuit/props/blob/main/lib/assembly/subassembly.ts)
- [`assembly.cadassembly`](./assemblycadassembly.md) is the exact alias.
- [Assembly guide](../ASSEMBLY.md)
