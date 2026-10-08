# `<assembly.device />`

The assembled product: a board together with the mechanical parts built around
it. It is the root a board and its enclosure share, so the enclosure has
something to reference.

## Example

```tsx
import { assembly, enclosure } from "tscircuit"

export default () => (
  <assembly.device name="widget">
    <board name="B1" width="52mm" height="36mm">
      {/* parts */}
    </board>
    <enclosure.fdm.box boardRef=".B1" />
  </assembly.device>
)
```

Use it when a design has anything beyond the bare PCB. A board on its own does
not need one.

## Props

`name` is optional. `children` are boards, mechanical parts, cables, or nested
assemblies. An optional `model` specification or `modelUrl` supplies product-level
geometry; provide at most one. There is no `cadModel` prop on a device.

The device is not an electrical group or subcircuit. Boards retain their own
electrical scope, while assembly selectors can cross those board boundaries
inside the nearest device. A device without a model is a transparent container.

## References

- Props: [AssemblyDeviceProps](https://github.com/tscircuit/props/blob/main/lib/assembly/device.ts)
- [Docs](https://docs.tscircuit.com/elements/assembly-device)
- [All assembly elements and mounting rules](../ASSEMBLY.md)
- See also: [`<enclosure.fdm.box />`](./enclosurefdmbox.md), [`<board />`](./board.md)
