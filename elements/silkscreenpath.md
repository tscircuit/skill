# `<silkscreenpath />`

The `<silkscreenpath />` element is used to define a custom drawn path on the silkscreen layer.

## Example

```tsx
export default () => (
  <board width="100mm" height="100mm">
    <chip name="U1" footprint={
      <footprint>
        <silkscreenpath 
          strokeWidth="0.5mm"
          route={[
              { x: "0mm", y: "20mm" },
              { x: "-1.53mm", y: "19.88mm" },
              { x: "-3.04mm", y: "19.52mm" },
              { x: "-4.50mm", y: "18.93mm" },
              { x: "-5.88mm", y: "18.09mm" },
              { x: "-7.16mm", y: "17.04mm" },
              { x: "-8.32mm", y: "15.78mm" },
              { x: "-9.33mm", y: "14.33mm" },
              { x: "-10.17mm", y: "12.72mm" },
              { x: "-10.82mm", y: "10.98mm" },
              { x: "-11.27mm", y: "9.13mm" },
              { x: "-11.52mm", y: "7.23mm" },
              { x: "-11.55mm", y: "5.29mm" },
              { x: "-11.37mm", y: "3.36mm" },
              { x: "-10.98mm", y: "1.47mm" },
              { x: "-10.39mm", y: "0mm" },
              
              { x: "10.39mm", y: "0mm" },
              { x: "39.61mm", y: "0mm" },
              
              { x: "39.61mm", y: "0mm" },
              { x: "41.08mm", y: "0.12mm" },
              { x: "42.59mm", y: "0.48mm" },
              { x: "44.05mm", y: "1.07mm" },
              { x: "45.43mm", y: "1.91mm" },
              { x: "46.71mm", y: "2.96mm" },
              { x: "47.87mm", y: "4.22mm" },
              { x: "48.88mm", y: "5.67mm" },
              { x: "49.72mm", y: "7.28mm" },
              { x: "50.37mm", y: "9.02mm" },
              { x: "50.82mm", y: "10.87mm" },
              { x: "51.07mm", y: "12.77mm" },
              { x: "51.10mm", y: "14.71mm" },
              { x: "50.92mm", y: "16.64mm" },
              { x: "50.53mm", y: "18.53mm" },
              { x: "49.94mm", y: "20mm" },
              
              { x: "49.94mm", y: "20mm" },
              { x: "0mm", y: "20mm" }
          ]}
        />
      </footprint>
    } pcbX={-15} />
  </board>
)
```

## Props

Commonly used: `pcbLeftEdgeX`, `pcbRightEdgeX`, `pcbTopEdgeY`, `pcbBottomEdgeY`, `pcbX`, `pcbY`, `pcbOffsetX`, `pcbOffsetY`

## References

- Props: [SilkscreenPathProps](https://github.com/tscircuit/props#silkscreenpathprops-silkscreenpath)
- Source: [lib/components/silkscreen-path.ts](https://github.com/tscircuit/props/blob/main/lib/components/silkscreen-path.ts)
- Local docs: [docs/docs/footprints/silkscreenpath.mdx](../docs/docs/footprints/silkscreenpath.mdx)
