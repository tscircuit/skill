# Reusing saved fanout trace paths

Use `pcbTracePaths` on `<fanout>` or `<breakout>` when you already have
pre-generated routes from component ports to fanout exits. The routes can live
in a TypeScript module or JSON file. Core preserves their geometry and routes
the rest of the board from their exits.

This requires `@tscircuit/core` 0.0.1884 or newer and `@tscircuit/props` 0.0.649
or newer. If using the combined `tscircuit` package, check its resolved core
and props versions too; accepting the prop alone does not prove it is rendered.

## Complete example with via endpoints

This small example uses a 0402 resistor whose pin 1 is at `(-0.51, 0)` in the
fanout's local frame. The first via is in that pad. The last via creates an exit
at `(3, 1)` on the top layer, where global routing continues to R2.

```tsx
import type { FanoutTracePath } from "@tscircuit/props"

const savedPaths: FanoutTracePath[] = [
  {
    connection: "R1.1",
    route: [
      {
        route_type: "via",
        x: -0.51,
        y: 0,
        from_layer: "top",
        to_layer: "bottom",
        via_diameter: 0.3,
        via_hole_diameter: 0.15,
      },
      { route_type: "wire", x: 1, y: 1, width: 0.2, layer: "bottom" },
      {
        route_type: "via",
        x: 3,
        y: 1,
        from_layer: "bottom",
        to_layer: "top",
        via_diameter: 0.6,
        via_hole_diameter: 0.3,
      },
    ],
  },
]

export default () => (
  <board width="20mm" height="16mm" autorouter={{ allowViaInPad: true }}>
    <fanout name="SAVED_FANOUT" pcbTracePaths={savedPaths}>
      <resistor name="R1" resistance="1k" footprint="0402" pcbX={0} pcbY={0} />
    </fanout>
    <resistor name="R2" resistance="1k" footprint="0402" pcbX={7} pcbY={1} />
    <trace from="R1.1" to="R2.1" />
  </board>
)
```

The route supplies copper geometry; the separate `<trace />` supplies electrical
connectivity. Keep both. Do not add a `<fanoutpoint>` or `<breakoutpoint>` for a
port already covered by a saved path: core creates that exit automatically.

## Store paths in JSON

Each entry has a `connection` port selector and a `route` array. Use stable
selectors such as `R1.1` or `U1.DATA0`, rather than generated `pcb_port_id` or
`source_trace_id` values. Save the array itself as `saved-fanout.json` and load it
with the exported schema:

```tsx
import { fanoutTracePath } from "@tscircuit/props"
import savedJson from "./saved-fanout.json"

const savedPaths = savedJson.map((path) => fanoutTracePath.parse(path))
```

Pass `savedPaths` to `pcbTracePaths`. `FanoutTracePath` is the exported input type
for paths authored in TypeScript. Parsing converts unit strings to numeric
millimeters and rejects malformed points or discontinuous layer transitions.

## Coordinates and route format

Coordinates are **points in the fanout's local PCB frame**, with +X right and
+Y up (right-handed with +Z above the board). Numeric distances are millimeters;
unit strings such as `"0.2mm"` are also accepted. Core applies the fanout's
translation, rotation, and layout movement. Layer names always identify
physical board layers; moving or rotating the fanout does not swap them.

Each route contains at least two points:

| Point | Required fields | Optional fields |
| --- | --- | --- |
| Wire | `route_type: "wire"`, `x`, `y`, `width`, `layer` | — |
| Via | `route_type: "via"`, `x`, `y`, `from_layer`, `to_layer` | `via_diameter`, `via_hole_diameter` |

Only wire and via points are supported. Wire widths and specified via diameters
must be positive. A via's `from_layer` must match the incoming layer, and the
next point must continue on its `to_layer`.

Either endpoint can be a via. A leading via starts on `from_layer` and requires
`allowViaInPad: true` on the board's autorouter configuration, or explicitly on
the fanout's configuration. An explicit fanout setting overrides the board,
including `false`. A trailing via creates its exit on `to_layer`.
Core emits coincident wire contacts around endpoint vias for Circuit JSON
connectivity; those contacts do not move the via or alter the saved copper.

## Coverage and validation

`pcbTracePaths` replaces automatic routing for that fanout. Supply a path for
**every routing connection in the fanout**; partial caches are not supported.
Each path describes one port-to-exit connection. Use a separate fanout for
connections that should be routed automatically or for internal routes.
Omitting the prop retains normal automatic fanout behavior.

A selector must resolve to a port inside the fanout. The first point must match
that port's actual PCB position and an available layer after placement. Core
reports an error instead of stretching a route to fit a moved component.
It also rejects duplicate exits, unavailable board layers, uncovered
connections, and a leading pad via when via-in-pad is disabled.

Build the circuit after loading saved paths. Inspect the emitted PCB traces,
via layers, and the continuation from each exit. Schema parsing checks the data
format; it does not check pad geometry, coverage, or inherited routing settings.
