# `<powersource />`

Generic power-source component.

## Example

```tsx
export default () => (
  <board width="20mm" height="10mm">
    <powersource name="VIN" voltage="5V" />
  </board>
)
```

## Props

Commonly used: `name`, `footprint`, `connections`

## References

- Props: [PowerSourceProps](https://github.com/tscircuit/props#powersourceprops-powersource)
- Source: [lib/components/power-source.ts](https://github.com/tscircuit/props/blob/main/lib/components/power-source.ts)
