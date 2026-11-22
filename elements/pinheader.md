# `<pinheader />`

The `<pinheader />` element is used to create a male or female pin header with configurable spacing and number of pins.

## Example

```tsx
export default () => (
   <board width="30mm" height="10mm">
    <pinheader
      name="J1"
      pinCount={8}
      gender="male"
      pitch="2.54mm"
      footprint="pinrow8_rows2"
      doubleRow={true}
      showSilkscreenPinLabels={true}
      pinLabels={["VCC", "GND", "SDA", "SCL", "MISO", "MOSI", "SCK", "CS"]}
      pcbX={0}
      pcbY={0}
    />
   </board>
  )
```

## Props

Commonly used: `pinCount`, `pitch`, `schFacingDirection`, `gender`, `showSilkscreenPinLabels`, `pcbPinLabels`, `doubleRow`, `rightAngle`, `schWidth`

- With `pinLabels`, set `schWidth` as well. The default schematic box (1.7 wide) is reported as `PinHeaderSchematicBoxTooWide` by `tsci check schematic-placement`; use the `suggestedSchWidth` it prints (0.77 for short labels). See [Schematic placement](../SCHEMATIC_PLACEMENT.md).
- Without a `footprint` prop, the implied `pinrow` footprint leaves out silkscreen pin labels unless `showSilkscreenPinLabels` is set. An explicit `footprint="pinrow5_p2.54mm"` draws them; append `_nopinlabels` when you place your own silkscreen text.

## References

- Props: [PinHeaderProps](https://github.com/tscircuit/props#pinheaderprops-pinheader)
- Source: [lib/components/pin-header.ts](https://github.com/tscircuit/props/blob/main/lib/components/pin-header.ts)
- Local docs: [docs/docs/elements/pinheader.mdx](../docs/docs/elements/pinheader.mdx)
