# Route bus lanes without layer changes

Use `autorouter="bus_lanes"` on `<autoroutingphase />` to route selected bus
connections on a fixed layer. Select connections by a port at either endpoint;
`connections` chooses existing connections and does not create electrical traces.
Use `<trace />` or component connections to declare connectivity.

```tsx
export default () => (
  <board width={14} height={10}>
    <resistor name="A0" resistance="1k" footprint="0402" pcbX={-4} pcbY={-2} />
    <resistor name="B0" resistance="1k" footprint="0402" pcbX={4} pcbY={-2} />
    <resistor name="A1" resistance="1k" footprint="0402" pcbX={-4} pcbY={2} />
    <resistor name="B1" resistance="1k" footprint="0402" pcbX={3} pcbY={2} />
    <trace name="DATA0" from=".A0 > .pin2" to=".B0 > .pin1" />
    <trace name="DATA1" from=".A1 > .pin2" to=".B1 > .pin1" />
    <autoroutingphase
      name="DATA_LANES"
      phaseIndex={0}
      autorouter="bus_lanes"
      connections={["A0.pin2", "A1.pin2"]}
    />
    <bus
      name="DATA"
      connections={["DATA0", "DATA1"]}
      maxLengthSkew="0.05mm"
      pcbTraceWidth="0.15mm"
    />
    <pcbnotetext
      pcbX={0}
      pcbY={-3.5}
      fontSize={0.3}
      text="A1-B1 gains a meander: both top routes match within 0.05mm, no vias."
    />
  </board>
)
```

The shorter A1–B1 span receives a meander to match A0–B0. The existing `<bus />`
props supply the width and length-skew tolerance. The object form
`autorouter={{ preset: "bus_lanes" }}` is also supported.

For saved routes, see [Saved fanout trace paths](./SAVED_FANOUT_PATHS.md).

For controller-to-RAM routing, first create two non-overlapping fanouts with
space between their exits. Corresponding exits must share a routing layer, and
their winding order must permit a crossing-free connection. The bus-lanes phase
preserves the exact fanout copper and routes the gaps between exits. Later global
routing receives the completed bus traces as fixed copper; unassigned connections
route afterward.

The router adds no vias. Incompatible exit layers or an unsatisfiable planar
route produce a routing error, with no fallback to a multilayer router. Fix the
fanout layers, winding order, placement, or available routing space before retrying.

Length matching includes the planar lengths of prior fanout traces and the new
bus routes. Via depth and package delay are not included. Coupled differential-pair
constraints are not currently supported by this solver. Check final connectivity,
clearances, and end-to-end skew; a successful solve is not complete DDR timing
verification.
