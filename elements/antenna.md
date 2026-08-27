# `<antenna />`

The `<antenna />` element is a single-feed normal component for a placed antenna footprint and an optional open-ended PCB copper path. Prefer it over modeling radiating copper as a one-ended `<trace />`.

## Example: WiFi meander antenna

```tsx
export default () => (
  <board width="32mm" height="16mm" minTraceWidth="0.3mm">
    <chip name="U1" footprint="qfn32" pcbX={-12} />

    <antenna
      name="ANT1"
      pcbX={-8}
      pcbY={-1}
      footprint={
        <footprint>
          <smtpad
            shape="rect"
            width="1mm"
            height="1mm"
            portHints={["pin1"]}
          />
        </footprint>
      }
      pcbPath={[
        { x: 1, y: 0 },
        { x: 1, y: 5 },
        { x: 12, y: 5 },
        { x: 12, y: 3.5 },
        { x: 3, y: 3.5 },
        { x: 3, y: 2 },
        { x: 12, y: 2 },
        { x: 12, y: 0.5 },
        { x: 3, y: 0.5 },
        { x: 3, y: -1 },
        { x: 12, y: -1 },
      ]}
    />

    <trace from=".U1 > .pin1" to=".ANT1 > .feed" />
  </board>
)
```

This geometry demonstrates the API only; it is not a tuned antenna design. Use validated dimensions, stackup, feed impedance, ground clearance, and keepout geometry for production RF work.

## Behavior

- The antenna has one port, `pin1`, with the alias `feed`.
- For PCB use, give it a one-pad footprint whose pad has `portHints={["pin1"]}`. The pad anchors the antenna feed.
- `pcbPath` begins at the feed automatically; do not repeat the feed point in the array.
- `{ x, y }` path entries use local millimeter coordinates relative to the feed. They translate and rotate with `pcbX`, `pcbY`, and `pcbRotation`.
- Selector-string path entries resolve to global PCB coordinates.
- `pcbPath` accepts the same point and via entries as a `<trace />` path.
- Copper width comes from the enclosing board or subcircuit's `minTraceWidth`, falling back to the manufacturing default.
- Connect another component to `.ANT1 > .feed` with a separate `<trace />`. The radiating path itself remains open-ended.

## Common props

- Identity and rendering: `name`, `footprint`, `symbol`, `cadModel`
- PCB placement: `pcbX`, `pcbY`, `pcbRotation`, `layer`
- Antenna copper: `pcbPath`
- Schematic placement: `schX`, `schY`, `schRotation`, `schOrientation`

## References

- [Antenna props source](https://github.com/tscircuit/props/blob/main/lib/components/antenna.ts)
- [Antenna core source](https://github.com/tscircuit/core/blob/main/lib/components/normal-components/Antenna.ts)
- [Element documentation](https://docs.tscircuit.com/elements/antenna)
- [WiFi antenna guide](https://docs.tscircuit.com/guides/tscircuit-essentials/draw-a-wifi-antenna)
