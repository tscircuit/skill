# `<assembly.drawing.note />`

Adds text to a [page](./assemblydrawingpage.md) or to either kind of view.
Set `text`, optional `name`, and optional `fontSize` in paper millimetres
(default `2.7mm`).

Choose one position per axis. Use `paperX` / `paperY` for page-anchor
coordinates, and `xOffsetFromViewCenter` / `yOffsetFromViewCenter` for offsets
from a view. You can mix them, for example `paperX={16}` with
`yOffsetFromViewCenter={-28}`.

Inside a view, offsets use that view. For a page-level note using offsets,
set `viewRef=".exploded"` to select one view on the same page. To attach text
to a point on a part, use a [part label](./assemblydrawingpartlabel.md).

See the [note reference](https://docs.tscircuit.com/elements/assembly-drawing-note).
