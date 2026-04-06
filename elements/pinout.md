# `<pinout />`

Chip-style element used to generate or document pinouts.

## Example

```tsx
export default () => (
  <board width="30mm" height="18mm">
    <pinout
      name="U1"
      footprint="dip8"
      pinLabels={{ 1: "GND", 8: "VCC" }}
    />
  </board>
)
```

## Props

Commonly used: `name`, `footprint`, `connections`

## References

- Props: [PinoutProps](https://github.com/tscircuit/props#pinoutprops-pinout)
- Source: [lib/components/pinout.ts](https://github.com/tscircuit/props/blob/main/lib/components/pinout.ts)
