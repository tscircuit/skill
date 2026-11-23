# `<net />`

The `<net />` element represents a bunch of traces that are all connected. You should use nets for representing power buses such as "V5", "V3_3" and "GND"

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
   <group>
    <capacitor capacitance="1uF" footprint="0603" name="C1" />
    <net name="V5" />
    <trace from="net.V5" to=".C1 .pos" />
   </group>
  </board>
)
```

## Props

Commonly used: `name`, `connectsTo`, `highlightColor`, `isPowerNet`, `isGroundNet`, `nominalTraceWidth`, `minTraceClearance`, `routingPhaseIndex`, `footprint`, `connections`

- `nominalTraceWidth` sets the width the autorouter uses for the net. It still necks down to the pad width where a trace enters a narrower pad. Nets without it use the board's `defaultTraceWidth`. On a dense board, confirm the routed widths in `circuit.json` (`pcb_trace` route points carry `width`).

```tsx
<net name="VM" isPowerNet nominalTraceWidth={0.55} />
<net name="GND" isGroundNet nominalTraceWidth={0.4} />
```

- `routingPhaseIndex` routes the whole net in its own earlier autorouting pass; lower indexes go first and everything without an index goes last. No `<autoroutingphase />` is needed. `<autoroutingphase connections>` does not accept `net.GND`; it takes trace names and port selectors.

```tsx
<net name="GND" isGroundNet routingPhaseIndex={0} />
```

## References

- Props: [NetProps](https://github.com/tscircuit/props#netprops-net)
- Source: [lib/components/net.ts](https://github.com/tscircuit/props/blob/main/lib/components/net.ts)
- Local docs: [docs/docs/elements/net.mdx](../docs/docs/elements/net.mdx)
