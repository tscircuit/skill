# `<voltageprobe />`

Measure voltages at specific nodes during SPICE simulation.

## Example

```tsx
export default () => (
  <board routingDisabled>
    <voltagesource name="V1" voltage="5V" />
    <resistor name="R1" resistance="1k" />
    <resistor name="R2" resistance="1k" />

    <trace from=".V1 > .pin1" to="net.VCC" />
    <trace from="net.VCC" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".R2 > .pin1" />
    <trace from=".R2 > .pin2" to="net.GND" />
    <trace from="net.GND" to=".V1 > .pin2" />

    <voltageprobe name="VP_R1" connectsTo=".R1 > .pin1" />
    <voltageprobe name="VP_R2" connectsTo=".R2 > .pin1" />

    <analogsimulation duration="10ms" timePerStep="0.1ms" spiceEngine="ngspice" />
  </board>
)
```

## Props

Commonly used: `name`, `connectsTo`, `referenceTo`, `color`, `footprint`, `connections`

## References

- Props: [VoltageProbeProps](https://github.com/tscircuit/props#voltageprobeprops-voltageprobe)
- Source: [lib/components/voltageprobe.ts](https://github.com/tscircuit/props/blob/main/lib/components/voltageprobe.ts)
- Local docs: [docs/docs/elements/voltageprobe.mdx](../docs/docs/elements/voltageprobe.mdx)
