# `<assembly.drawing.page />`

Defines a paper sheet inside an [assembly device](./assemblydevice.md). Give it
a unique `name` to select the sheet when exporting. Optionally set `displayName`
for a human-readable label.

- Choose `size` (`iso_a0` through `iso_a4`, or `ansi_a` through `ansi_e`) and
  optional `orientation` (`landscape` by default or `portrait`). For a custom
  sheet, supply both `width` and `height` in millimetres or as distance strings.
- Set `anchorAlignment` to choose the paper origin. It defaults to `center` and
  also supports the four corners and edge centers, such as `bottom_left` and
  `top_center`. Positive X points right and positive Y points up from each
  anchor.
- Include at least one [part view](./assemblydrawingpartview.md) or
  [explosion view](./assemblydrawingexplosionview.md) for export. The page can
  also contain [notes](./assemblydrawingnote.md) and one
  [title block](./assemblydrawingtitleblock.md).

See the [runnable drawing and export example](../ASSEMBLY_DRAWINGS.md#draw-a-cover-and-clip-removal)
and the [page reference](https://docs.tscircuit.com/elements/assembly-drawing-page).
