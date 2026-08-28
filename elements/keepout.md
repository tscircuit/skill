# `<keepout />`

Keepout region that blocks copper/features in a PCB area. Useful for
antenna keep-outs, mechanical exclusions, and forcing the autorouter
around a region.

The runtime element is registered as `<keepout>` (the props type in
`@tscircuit/props` is named `PcbKeepoutProps`, but the JSX tag is
`<keepout>`, not `<pcbkeepout>`).

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <keepout shape="rect" pcbX={0} pcbY={0} width="6mm" height="4mm" />
    <resistor name="R1" resistance="1k" footprint="0402" pcbX={5} pcbY={0} />
  </board>
)
```

## Props

Commonly used: `shape`, `radius`, `width`, `height`, `pcbX`, `pcbY`, `layer`

## Excluding pour fill from a region

If your goal is to keep a copper pour out of a specific area (e.g. an
antenna keep-out zone), you can also use the `outline` prop on
`<copperpour>` to define a polygon that excludes the region directly,
without a separate `<keepout>`. See [`copperpour.md`](./copperpour.md).

## References

- Props: [PcbKeepoutProps](https://github.com/tscircuit/props#pcbkeepoutprops-pcbkeepout)
- Source: [lib/components/pcb-keepout.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-keepout.ts)
- Local docs: [docs/docs/elements/keepout.mdx](../docs/docs/elements/keepout.mdx)
