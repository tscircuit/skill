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
    <enclosure.fdm.box boardRef=".B1" />
  </assembly.device>
)
```

Every dimension is optional. Width, height and depth are inferred from the board
and its parts unless given -- and the inferred depth grows, when needed, until
the lid and its lip clear every side-wall opening.

## Seeing inside it

Nothing to author. Enclosure parts render see-through by default, so the board
and its parts stay visible while you check the openings against them.

How a part is *shown* is a property of looking at it, not of the part, so it is
not a prop and does not appear in the circuit JSON: the geometry and every
export are identical either way. In the 3D viewer, **Appearance → Enclosure**
cycles the assembled base and lid together through see-through -> solid ->
hidden. Independent base/lid controls are deferred until Circuit JSON carries
an explicit role for each printed part.

## Props

Commonly used: `boardRef`, `width`, `height`, `depth`,
`wallThickness`, `floorThickness`, `lidThickness`, `standoffHeight`,
`boardClearance`, `topHeadroom`, `lidLipDepth`, `disableCutouts`

`topHeadroom` is the empty distance from the PCB's top surface to the inside of
the lid -- it is **not** clearance above the tallest component. Omitted, the box
may grow to clear parts that declare enclosure apertures. Set explicitly, it is
taken literally and aperture-owning parts stop growing the box; other tall parts
are not inferred, so check their CAD height yourself.

## References

- Props: [EnclosureFdmBoxProps](https://github.com/tscircuit/props/blob/main/lib/enclosure/fdm/box.ts)
- Solver: [@tscircuit/create-fdm-enclosure](https://github.com/tscircuit/create-fdm-enclosure)
- See also: [`<enclosure.cutoutaperture />`](./enclosurecutoutaperture.md), [`<assembly.device />`](./assemblydevice.md)
