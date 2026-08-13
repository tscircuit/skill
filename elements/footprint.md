# `<footprint />`

Used to define the physical layout and connection points for components on a printed circuit board.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      footprint={
        <footprint>
          <platedhole
            portHints={["4"]}
            pcbX="3.2499299999998357mm"
            pcbY="-2.249932000000058mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="1.3000228mm"
            shape="circle"
          />
          <platedhole
            portHints={["2"]}
            pcbX="3.2499299999998357mm"
            pcbY="2.249932000000058mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="1.3000228mm"
            shape="circle"
          />
          <platedhole
            portHints={["1"]}
            pcbX="-3.2499299999999494mm"
            pcbY="2.249932000000058mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="1.3000228mm"
            shape="circle"
          />
          <platedhole
            portHints={["3"]}
            pcbX="-3.2499299999999494mm"
            pcbY="-2.249932000000058mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="1.3000228mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -2.2743160000001126, y: -2.999994000000015 },
              { x: 2.274315999999999, y: -2.999994000000015 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.999994000000129, y: 1.0999978000000965 },
              { x: -2.999994000000129, y: -0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.0999937999998792, y: 1.0279888000000028 },
              { x: 3.0999937999998792, y: -1.0999977999999828 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.99999600000001, y: 2.999994000000015 },
              { x: 2.274315999999999, y: 2.999994000000015 },
            ]}
          />
        </footprint>
      }
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 3],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [4, 2],
        },
      }}
    />
  </board>
)
```

## Insertion and aperture directions

Two optional props say how the part is physically interacted with. Both are
authored in the part's **unrotated** frame and are properties of the part, not of
one board: rotating or flipping the component rotates them with it.

| Prop | Means |
| --- | --- |
| `insertionDirection` | the side a cable or mating part attaches from |
| `cutoutApertureDirection` | the side the part's enclosure opening faces |

Both use the same vocabulary, naming a **side** rather than a motion:
`from_top` is +Y, `from_bottom` -Y, `from_left` -X, `from_right` +X,
`from_above` +Z, `from_below` -Z. Cartesian spellings (`from_y_pos`, ...) are
accepted. A receptacle on the +Y edge is `from_top` because that is the side the
plug comes from, even though the plug moves in -Y as it seats.

```tsx
{/* A USB-C receptacle: the cable enters through the opening it needs, so one
    direction says everything. */}
<footprint insertionDirection="from_top">{/* pads */}</footprint>

{/* A side-actuated switch: pressed into the board from above, actuated
    sideways. Both are true, and the opening follows the second one. */}
<footprint insertionDirection="from_above" cutoutApertureDirection="from_top">
  {/* pads */}
</footprint>
```

Declare `cutoutApertureDirection` only when it differs from
`insertionDirection`; absent, the opening follows the insertion direction, which
is right for every connector. Do not reuse `insertionDirection` to steer an
opening on a part that has nothing inserted into it -- it is read by other tools
as the mating side, and a switch has none.

These drive [`<enclosure.cutoutaperture />`](./enclosurecutoutaperture.md#which-face-it-pierces).

## Props

Commonly used: `children`, `originalLayer`, `circuitJson`, `src`, `name`, `footprint`, `connections`, `insertionDirection`, `cutoutApertureDirection`

## References

- Props: [FootprintProps](https://github.com/tscircuit/props#footprintprops-footprint)
- Source: [lib/components/footprint.ts](https://github.com/tscircuit/props/blob/main/lib/components/footprint.ts)
- Local docs: [docs/docs/elements/footprint.mdx](../docs/docs/elements/footprint.mdx)
