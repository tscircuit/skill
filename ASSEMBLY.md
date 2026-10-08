# Assemblies and mechanical parts

Import `assembly` from `tscircuit` (or `@tscircuit/core`). Use a release that
includes the elements you need; `assembly.part` requires the core support added
in [core PR #4444](https://github.com/tscircuit/core/pull/4444) and props 0.0.696.

| Element | Use it for |
|---------|------------|
| [`assembly.device`](./elements/assemblydevice.md) | Product-level container for boards and mechanical parts. |
| [`assembly.part`](./elements/assemblypart.md) | Generic mechanical component with optional CAD geometry. |
| [`assembly.printedpart`](./elements/assemblyprintedpart.md) | Printable JSCAD geometry with named mounting faces. |
| [`assembly.subassembly`](./elements/assemblysubassembly.md) | Group of nested assembly elements and CAD models. |
| [`assembly.cadassembly`](./elements/assemblycadassembly.md) | Alias for `assembly.subassembly`. |
| [`assembly.motor`](./elements/assemblymotor.md) | NEMA motor, shaft orientation, and face mounting. |
| [`assembly.screen`](./elements/assemblyscreen.md) | Display placed relative to a connector or assembly origin. |
| [`assembly.cable`](./elements/assemblycable.md) | Physical cable between connectors or motor wire endpoints. |

## Authoring rules

- Wrap the assembled product in `assembly.device`. It is not an electrical
  subcircuit; place electrical circuitry inside boards.
- Use `name` as the stable identity in selectors and mounting references.
  `displayName`, where supported, is a human-facing alternate.
- Use `model` for a model specification, `modelUrl` for a model asset, and
  `cadModel` for existing CAD formats and transforms. Check the element reference:
  these props are not universal. Generic parts and subassemblies allow at most
  one model source, printed parts require exactly one, and devices accept only
  `model` or `modelUrl`.
- Assembly elements do not accept general PCB layout props such as `pcbX` or
  `pcbRotation`. Use `cadModel.positionOffset` and `rotationOffset` on supported
  elements, or the element's attachment/mounting API.
- Coordinates are millimetres in a right-handed world frame: +X right, +Y top,
  +Z above. CAD offsets are local to the inherited assembly frame. The center of
  a flat board is Z = 0; its top is half its thickness above that plane.
- A model's offsets move only its geometry, not the origin inherited by children
  or used by attachment targets. Place CAD JSX children with their own `pcbX`,
  `pcbY`, and `pcbZ` or CAD offsets.
- Do not invent `mountedTo` on generic parts, subassemblies, screens, or cables.
  Face mounting belongs to printed parts, motors, and boards. Motors and printed
  parts require paired `mountedTo` and `mountFace`; boards need only `mountedTo`.
  `mountGap` is nonnegative surface clearance, with numeric values in mm.
- Printed-part mounting faces come from named `jscad.rectangle` references.
  Imported geometry does not automatically define those faces. Face mating
  opposes outward normals and aligns local X directions. Mounted motors derive
  shaft direction from mating faces, so omit `shaftFacingDirection`.
- `assembly.cable` and a screen's `connectsTo` describe physical relationships.
  They do not create electrical traces or a pin mapping. Declare those separately.
- Validate by building and inspecting 3D output. Cable routing has no obstacle
  avoidance or gravity sag. `pcbDisabled` suppresses assembly CAD output.

For a complete face-mounted motor, spacer, board, and cable, see
[Advanced Assembly](https://docs.tscircuit.com/guides/advanced-assembly).
