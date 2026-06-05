# `<breakout />`

A `<breakout />` is similar to a [`<group />`](./group.md) but is meant for situations where you want to guide the autorouter on where connections should exit the group. Inside a breakout you can place [`<breakoutpoint />`](./breakoutpoint.md) elements to define explicit exit locations, or let tscircuit generate breakout points automatically for connections that leave the breakout.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <breakout autorouter="auto">
      <resistor name="R1" resistance="1k" footprint="0402" pcbX={0} pcbY={0} />
      <capacitor name="C1" capacitance="1uF" footprint="0402" pcbX={2} pcbY={0} />
      <trace from="R1.2" to="C1.1" />
      <breakoutpoint connection="R1.1" pcbX={5} pcbY={5} />
    </breakout>
  </board>
)
```

## Auto-generated breakout points

When traces connect from components inside a `<breakout />` to components outside of it, tscircuit creates the needed breakout points automatically — no manual `<breakoutpoint />` required. This keeps the breakout local to the component cluster while still letting board-level traces reach headers and surrounding parts.

```tsx
export default () => (
  <board width="20mm" height="16mm">
    <breakout name="MCU_BREAKOUT" padding="1mm">
      <chip
        name="U1"
        footprint="qfp16"
        pinLabels={{ pin1: "GPIO1", pin5: "VCC", pin6: "GND", pin7: "SDA", pin8: "SCL" }}
        pcbX={0}
        pcbY={0}
      />
      <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={-3.5} pcbY={2.4} />
      <trace from="C1.1" to="U1.GPIO1" />
    </breakout>
    <pinheader
      name="J1"
      pinCount={4}
      footprint="pinrow4"
      pinLabels={["VCC", "GND", "SDA", "SCL"]}
      pcbX={7}
      pcbY={0}
      pcbRotation={90}
    />
    <trace from="J1.VCC" to="U1.VCC" />
    <trace from="J1.GND" to="U1.GND" />
    <trace from="J1.SDA" to="U1.SDA" />
    <trace from="J1.SCL" to="U1.SCL" />
  </board>
)
```

## Props

`<breakout />` accepts all the layout props of `<group />` plus:

- `padding` — uniform padding around the breakout region
- `paddingLeft` / `paddingRight` / `paddingTop` / `paddingBottom` — per-side padding
- `autorouter` — autorouter configuration inherited by children

## References

- Props: [BreakoutProps](https://github.com/tscircuit/props#breakoutprops-breakout)
- Source: [lib/components/breakout.ts](https://github.com/tscircuit/props/blob/main/lib/components/breakout.ts)
- Related: [`<breakoutpoint />`](./breakoutpoint.md), [`<group />`](./group.md)
- Docs: https://docs.tscircuit.com/elements/breakout
