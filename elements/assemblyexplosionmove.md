# `<assembly.explosion.move />`

Translates mechanical geometry during an [explosion stage](./assemblyexplosionstage.md).

- Use `targetRef` for one target or `targetRefs` for an array or comma-separated
  list. Targets can name parts, subassemblies, or other explosion stages.
  For example, `targetRefs={["cover", "clip"]}` moves both parts.
- Set at least one of `offX`, `offY`, or `offZ`, in millimetres or distance
  strings. Unspecified axes are zero. Offsets use the stage owner's local
  frame, which may be rotated by mounting.

Axes on one move are applied together. Use separate move children for a
lift followed by a slide. A stage used as a target expands to its members;
ordering comes from the stage declarations and ordering references. Overlapping
targets move each part once within a single instruction. Separate instructions
accumulate.

Keep PCB and cable geometry outside move targets. A stationary PCB can appear
in an exploded drawing. See the [explosion move reference](https://docs.tscircuit.com/elements/assembly-explosion-move).
