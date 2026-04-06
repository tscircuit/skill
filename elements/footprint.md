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

## Props

Commonly used: `children`, `originalLayer`, `circuitJson`, `src`, `name`, `footprint`, `connections`

## References

- Props: [FootprintProps](https://github.com/tscircuit/props#footprintprops-footprint)
- Source: [lib/components/footprint.ts](https://github.com/tscircuit/props/blob/main/lib/components/footprint.ts)
- Local docs: [docs/docs/elements/footprint.mdx](../docs/docs/elements/footprint.mdx)
