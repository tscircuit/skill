# `<keepout />`

Keepout region that blocks copper/features in a PCB area.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <keepout shape="rect" pcbX={0} pcbY={0} width="6mm" height="4mm" />
  </board>
)
```

## Props

Commonly used: `shape`, `radius`, `width`, `height`, `pcbX`, `pcbY`, `layer`, `layers`.

- `warningOnly`: allow routing and placement, reporting prohibited overlaps as warnings instead of errors.
- `allowTraces`: allow trace crossings without keepout errors or warnings.
- `allowPlacements`: allow components and their pads/plated holes without keepout errors or warnings.
- `excludeRefs`: component selectors exempt from keepout diagnostics, e.g. `[".ANT1"]`.

The booleans default to `false`. The two permissions are independent, can be combined,
and suppress diagnostics even with `warningOnly`; neither exempts vias. Copper pours
still avoid the keepout with any of these props enabled.

## References

- Props: [PcbKeepoutProps](https://github.com/tscircuit/props#pcbkeepoutprops-pcbkeepout)
- Source: [lib/components/pcb-keepout.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-keepout.ts)
