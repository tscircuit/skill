# `<chip />`

Used to represent virtually any single-part electronic component. Extremely flexible and supports custom footprints and pin arrangements.

## Example

```tsx
import type { CommonLayoutProps } from "tscircuit"

interface Props extends CommonLayoutProps {
  name: string
}

export const A555Timer = (props: Props) => {
  return (
   <board width="10mm" height="10mm">
    <chip
      footprint="soic8"
      pinLabels={{
        pin1: "VCC",
        pin2: "DISCH",
        pin3: "THRES",
        pin4: "CTRL",
        pin5: "GND",
        pin6: "TRIG",
        pin7: "OUT",
        pin8: "RESET"
      }}
      {...props}
    />
  </board>
  )
}
```

## Props

Commonly used: `manufacturerPartNumber`, `pinLabels`, `pinAttributes`, `noConnect`, `showPinAliases`, `pcbPinLabels`, `schPinArrangement`, `schPortArrangement`, `schWidth`, `schHeight`, `pinCompatibleVariants`, `schPinStyle`

- `noConnect={["M0", "TOFF"]}` marks pins as intentionally left open (do-not-connect) without a `pinAttributes` entry for each.
- `schWidth` / `schHeight` size the schematic box. Leave them unset unless `tsci check schematic-placement` reports a value; see [Schematic placement](../SCHEMATIC_PLACEMENT.md).

## Parts from `tsci import`

An imported part is a wrapper that sets `pinLabels`, `pinAttributes`,
`footprint` and `supplierPartNumbers`, then spreads the caller's props last.
The generated `pinAttributes` can be incomplete: for one JLCPCB driver IC only
the ground pins were marked, and `tsci check pin_specification` reported

```text
source_no_power_pin_defined_warning: U1 has no pin with requires_power=true
```

Pass `pinAttributes` where the part is used instead of editing the file in
`imports/`. It replaces the generated map rather than merging with it, so list
every pin that needs an attribute. Keys can be pin labels.

```tsx
<DRV8424PWPR
  name="U1"
  pinAttributes={{
    VM1: { requiresPower: true },
    VM2: { requiresPower: true },
    GND: { requiresGround: true },
  }}
/>
```

## References

- Props: [ChipProps](https://github.com/tscircuit/props#chipprops-chip)
- Source: [lib/components/chip.ts](https://github.com/tscircuit/props/blob/main/lib/components/chip.ts)
- Local docs: [docs/docs/elements/chip.mdx](../docs/docs/elements/chip.mdx)
