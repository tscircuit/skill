# `<diode />`

Diodes are semiconductor devices that allow current to flow primarily in one direction, making them ideal for rectification, signal clipping, and protection against reverse voltage. They are essential in power supply circuits and for protecting sensitive components from voltage spikes.

## Example

```tsx
export default () => (
 <board width="10mm" height="10mm">
  <diode name="D1" footprint="sod123" />
 </board>
)
```

## Props

Commonly used: `connections`, `anode`, `cathode`, `pin1`, `pin2`, `pos`, `neg`, `variant`

## References

- Props: [DiodeProps](https://github.com/tscircuit/props#diodeprops-diode)
- Source: [lib/components/diode.ts](https://github.com/tscircuit/props/blob/main/lib/components/diode.ts)
- Local docs: [docs/docs/elements/diode.mdx](../docs/docs/elements/diode.mdx)
