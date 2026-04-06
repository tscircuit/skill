# `<resistor />`

A `<resistor />` is an extremely common element of electronic designs. It limits the flow of electricity and is critical to making sure digital signals are properly "pulled up" or "pulled down" to set their default value as `1` or `0`

## Example

```tsx
export default () => (
 <board width="10mm" height="10mm">
    <resistor
      name="R1"
      footprint="0402"
      resistance="1k"
    />
 </board>
)
```

## Props

Commonly used: `resistance`, `tolerance`, `pullupFor`, `pullupTo`, `pulldownFor`, `pulldownTo`, `schOrientation`, `schSize`

## References

- Props: [ResistorProps](https://github.com/tscircuit/props#resistorprops-resistor)
- Source: [lib/components/resistor.ts](https://github.com/tscircuit/props/blob/main/lib/components/resistor.ts)
- Local docs: [docs/docs/elements/resistor.mdx](../docs/docs/elements/resistor.mdx)
