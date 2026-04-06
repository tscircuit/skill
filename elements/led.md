# `<led />`

Light emitting diodes are diodes that emit light when current passes through them. They are commonly used as indicators on a circuit board such as a "power on indicator" or "data transfer in progress indicator

## Example

```tsx
export default () => (
 <board width="10mm" height="10mm">
  <led name="LED1" footprint="0603" color="red" />
 </board>
)
```

## Props

Commonly used: `color`, `wavelength`, `schDisplayValue`, `schOrientation`, `connections`, `laser`, `name`, `footprint`

## References

- Props: [LedProps](https://github.com/tscircuit/props#ledprops-led)
- Source: [lib/components/led.ts](https://github.com/tscircuit/props/blob/main/lib/components/led.ts)
- Local docs: [docs/docs/elements/led.mdx](../docs/docs/elements/led.mdx)
