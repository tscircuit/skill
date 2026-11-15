# `<assembly.explosion.stage />`

Defines a named step for 3D assembly playback and
[exploded drawing views](./assemblydrawingexplosionview.md). Declare each
stage directly inside its owning assembly and give it one or more
[`assembly.explosion.move`](./assemblyexplosionmove.md) children.

- `name` is required and must be unique in the owning assembly.
- `prevStageRef` names a stage that must finish before this one.
  `nextStageRef` names a stage that starts after this one. Use qualified
  paths to address stages in other scopes.
- Moves within a stage run in declaration order, and stages without ordering
  constraints follow depth-first declaration order.

To draw the pose through a specific stage, select it with `stageRef` on an
explosion view. A [drawing stage](./assemblydrawingstage.md) provides reusable
selection for assembled geometry.

See the [runnable example](../ASSEMBLY_DRAWINGS.md#draw-a-cover-and-clip-removal)
and the [explosion stage reference](https://docs.tscircuit.com/elements/assembly-explosion-stage).
