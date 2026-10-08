# `<assembly.printedpart />`

A printable mechanical part with JSCAD geometry and named mounting faces, or
an existing CAD model. It creates no PCB footprint or schematic symbol.

## Example

```tsx
import { assembly, jscad } from "tscircuit"

export default () => (
  <assembly.device>
    <assembly.motor name="MOTOR" standard="nema17" shaftFacingDirection="z-" />
    <assembly.printedpart name="SPACER"
      mountedTo="MOTOR.backface" mountFace="motor"
      jscad={
        <>
          <jscad.cuboid size={[42, 42, 4]} center={[0, 0, 2]} />
          <jscad.rotate angles={[0, Math.PI, 0]}>
            <jscad.rectangle name="motor" size={[42, 42]} reference />
          </jscad.rotate>
          <jscad.translate offset={[0, 0, 4]}>
            <jscad.rectangle name="board" size={[42, 42]} reference />
          </jscad.translate>
        </>
      }
    />
    <board name="B1" width={42} height={42}
      mountedTo="SPACER.board" routingDisabled />
  </assembly.device>
)
```

## Props and behavior

- `name`: required stable identity; `displayName` is optional.
- Provide exactly one of `jscad`, `model`, `modelUrl`, or `cadModel`.
- `jscad`: synchronous `jscad-fiber` JSX; dimensions in mm, angles in radians.
  Fragments, arrays, and synchronous function components work. Hooks, async
  components, and raw JSCAD kernel geometry do not.
- `mountedTo` and `mountFace`: paired target and own face references.
- `mountGap`: nonnegative mm or unit string, defaults to zero clearance and
  requires `mountedTo`.

A named reference rectangle adds no material. Its local +Z is the outward
normal and local +X sets alignment. Use unique face names. Mating faces oppose
their normals and align X; a board needs only `mountedTo="PART.face"`.
Imported files do not automatically supply mounting faces.

The example defines a solid spacer plate; it does not add screw holes. For a
complete printable spacer with holes and posts, use the linked docs example.
Board face mounting requires a face parallel to XY; motor–spacer–board chains
support shaft directions `z+` and `z-`, with one board anchoring each chain.

## References

- [Docs](https://docs.tscircuit.com/elements/assembly-printedpart)
- [Props](https://github.com/tscircuit/props/blob/main/lib/assembly/printedpart.ts)
- [Assembly guide](../ASSEMBLY.md)
