# `<assembly.motor />`

A mechanical motor with shaft orientation, named mounting faces, and optional
wire termination. It creates no PCB footprint or schematic symbol.

## Example

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device name="controller">
    <assembly.motor name="MOTOR" standard="nema17" shaftFacingDirection="z-" />
    <board name="B1" width={42} height={42}
      mountedTo="MOTOR.backface" mountGap="6mm" routingDisabled />
  </assembly.device>
)
```

## Props and behavior

- `name`: required stable identity; `displayName` is optional.
- Provide exactly one of `standard` (`nema8`, `nema17`, `nema23`) or `model`
  (custom model specification). There is no `modelUrl` or `cadModel` prop.
- `shaftFacingDirection`: `x+`, `x-`, `y+`, `y-`, `z+`, or `z-`; defaults to
  `z+` when unmounted. Directions use the world frame described in
  [Assembly guide](../ASSEMBLY.md).
- `wireConnection`: termination such as `jst-ph-6` when using `standard`.
  With a custom `model`, encode the termination in that model instead.
- `mountedTo` and `mountFace`: paired face references for mounting the motor to
  a printed part or another motor. Omit `shaftFacingDirection` when using them.
- `mountGap`: nonnegative surface clearance in mm or a unit string; requires
  `mountedTo` and defaults to zero clearance.

`frontface` is the shaft side and `backface` is opposite the shaft. A board can
mount to `MOTOR.backface` while keeping its XY layout and center plane at Z = 0;
the motor is placed to meet it. Add mounting holes yourself. `MOTOR.wireside`
can be a cable endpoint when the motor has a supported JST PH/SH termination.

## References

- [Docs](https://docs.tscircuit.com/elements/assembly-motor)
- [Props](https://github.com/tscircuit/props/blob/main/lib/assembly/motor.ts)
- [Printed parts](./assemblyprintedpart.md), [cables](./assemblycable.md)
