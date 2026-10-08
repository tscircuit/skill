# `<assembly.cable />`

A physical cable between PCB connectors or a motor's wire termination. Its
route and compatible plugs are inferred after placement. It does not create
electrical traces or map pins.

## Example

```tsx
import { assembly } from "tscircuit"

export default () => (
  <assembly.device>
    <assembly.motor name="MOTOR" standard="nema17" wireConnection="jst-ph-6" />
    <board name="CONTROLLER" width={44} height={34} pcbX={85} routingDisabled>
      <connector name="J_MOTOR" standard="jst_ph" pinCount={6}
        footprint="jst6_ph" pcbX={-18} pcbRotation={90} />
    </board>
    <assembly.cable name="HARNESS"
      from="MOTOR.wireside" to=".CONTROLLER > .J_MOTOR" />
  </assembly.device>
)
```

## Props and behavior

- `name`: required nonempty stable cable identity.
- `from`, `to`: distinct endpoints; connector selectors or named motor
  references such as `MOTOR.wireside`.
- `standard`: optional `usb_c` preset. Otherwise infer USB-C, JST PH, or JST SH
  from the endpoints. JST connectors must match in standard and pin count.
- `model`: optional explicit cable model specification.

Endpoints resolve inside the nearest `assembly.device`, including forward
references. Missing, ambiguous, incompatible, or self-connected endpoints
report errors. Match connector footprints to their standard and pin count.

Use a separate cable element for each physical cable. Routing considers exit
directions and a clearance arch, but does not avoid obstacles or simulate sag.
There are no cable length or route-hint props; inspect the 3D output.

## References

- [Docs](https://docs.tscircuit.com/elements/assembly-cable)
- [Props](https://github.com/tscircuit/props/blob/main/lib/assembly/cable.ts)
- [Assembly guide](../ASSEMBLY.md)
