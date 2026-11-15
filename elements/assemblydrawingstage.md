# `<assembly.drawing.stage />`

Names a reusable selection of assembled geometry. Declare it in the owning
assembly and select it with `stageRef=".complete"` on a
[part view](./assemblydrawingpartview.md), or with `includeStageRefs` on a
[part label](./assemblydrawingpartlabel.md).

- `name` is required. Use `displayName` for an optional human-readable label.
- `partRefs` selects parts or assemblies. Selecting a board through
  `partRefs={[".carrier"]}` includes its fitted component models.
- `boardRefs` selects board substrates. Specify the board in both arrays to
  show its substrate and fitted models together.
- `includeStageRefs` includes other drawing stages by selector, such as
  `[".hardware"]`. Members are combined as a set.

Supply at least one nonempty selection array. Forward references are allowed.
Use selectors that resolve unambiguously and keep stage inclusions acyclic.
Define movement separately in an [explosion stage](./assemblyexplosionstage.md).

See the [drawing stage reference](https://docs.tscircuit.com/elements/assembly-drawing-stage).
