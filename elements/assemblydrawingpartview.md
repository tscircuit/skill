# `<assembly.drawing.partview />`

Shows assembled geometry on a [drawing page](./assemblydrawingpage.md).
Use `partRef=".carrier"` for one part, board, or group, or
`stageRef=".complete"` for a reusable [drawing stage](./assemblydrawingstage.md).
Supply exactly one selector.

- Set `direction` to `"isometric"`, `"x+"`, `"x-"`, `"y+"`, `"y-"`,
  `"z+"`, or `"z-"`. Axis directions describe the camera position.
- Set `width` and `height` in paper millimetres. The geometry fits the
  viewport automatically. Use `name` for references and `displayName` for the
  printed caption.
- Set `centerX` and `centerY` relative to the page anchor. On each axis you can
  instead use one of `leftOfRef` / `rightOfRef` or `aboveRef` / `belowRef`.
  For example, `rightOfRef=".plan"` places this viewport with its left edge
  against the plan viewport's right edge. Unspecified axes default to zero.
- Set `showHiddenEdges` for dashed hidden edges. For a section, set
  `section={{ axis: "z", offset: 0, keepSide: "less" }}`. The cut is in CAD
  world coordinates. `keepSide` is `"less"` or `"greater"`, and optional
  `hatchSpacing` controls the spacing of section hatching.

Nest [dimensions](./assemblydrawingdimension.md),
[part labels](./assemblydrawingpartlabel.md), or [notes](./assemblydrawingnote.md)
inside the view. See the [part view reference](https://docs.tscircuit.com/elements/assembly-drawing-partview).
