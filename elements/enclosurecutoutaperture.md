# `<enclosure.cutoutaperture />`

An opening a part needs in the enclosure around it. Nest it inside the component
that needs it, so the part carries its own opening and any board using that part
gets the hole for free.

## Example

```tsx
<connector
  name="J1"
  pcbX={0}
  pcbY={-15}
  footprint={<footprint insertionDirection="from_bottom">{/* pads */}</footprint>}
>
  <enclosure.cutoutaperture shape="pill" width="10mm" height="4mm" />
</connector>
```

## Which face it pierces

You do not choose the face. It comes from the part's transformed
`insertionDirection`, which already accounts for the component's rotation and
mounting layer, so it names the edge the part is actually reached from. Rotate
the part to move its opening to another wall; do not re-declare the direction.
See [`<connector />`](./connector.md).

`from_above` and `from_below` exit through the lid and the floor instead of a
wall. Which one is carried by the direction itself: a layer flip is a 180 degree
rotation about the board's Y axis, so a part authored `from_above` reports
`from_below` once mounted on the bottom layer.

## Dimensions are in the face's frame

`width`, `height` and `depth` are measured in the frame of the face the opening
pierces, not in board axes. The face fixes which axes they mean:

| Face | `width` | `height` | `depth` |
| --- | --- | --- | --- |
| `x_pos`, `x_neg` | Y | Z | X |
| `y_pos`, `y_neg` | X | Z | Y |
| `z_pos`, `z_neg` | part-local | part-local | Z |

So on any side wall `height` is the vertical dimension and `width` runs along the
wall. On the lid and the floor the pair follows the part's own rotation, so a
rotated rectangular opening stays aligned with the part it serves.

`depth` is how far the cut is projected inboard, so nothing behind the face --
the lid lip today, mounting bosses later -- is left obstructing the part. It is
cut as authored and never capped, so a depth greater than the space behind the
face reaches the shell on the far side and cuts that too. Usually you can leave
it out: the depth is otherwise derived from the part's own CAD body.

## Placing it on the face

`widthDimensionOffset` and `heightDimensionOffset` move the opening's centre
across the face, along those same two axes. Both may be negative.

Zero means *wherever the part puts it*, which is usually right:

- **Side faces** centre the opening on the part's body above the board, taken
  from the model's measured bounds (see [`<cadmodel />`](./cadmodel.md#measured-bounds)).
  A part with no measured bounds falls back to half the opening's own height,
  which rests its lower edge on the mounting surface.
- **Lid and floor** centre on the part's own position.

`heightDimensionOffset` runs *outward* from the mounting surface on a side face,
so the same authored number is correct whichever side of the board the part sits
on. A negative value pulls the opening back toward and past the board -- what a
cable jacket fatter than its connector needs.

## Props

Commonly used: `shape` (`rect` | `pill` | `circle`), `width`, `height`, `radius`,
`margin`, `depth`, `widthDimensionOffset`, `heightDimensionOffset`, `boardSide`

`margin` is extra clearance applied on every edge. `boardSide` names the PCB
layer the part is mounted on -- a Z-side concept, so it stays `"top"`/`"bottom"`
rather than a face name.

## References

- Props: [EnclosureCutoutApertureProps](https://github.com/tscircuit/props/blob/main/lib/enclosure/cutout-aperture.ts)
- Solver: [@tscircuit/create-fdm-enclosure](https://github.com/tscircuit/create-fdm-enclosure)
- See also: [`<enclosure.fdm.box />`](./enclosurefdmbox.md)
