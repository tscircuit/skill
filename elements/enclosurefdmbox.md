# `<enclosure.fdm.box />`

Generates a two-part 3D-printable enclosure around a board: a base and a lid with
a friction-fit lip, sized from the board plus clearances, with an opening cut for
every aperture the enclosed parts declare.

Place it as a sibling of the board, inside an
[`<assembly.device />`](./assemblydevice.md), and point it at the board:

## Example

```tsx
import { assembly, enclosure } from "tscircuit"

export default () => (
  <assembly.device name="widget">
    <board name="B1" width="52mm" height="36mm">
      {/* parts, some carrying <enclosure.cutoutaperture /> */}
    </board>
    <enclosure.fdm.box boardRef=".B1" showAsTranslucentModel />
  </assembly.device>
)
```

Every dimension is optional. Width, height and depth are inferred from the board
and its parts unless given -- and the inferred depth grows, when needed, until
the lid and its lip clear every side-wall opening.

## Seeing inside it

`showAsTranslucentModel` renders the box translucent so the board and its parts
stay visible. It is presentation only: the geometry, and anything exported from
it, is identical either way. Turn it on while placing parts, since an opaque box
hides exactly the thing you are checking the openings against.

## Props

Commonly used: `boardRef`, `showAsTranslucentModel`, `width`, `height`, `depth`,
`wallThickness`, `floorThickness`, `lidThickness`, `standoffHeight`,
`boardClearance`, `topHeadroom`, `lidLipDepth`, `disableCutouts`

`topHeadroom` measures clearance above the board's tallest part, not the box
interior, so setting it explicitly is the lever on total height. Set it and
apertures stop growing the box.

## References

- Props: [EnclosureFdmBoxProps](https://github.com/tscircuit/props/blob/main/lib/enclosure/fdm/box.ts)
- Solver: [@tscircuit/create-fdm-enclosure](https://github.com/tscircuit/create-fdm-enclosure)
- See also: [`<enclosure.cutoutaperture />`](./enclosurecutoutaperture.md), [`<assembly.device />`](./assemblydevice.md)
