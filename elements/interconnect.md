# `<interconnect />`

Generic interconnect or internally-connected part.

## Example

```tsx
export default () => (
  <board width="20mm" height="10mm">
    <interconnect
      name="X1"
      standard="0603"
      pinLabels={{ 1: "A", 2: "B" }}
    />
  </board>
)
```

## Props

Commonly used: `standard`, `pinLabels`, `internallyConnectedPins`, `name`, `footprint`, `connections`

## References

- Props: [InterconnectProps](https://github.com/tscircuit/props#interconnectprops-interconnect)
- Source: [lib/components/interconnect.ts](https://github.com/tscircuit/props/blob/main/lib/components/interconnect.ts)
