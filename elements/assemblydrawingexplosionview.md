# `<assembly.drawing.explosionview />`

Shows the pose after a named [explosion stage](./assemblyexplosionstage.md)
inside a [drawing page](./assemblydrawingpage.md). Set `stageRef` to an
explosion-stage name such as `"lift-cover"` or a qualified path such as
`"enclosure.slide-clip"` for a nested or explicitly named owner.

Core evaluates the ordered moves through the selected stage in each stage
owner's mounted frame. The selected owner supplies the view's geometry,
including stationary parts and boards. Author translations on
[`assembly.explosion.move`](./assemblyexplosionmove.md). Core writes the
resolved `moves` to Circuit JSON.

- `factor` scales each final displacement from assembled placement. It defaults
  to `1`. Set `factor={0}` for the assembled pose or `factor={0.5}` to halve
  all accumulated offsets, including those from earlier stages.
- `showTrails` draws movement guides and defaults to `false`.
- Viewport size, direction, placement, section cuts and hidden edges use the
  same controls as [part views](./assemblydrawingpartview.md).
- [Part labels](./assemblydrawingpartlabel.md) follow the moved geometry and
  [dimensions](./assemblydrawingdimension.md) measure the displayed pose.
  A [note](./assemblydrawingnote.md) stays at its specified paper position.

See the [runnable example](../ASSEMBLY_DRAWINGS.md#draw-a-cover-and-clip-removal)
and the [explosion view reference](https://docs.tscircuit.com/elements/assembly-drawing-explosionview).
