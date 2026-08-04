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

Commonly used: `name`

## References

- Props: [AssemblyDeviceProps](https://github.com/tscircuit/props/blob/main/lib/assembly/device.ts)
- See also: [`<enclosure.fdm.box />`](./enclosurefdmbox.md), [`<board />`](./board.md)
