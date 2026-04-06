# `<currentsource />`

Current source component for simulation-oriented circuits.

## Example

```tsx
export default () => (
  <board width="20mm" height="12mm">
    <currentsource
      name="I1"
      current="1mA"
      connections={{ pin1: "net.VCC", pin2: "net.GND" }}
    />
  </board>
)
```

## Props

Commonly used: `current`, `frequency`, `peakToPeakCurrent`, `waveShape`, `phase`, `dutyCycle`, `connections`, `name`

## References

- Props: [CurrentSourceProps](https://github.com/tscircuit/props#currentsourceprops-currentsource)
- Source: [lib/components/currentsource.ts](https://github.com/tscircuit/props/blob/main/lib/components/currentsource.ts)
