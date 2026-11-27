# `<assembly.cablewire />`

One insulated conductor of its parent [`<assembly.cable />`](./assemblycable.md):
which contact it leaves at the `from` end and which it lands on at the `to`
end.

## Example

```tsx
<assembly.cable name="FAN" from=".J1" to=".J2" length="200mm" wireAwg={26}>
  <assembly.cablewire name="GND" fromPin={1} toPin={3} color="black" />
  <assembly.cablewire name="12V" fromPin={2} toPin={2} color="red" awg={22} />
  <assembly.cablewire name="TACH" fromPin={3} toPin={1} color="yellow" />
</assembly.cable>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `fromPin` | `number \| string` | Required contact position at the `from` end: `1` or `"pin1"` |
| `toPin` | `number \| string` | Required contact position at the `to` end |
| `name` | `string` | Signal name, shown in the wiring list |
| `color` | `string` | Insulation color as drawn, such as `"black"` or `"red/white"` |
| `awg` | `number \| string` | Gauge; omit to inherit the cable's `wireAwg` |

Pins are positions on the cable's own plugs, counted from 1. Each contact takes
one wire per end, and a pin cannot exceed the plug's contact count. Cavities
without a wire stay empty.

## References

- Props: [AssemblyCableWireProps](https://github.com/tscircuit/props/blob/main/lib/assembly/cablewire.ts)
- Docs: [`<assembly.cablewire />`](https://docs.tscircuit.com/elements/assembly-cablewire)
- See also: [Wire harness drawings](../WIRE_HARNESS.md)
