# `<pcbtrace />`

Explicit low-level PCB copper geometry. Use `<trace />` to declare ordinary
connections between component pins and nets; use `pcbPath` to control those paths.

## Example

Every wire route point needs `route_type: "wire"`, `x`, `y`, `width`, and `layer`.
Numeric distances are millimeters. Top-level `layer` and `thickness` props do not
supply the required fields on the route points.

This example joins two pads inside a custom footprint. `internallyConnectedPins`
records the same printed connection in the netlist. The endpoints meet the pads
so the example does not produce dangling-trace errors.

```tsx
import type { PcbTraceRoutePointWire } from "circuit-json"

const route: PcbTraceRoutePointWire[] = [
  { route_type: "wire", x: -4, y: 0, width: 0.2, layer: "top" },
  { route_type: "wire", x: 0, y: 2, width: 0.2, layer: "top" },
  { route_type: "wire", x: 4, y: 0, width: 0.2, layer: "top" },
]

export default () => (
  <board width="20mm" height="20mm">
    <chip
      name="U1"
      pcbX={0}
      pcbY={0}
      pinLabels={{ pin1: "A", pin2: "B" }}
      internallyConnectedPins={[["pin1", "pin2"]]}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX={-4}
            pcbY={0}
            shape="rect"
            width={1.2}
            height={1.2}
            layer="top"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX={4}
            pcbY={0}
            shape="rect"
            width={1.2}
            height={1.2}
            layer="top"
          />
          <pcbtrace route={route} />
        </footprint>
      }
    />
  </board>
)
```

## Props

- `route`: required array of Circuit JSON route points. For wire points, include
  `route_type: "wire"`, `x`, `y`, `width`, and `layer` on every point.
- Put placement props on the enclosing component for a trace inside its footprint.

## Version compatibility

Tested with `tscircuit@0.0.3127` and `@tscircuit/core@0.0.2311`. In these versions,
the published JSX prop type describes route hints while the runtime expects
Circuit JSON trace points. The explicitly typed `PcbTraceRoutePointWire[]`
variable above checks this wire-only route against the runtime point shape and
avoids inline-object excess-property errors. The package's JSX prop definition
needs a separate correction.

## References

- Runtime implementation: [PcbTrace](https://github.com/tscircuit/core/blob/main/lib/components/primitive-components/PcbTrace.ts)
- Route schema: [Circuit JSON pcb_trace](https://github.com/tscircuit/circuit-json/blob/main/src/pcb/pcb_trace.ts)
