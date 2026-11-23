# `<trace />`

The `<trace />` element represents an electrical connection between two or more points in your circuit. Traces can connect components, nets, or specific pins on components.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <resistor name="R1" resistance="1k" footprint="0402" pcbX={-2} schX={-2} />
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={2} />
    <trace
      from=".R1 > .pin1"
      to=".C1 > .pin1"
    />
  </board>
)
```

## Props

Commonly used: `via`, `fromLayer`, `toLayer`, `code`, `message`, `path`, `key`, `thickness`, `maxLength`, `pcbPath`, `pcbPathRelativeTo`, `routingPhaseIndex`

## Manual routing with `pcbPath`

`pcbPath` fixes the PCB route of one trace by hand.

```tsx
<chip name="U1" footprint="soic8" pcbX={0} pcbY={0} />
<capacitor name="C2" capacitance="10uF" footprint="0805" pcbX={-6} pcbY={-7} />
<trace
  from="U1.pin1"
  to="C2.pin1"
  thickness={0.4}
  pcbPath={[
    { x: -3.5, y: 1.905 },
    { x: -3.5, y: -4, via: true, fromLayer: "top", toLayer: "bottom" },
    { x: -5, y: -5.5, via: true, fromLayer: "bottom", toLayer: "top" },
  ]}
/>
```

- The route starts at the `from` port and ends at the `to` port. List only the points in between.
- `{ x, y }` points use the frame of the component that owns the `from` port: the origin is that component's `pcbX`/`pcbY` and the axes turn with its `pcbRotation`. They are not offsets from the pin and not board coordinates. For a part at (5, 3) rotated 90°, `{ x: 1, y: 2 }` lands at (3, 4).
- Give that component an explicit `pcbX`/`pcbY`. On an auto-placed part the points are resolved as if it sat at the origin.
- `pcbPathRelativeTo="C2.pin1"` starts the route at that port and uses its component's frame.
- A string entry such as `"R1.pin1"` is a port selector and resolves to that port's board position.
- A via is a point with `via: true`, `fromLayer` and `toLayer`. Points after it are on `toLayer`.
- Width is `thickness`, falling back to the board's `minTraceWidth`. Via size comes from the board's `pcbStyle` (`viaPadDiameter`, `viaHoleDiameter`).
- A manual route is only checked against pads, pours and other copper when `tsci build` runs DRC, and the autorouter has to work around it. Hand-route the few traces that need it and leave the rest to the autorouter.

## Length limits

`maxLength` (mm) fails the build when the routed trace is longer. A two-port trace that touches a decoupling capacitor inherits that capacitor's limit, 1 mm by default; see the [`<capacitor />` reference](./capacitor.md#automatic-1-mm-trace-limit). Set `maxLength` on the trace to override it.

## References

- Props: [TraceProps](https://github.com/tscircuit/props#traceprops-trace)
- Source: [lib/components/trace.ts](https://github.com/tscircuit/props/blob/main/lib/components/trace.ts)
- Local docs: [docs/docs/elements/trace.mdx](../docs/docs/elements/trace.mdx)
