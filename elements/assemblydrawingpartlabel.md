# `<assembly.drawing.partlabel />`

Adds text and a leader to a [part view](./assemblydrawingpartview.md) or
[explosion view](./assemblydrawingexplosionview.md).

- Set `text` and select visible targets with `partRefs`, `boardRefs`, or
  `includeStageRefs`. Supply at least one nonempty array. An optional `name`
  identifies the label.
- Set `anchor={{ x, y, z }}` to a point in assembled CAD-world coordinates,
  in millimetres with positive Z up. The renderer applies the selected part's
  scaled explosion displacement to that point. All selected targets must share
  the same translation.
- Position the text using `paperX` or `xOffsetFromViewCenter`, and `paperY`
  or `yOffsetFromViewCenter`. Choose exactly one per axis. Page coordinates
  use the page anchor, and offsets use the parent view's center.

See the [part label reference](https://docs.tscircuit.com/elements/assembly-drawing-partlabel).
