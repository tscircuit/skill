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

Commonly used: `capacitance`, `maxVoltageRating`, `schShowRatings`, `polarized`, `decouplingFor`, `decouplingTo`, `bypassFor`, `bypassTo`, `maxDecouplingTraceLength`

## Automatic 1 mm trace limit

A two-pin capacitor with one pin traced directly to a chip power pin and the other traced to ground is treated as a decoupling capacitor. Its two-port traces get a 1 mm `maxLength`. A chip pin counts as a power pin when it has `requiresPower` in `pinAttributes`, or a label that starts with `V` (`VM`, `VCC`, `VREF`; not `VSS`) or reads as a voltage (`3V3`). Bulk capacitors wired this way are caught too.

When the capacitor's pads are further than the limit from the pins they connect to, the autorouter does not run at all:

```
Autorouting was skipped because the 1mm maximum length for U1.VM to C2.pin1 cannot be satisfied: its endpoints are 4.94mm apart
```

Fix it one of these ways:

- Move the capacitor next to the pin, which is the point of the limit for a real decoupling capacitor.
- For a bulk capacitor, connect it and the chip pin to the supply net (`net.VM`), not pin to pin. A capacitor that only shares a named net with the chip gets no limit.
- Set `maxDecouplingTraceLength` (mm) on the capacitor.
- Set `maxLength` on each trace that touches the capacitor.

Removing `decouplingFor` does not lift the limit.

## References

- Props: [CapacitorProps](https://github.com/tscircuit/props#capacitorprops-capacitor)
- Source: [lib/components/capacitor.ts](https://github.com/tscircuit/props/blob/main/lib/components/capacitor.ts)
- Local docs: [docs/docs/elements/capacitor.mdx](../docs/docs/elements/capacitor.mdx)
