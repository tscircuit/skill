# `<assembly.cable />`

A physical cable between two endpoints inside an
[`<assembly.device />`](./assemblydevice.md). It renders plugs and wires in 3D
and, with wires and a length, supplies a
[wire harness drawing](../WIRE_HARNESS.md). It does not create electrical
traces.

## Example

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device>
    <board width={40} height={20} routingDisabled>
      <connector name="J1" standard="jst_ph" pinCount={4} footprint="jst4_ph" pcbX={-12} />
      <connector name="J2" standard="jst_ph" pinCount={4} footprint="jst4_ph" pcbX={12} />
    </board>
    <assembly.cable name="I2C" from=".J1" to=".J2" length="150mm" wireAwg={26}>
      <assembly.cablewire name="VCC" fromPin={1} toPin={1} color="red" />
      <assembly.cablewire name="GND" fromPin={2} toPin={2} color="black" />
      <assembly.cablewire name="SDA" fromPin={3} toPin={3} color="blue" />
      <assembly.cablewire name="SCL" fromPin={4} toPin={4} color="yellow" />
    </assembly.cable>
  </assembly.device>
)
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Required, unique per cable |
| `from`, `to` | `string` | Required endpoint selectors, such as `".J1"` or `"MOTOR.wireside"` |
| `model` | `string` | Explicit cable model, such as `"adaptercable_a(jst_sh_pins4)_b(jst_ph_pins4)"`. Omit to infer it from the endpoints |
| `standard` | `"usb_c"` | USB-C preset |
| `length` | distance | Manufactured length between the connectors' wire exits |
| `lengthTolerance` | distance | Plus/minus tolerance on `length`; requires `length` |
| `fromConnectorName`, `toConnectorName` | `string` | Designators for the two ends on drawings, such as `"H1"` |
| `wireAwg` | `number \| string` | Gauge inherited by the wires: `22` or `"22awg"` |
| `children` | | [`<assembly.cablewire />`](./assemblycablewire.md) elements |

Inferred JST cables need the same `standard` and `pinCount` on both connectors.
Both ends of any cable must have the same contact count.

## References

- Props: [AssemblyCableProps](https://github.com/tscircuit/props/blob/main/lib/assembly/cable.ts)
- Docs: [`<assembly.cable />`](https://docs.tscircuit.com/elements/assembly-cable)
- See also: [Wire harness drawings](../WIRE_HARNESS.md)
