# `<netlabel />`

The `<netlabel />` element attaches a text label to a net on the schematic. It replaces the old `<netalias />` element.

## Example

```tsx
import { sel } from "tscircuit"
export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="I2C_SENSOR"
      footprint="soic4"
      pinLabels={{
        pin1: "SCL",
        pin2: "SDA",
        pin3: "VCC",
        pin4: "GND",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "VCC", "GND"],
        },
      }}
      connections={{
        SCL: sel.net.SCL,
        SDA: sel.net.SDA,
        VCC: sel.net.V3_3,
        GND: sel.net.GND,
      }}
    />
    <netlabel
      schX={-2}
      schY={-1}
      anchorSide="top"
      net="GND"
      connection="U1.GND"
    />
    <netlabel
      schX={-2}
      schY={0.8}
      net="VCC"
      connection="U1.VCC"
      anchorSide="bottom"
    />
  </board>
)
```

## Props

Commonly used: `net`, `connection`, `connectsTo`, `schX`, `schY`, `schRotation`, `anchorSide`, `name`

## References

- Props: [NetLabelProps](https://github.com/tscircuit/props#netlabelprops-netlabel)
- Source: [lib/components/netlabel.ts](https://github.com/tscircuit/props/blob/main/lib/components/netlabel.ts)
- Local docs: [docs/docs/elements/netlabel.mdx](../docs/docs/elements/netlabel.mdx)
