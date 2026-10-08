# `<assembly.screen />`

A display model placed at a PCB connector or another named assembly origin.
`connectsTo` sets placement, not electrical connectivity.

## Example

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device>
    <board name="B1" width={44} height={36} routingDisabled>
      <connector name="J1" pinCount={30} footprint="fpc30_p0.5mm" pcbY={-13} />
    </board>
    <assembly.screen name="DISPLAY" connectsTo=".B1 > .J1"
      width="16mm" height="10mm" />
  </assembly.device>
)
```

## Props and behavior

- `name`: required nonempty identity.
- `connectsTo`: required selector matching exactly one PCB component, screen,
  generic part, or subassembly in the nearest `assembly.device`.
- `model`, `modelUrl`, `cadModel`: mutually exclusive model sources.
  Here `cadModel` is a modelprinter string, not the object/JSX format supported
  by generic parts and subassemblies.
- `width` and `height`: positive mm or unit strings, supplied together.
  Required when no model is supplied. These are outer body dimensions and
  do not resize an explicitly supplied model.

The display follows the connector's position and orientation, including
bottom-layer placement. Put an imported model's origin at its attachment
point. Assembly targets use their assembly origin, not their CAD model offset.

## References

- [Docs](https://docs.tscircuit.com/elements/assembly-screen)
- [Props](https://github.com/tscircuit/props/blob/main/lib/assembly/screen.ts)
- [Assembly guide](../ASSEMBLY.md)
