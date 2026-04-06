# `<analogsimulation />`

Configure and run SPICE simulations for a tscircuit board.

## Example

```tsx
export default () => (
  <board routingDisabled>
    <voltagesource name="V1" voltage="5V" />
    <resistor name="R1" resistance="1k" />

    <trace from=".V1 > .pin1" to=".R1 > .pin1" />
    <trace from=".V1 > .pin2" to=".R1 > .pin2" />

    <voltageprobe name="VP_IN" connectsTo=".V1 > .pin1" />
    <voltageprobe name="VP_OUT" connectsTo=".R1 > .pin1" />

    <analogsimulation duration="10ms" timePerStep="0.1ms" spiceEngine="ngspice" />
  </board>
)
```

## Props

Commonly used: `simulationType`, `duration`, `timePerStep`, `spiceEngine`, `name`, `footprint`, `connections`

## References

- Props: [AnalogSimulationProps](https://github.com/tscircuit/props#analogsimulationprops-analogsimulation)
- Source: [lib/components/analogsimulation.ts](https://github.com/tscircuit/props/blob/main/lib/components/analogsimulation.ts)
- Local docs: [docs/docs/elements/analogsimulation.mdx](../docs/docs/elements/analogsimulation.mdx)
