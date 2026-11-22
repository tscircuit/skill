# `<via />`

A via is a plated hole that connects different layers of a PCB. Vias are commonly used to route traces between layers and for thermal management.

## Example

```tsx
export default () => (
    <board width={5} height={5}>
      <via
        fromLayer="top"
        toLayer="bottom"
        outerDiameter="0.8mm"
        holeDiameter="0.4mm"
        pcbX={0}
        pcbY={0}
      />
    </board>
  )
```

## Props

Commonly used: `name`, `fromLayer`, `toLayer`, `holeDiameter`, `outerDiameter`, `connectsTo`, `netIsAssignable`, `tented`, `footprint`

- `connectsTo="net.GND"` ties a hand-placed via to a net, for example a stitching or thermal via.
- `tented` covers the via with solder mask. It takes `true` / `false` or `"top_and_bottom_tented"`, `"top_tented"`, `"bottom_tented"`, `"exposed"`. `defaultViaTenting` on `<board />` sets the default for every via.

## Vias inside pads

A via whose hole lands on an SMD pad is a placement error:

```text
pcb_placement_error: Via hole at (0.00mm, 0.00mm) overlaps SMD pad U1.EP at (0.00mm, 0.00mm)
```

For thermal or stitching vias next to an exposed pad, place the vias just
outside the pad and join them to it with a `<copperpour />` on the same net:

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <net name="GND" isGroundNet />
    <chip name="U1" footprint="soic8_thermalpad2x2mm" pinLabels={{ pin9: "EP" }} connections={{ EP: "net.GND" }} />
    <via pcbX={0} pcbY={4.5} fromLayer="top" toLayer="bottom" holeDiameter={0.25} outerDiameter={0.5} connectsTo="net.GND" tented />
    <copperpour connectsTo="net.GND" layer="top" />
    <copperpour connectsTo="net.GND" layer="bottom" />
  </board>
)
```

`isViaInPadAllowed` on `<board />` removes the placement error for a via inside
a pad, but `tsci build` still reports `pcb_pad_pad_clearance_error` between the
via and that pad (checked with tscircuit 0.0.3270).

## References

- Props: [ViaProps](https://github.com/tscircuit/props#viaprops-via)
- Source: [lib/components/via.ts](https://github.com/tscircuit/props/blob/main/lib/components/via.ts)
- Local docs: [docs/docs/elements/via.mdx](../docs/docs/elements/via.mdx)
