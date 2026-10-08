# `<assembly.cadassembly />`

An alias for [`assembly.subassembly`](./assemblysubassembly.md), with the same
props, source identity, and inherited placement.

## Example

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device name="product">
    <assembly.cadassembly name="housing">
      <assembly.part
        name="cover"
        modelUrl="https://docs.tscircuit.com/models/assembly/cover.glb"
      />
    </assembly.cadassembly>
  </assembly.device>
)
```

Do not confuse it with the unnamespaced [`<cadassembly>`](./cadassembly.md),
which groups CAD geometry inside a component's `cadModel`.

## References

- [Docs](https://docs.tscircuit.com/elements/assembly-cadassembly)
- [Props](https://github.com/tscircuit/props/blob/main/lib/assembly/cadassembly.ts)
- [Assembly guide](../ASSEMBLY.md)
