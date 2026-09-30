# Local BGA dogbone fanout

Use `<fanout autorouter="dogbone">` when a user wants short BGA pad-to-via
escapes without routing to the component region's boundary. The remaining
routing continues from those via exits.

Requires core 0.0.2026+ and props 0.0.672+. Check the resolved versions inside
`tscircuit` too: a recognized prop does not prove the installed core implements
it.

```tsx
<board layers={4} width={30} height={30}
  minTraceWidth={0.1} minViaPadDiameter={0.3} minViaHoleDiameter={0.15}>
  <fanout autorouter="dogbone" fanoutRoutingLayers={["inner2"]}>
    <AM3352 name="U1" />
  </fanout>
</board>
```

Import the BGA component from the user's library and preserve its electrical
connections. Connected signal, VCC and GND pads can receive local escapes.
Unconnected pads are obstacles, not automatically routed pins.

- The footprint must contain a two-dimensional SMT pad grid.
- Choose an existing board layer different from the source pad layer; a single
  `fanoutRoutingLayers` entry makes the destination unambiguous.
- Configure trace/via/hole clearances for the actual footprint. An impossible
  assignment reports a routing error; do not suppress it to claim completion.
- This uses an asynchronous solver phase with standard solver debug events.
  Do not provide a custom `algorithmFn` for the built-in preset.
- It does not route to a boundary, length-match buses, or create copper pours.
  Use the ordinary fanout preset for boundary escape routing.

For manual adjustments, read [Saved fanout trace paths](./SAVED_FANOUT_PATHS.md).
Keep stable port selectors, all pad-to-exit paths, physical layer names, and
fanout-local coordinates when supplying `pcbTracePaths`.
