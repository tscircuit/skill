# `<switch />`

A switch is a mechanical device that can be used to connect or disconnect a circuit.

## Example

```tsx
export default () => (
  <switch name="SW1" type="spst" />
)
```

## Props

Commonly used: `type`, `isNormallyClosed`, `spdt`, `spst`, `dpst`, `dpdt`, `simSwitchFrequency`, `simCloseAt`

## Side-actuated switches

A switch whose lever exits the side of its body is *installed* from above and
*actuated* from the side. Say both on the footprint, or its enclosure opening
lands in the lid above a lever that points at a wall:

```tsx
<footprint insertionDirection="from_above" cutoutApertureDirection="from_top">
  {/* pads; the lever exits the +Y side of the unrotated footprint */}
</footprint>
```

See [`<footprint />`](./footprint.md#insertion-and-aperture-directions).

## References

- Props: [SwitchProps](https://github.com/tscircuit/props#switchprops-switch)
- Source: [lib/components/switch.ts](https://github.com/tscircuit/props/blob/main/lib/components/switch.ts)
- Local docs: [docs/docs/elements/switch.mdx](../docs/docs/elements/switch.mdx)
