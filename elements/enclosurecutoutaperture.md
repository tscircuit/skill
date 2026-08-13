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

You do not choose the face on the aperture. A direction declared on the part's
`<footprint />` is transformed with the component and defines a continuous axis.
A lid/floor direction selects that horizontal face; a side direction cuts the
first wall the axis physically reaches. Rotate or move the part to move its
opening; do not re-declare the direction.

Which direction, in order:

1. `cutoutApertureDirection` -- where the part's opening faces;
2. `insertionDirection` -- where a cable or mating part attaches, used when the
   part declares no aperture direction;
3. failing both, the nearest reachable board edge, which is a guess.

Most parts need only `insertionDirection`: a cable arrives through the opening it
needs, so the two directions coincide. Declare `cutoutApertureDirection` when
they differ -- a side-actuated switch is *installed* from above and *actuated*
from the side, so its opening pierces a wall while nothing is ever inserted into
it. See [`<footprint />`](./footprint.md#insertion-and-aperture-directions).

`from_above` and `from_below` exit through the lid and the floor instead of a
wall. Which one is carried by the direction itself: a layer flip is a 180 degree
rotation about the board's Y axis, so a part authored `from_above` reports
`from_below` once mounted on the bottom layer.

## The aperture axis belongs to the part

`cutoutApertureDirection` (or the `insertionDirection` fallback) defines the
primary aperture axis in the footprint's frame. It rotates and moves with the
component. For a side opening, the enclosure casts that axis from the component
centre and cuts the first wall it reaches; the wall can therefore change near a
corner based on both position and rotation, not at a fixed 45 degrees.

`width`, `height` and `depth` describe the cutting tool around that axis:

- on a side opening, `height` is vertical, `width` is perpendicular to the axis
  in the board plane, and `depth` follows the axis inboard;
- on the lid or floor, `width` and `height` rotate with the footprint and `depth`
  is vertical; and
- a circle uses `radius` for its profile.

An oblique circular tool naturally makes an elliptical intersection with the
wall. The solver lengthens the tool enough to cross the wall without changing
the authored component-relative depth.

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
`margin`, `depth`, `widthDimensionOffset`, `heightDimensionOffset`

`margin` is extra clearance applied on every edge. The mounting side is not an
aperture prop; it is derived from the owning component's `layer`.

## References

- Props: [EnclosureCutoutApertureProps](https://github.com/tscircuit/props/blob/main/lib/enclosure/cutout-aperture.ts)
- Solver: [@tscircuit/create-fdm-enclosure](https://github.com/tscircuit/create-fdm-enclosure)
- See also: [`<enclosure.fdm.box />`](./enclosurefdmbox.md)
