# `<copperpour />`

The `<copperpour />` element (also known as a groundplane) fills large areas of a layer with copper tied to a specific net, helping with return paths, shielding, and thermal performance.

Local long-form docs currently live in `docs/docs/elements/groundplane.mdx`.

## Example

```tsx
export default () => (
  <board
    width="30mm"
    height="20mm"
  >
    <chip name="U1" footprint="soic8" pcbX={-6} pcbY={0} />
    <resistor name="R1" resistance="10k" footprint="0402" pcbX={6} pcbY={4} />
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={6} pcbY={-4} />
    <trace from=".R1 > .pin2" to="net.GND" />
    <trace from=".C1 > .pin2" to="net.GND" />
    <trace from=".U1 > .pin4" to="net.GND" />
    <copperpour connectsTo="net.GND" layer="top" clearance="0.15mm" />
  </board>
)
```

## Props

Commonly used: `name`, `layer`, `connectsTo`, `outline`, `padMargin`, `traceMargin`, `clearance`, `boardEdgeMargin`, `cutoutMargin`

### `outline` — limit the pour to a polygon

By default the pour fills the entire layer (minus pad clearances). Pass an
`outline` array of `{x, y}` points to constrain the pour to a polygon —
useful for excluding antenna keep-out zones, mechanical exclusions, or
splitting a layer into multiple net regions:

```tsx
{/* Bottom-layer GND pour that covers only the lower half of the */}
{/* board, leaving an antenna keep-out zone at the top.          */}
<copperpour
  connectsTo="net.GND"
  layer="bottom"
  boardEdgeMargin="0.3mm"
  outline={[
    { x: -12, y: -11 },
    { x:  12, y: -11 },
    { x:  12, y:   5 },
    { x: -12, y:   5 },
  ]}
/>
```

The pour will still auto-fragment around traces and pads; `outline` just
constrains the *region* in which the fill is allowed.

## References

- Props: [CopperPourProps](https://github.com/tscircuit/props#copperpourprops-copperpour)
- Source: [lib/components/copper-pour.ts](https://github.com/tscircuit/props/blob/main/lib/components/copper-pour.ts)
- Local docs: [docs/docs/elements/groundplane.mdx](../docs/docs/elements/groundplane.mdx)
