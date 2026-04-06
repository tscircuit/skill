# `<voltagesource />`

Add a voltage source for SPICE simulations and schematic power inputs.

## Example

```tsx
export default () => (
  <board routingDisabled>
    <voltagesource
      name="V1"
      waveShape="square"
      voltage="5V"
      frequency="1kHz"
      dutyCycle={0.5}
    />
    <resistor name="R1" resistance="1k" />

    <trace from=".V1 > .pin1" to=".R1 > .pin1" />
    <trace from=".V1 > .pin2" to=".R1 > .pin2" />

    <voltageprobe name="VP_OUT" connectsTo=".R1 > .pin1" />
    <analogsimulation duration="5ms" timePerStep="0.05ms" spiceEngine="ngspice" />
  </board>
)
```

## Props

Commonly used: `voltage`, `frequency`, `peakToPeakVoltage`, `waveShape`, `phase`, `dutyCycle`, `connections`, `name`

## References

- Props: [VoltageSourceProps](https://github.com/tscircuit/props#voltagesourceprops-voltagesource)
- Source: [lib/components/voltagesource.ts](https://github.com/tscircuit/props/blob/main/lib/components/voltagesource.ts)
- Local docs: [docs/docs/elements/voltagesource.mdx](../docs/docs/elements/voltagesource.mdx)
