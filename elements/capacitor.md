# `<capacitor />`

A `<capacitor />` stores electrical energy in an electric field. Capacitors are commonly used for filtering, energy storage, and timing circuits. Unlike resistors, capacitors can be polarized (like electrolytic capacitors) or non-polarized (like ceramic capacitors).

## Example

```tsx
export default () => (
 <board width="10mm" height="10mm">
  <capacitor
    name="C2"
    footprint="axial_p5mm"
    capacitance="10μF"
    polarized
  /> 
</board>
)
```

## Props

Commonly used: `capacitance`, `maxVoltageRating`, `schShowRatings`, `polarized`, `decouplingFor`, `decouplingTo`, `bypassFor`, `bypassTo`

## References

- Props: [CapacitorProps](https://github.com/tscircuit/props#capacitorprops-capacitor)
- Source: [lib/components/capacitor.ts](https://github.com/tscircuit/props/blob/main/lib/components/capacitor.ts)
- Local docs: [docs/docs/elements/capacitor.mdx](../docs/docs/elements/capacitor.mdx)
