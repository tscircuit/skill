# `<cadmodel />`

A CAD model is a 3D model of a component that can be used in a CAD assembly.

## Example

```tsx
export default () => (
  <board>
    <chip
      name="U1"
      footprint="soic8"
      cadModel={
        <cadmodel
          modelUrl="https://modelcdn.tscircuit.com/jscad_models/soic8.glb"
        />
      }
    />
  </board>
)
```

## Model orientation

A CAD asset has its own fixed orientation, and the part's
`insertionDirection` must be declared **to match the model** -- it says which way
the part's mouth points in the footprint's own frame, not which wall or edge you
want the part on. Declare it wrongly and the model renders one way while checks
and enclosure openings are computed for another, with nothing reporting an error.

Most EasyEDA side-entry assets face **-X** natively, hence
`insertionDirection="from_left"`. Where an asset does not match its footprint,
turn the model rather than mis-declaring the direction:

- `pcbRotationOffset` -- rotate the model about the board normal, relative to
  its footprint (a quarter turn is the common case).
- `modelBoardNormalDirection` -- name the model axis that leaves the board, when
  it is not the default `z+`.

To place a part on a different edge, rotate the whole part with `pcbRotation`
and let the transform carry the direction round.

Working references for real assets live in
[`core/tests/enclosure/prefab-board/parts/`](https://github.com/tscircuit/core/tree/main/tests/enclosure/prefab-board/parts),
each pairing a model URL with the `insertionDirection` and offsets it needs.

## Measured bounds

`size` is the model's extent, but it does not say where that box sits relative to
the model's origin, and the box is generally not centred on it. So `size` alone
cannot say how much of a part stands above the board -- which is what an
enclosure needs in order to clear it.

`modelBounds` supplies the missing term. It is the model's axis-aligned extent in
its **own** coordinate frame, the same frame as `modelOriginPosition`, which is
the point of the model placed on the board surface:

```tsx
cadModel={{
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=...",
  modelOriginPosition: { x: 7.27506, y: 0, z: -2.550001 },
  // Measured from the asset: 5.30mm of body above the board, 0.55mm of pin below.
  modelBounds: {
    min: { x: -1.5, y: -4, z: -3.1 },
    max: { x: 12.6, y: 4, z: 2.75 },
  },
  size: { x: 14.1, y: 8, z: 5.84998 },
}}
```

Above-board reach is then `max[normal] - modelOriginPosition[normal]`, with
`modelBoardNormalDirection` naming the axis (default `z+`). Whatever generates a
part file already measures this to produce `size`, so it is cheap to include --
and without it an enclosure falls back to guessing from the opening's own size.

## Props

Commonly used: `modelUrl`, `stepUrl`, `size`, `modelBounds`, `modelOriginPosition`, `pcbRotationOffset`, `pcbX`, `pcbY`, `pcbLeftEdgeX`, `pcbRightEdgeX`, `pcbTopEdgeY`, `pcbBottomEdgeY`

## References

- Props: [CadModelProps](https://github.com/tscircuit/props#cadmodelprops-cadmodel)
- Source: [lib/components/cadmodel.ts](https://github.com/tscircuit/props/blob/main/lib/components/cadmodel.ts)
- Local docs: [docs/docs/elements/cadmodel.mdx](../docs/docs/elements/cadmodel.mdx)
