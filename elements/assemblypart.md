# `<assembly.part />`

A generic component of an assembly, such as a purchased bracket or cover. It
retains its identity without requiring geometry and creates no PCB footprint,
schematic symbol, or electrical ports.

## Example

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device name="product">
    <board width={40} height={30} thickness={1.6} />
    <assembly.part
      name="bracket"
      displayName="Mounting bracket"
      cadModel={{
        glbUrl: "https://docs.tscircuit.com/models/assembly/bracket.glb",
        positionOffset: { x: 10, y: 0, z: 0.8 },
        rotationOffset: { x: 0, y: 0, z: 90 },
      }}
    />
  </assembly.device>
)
```

## Props and behavior

- `name`: required, trimmed, nonempty stable identity.
- `displayName`: optional human-facing alternate.
- `model`: modelprinter/footprinter specification or HTTP(S) model URL.
- `modelUrl`: imported CAD URL or asset path.
- `cadModel`: existing CAD model formats, including JSX CAD geometry and `null`.

Supply at most one model source. Omit geometry or use `cadModel={null}` for an
unmodeled part; explicit `null` still conflicts with other sources. Standalone
parts use the world origin and nested parts inherit their nearest assembly's
placement. CAD offsets are in the local frame, in mm, and do not move its origin.
A screen can target `.bracket` with `connectsTo`.

There is no `jscad`, `mountedTo`, or `mountFace` prop. For face mounting, use
[`assembly.printedpart`](./assemblyprintedpart.md). For grouping children, use
[`assembly.subassembly`](./assemblysubassembly.md).

## References

- [Docs](https://docs.tscircuit.com/elements/assembly-part)
- [Props](https://github.com/tscircuit/props/blob/main/lib/assembly/part.ts)
- [Assembly guide](../ASSEMBLY.md)
