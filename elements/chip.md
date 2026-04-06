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

Commonly used: `manufacturerPartNumber`, `pinLabels`, `showPinAliases`, `pcbPinLabels`, `schPinArrangement`, `schPortArrangement`, `pinCompatibleVariants`, `schPinStyle`

## References

- Props: [ChipProps](https://github.com/tscircuit/props#chipprops-chip)
- Source: [lib/components/chip.ts](https://github.com/tscircuit/props/blob/main/lib/components/chip.ts)
- Local docs: [docs/docs/elements/chip.mdx](../docs/docs/elements/chip.mdx)
