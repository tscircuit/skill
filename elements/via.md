# `<via />`

A via is a plated hole that connects different layers of a PCB. Vias are commonly used to route traces between layers and for thermal management.

## Example

```tsx
export default () => (
    <board width={5} height={5}>
      <via
        fromLayer="top"
        toLayer="bottom"
        outerDiameter="0.8mm"
        holeDiameter="0.4mm"
        pcbX={0}
        pcbY={0}
      />
    </board>
  )
```

## Props

Commonly used: `name`, `fromLayer`, `toLayer`, `holeDiameter`, `outerDiameter`, `connectsTo`, `netIsAssignable`, `footprint`

## References

- Props: [ViaProps](https://github.com/tscircuit/props#viaprops-via)
- Source: [lib/components/via.ts](https://github.com/tscircuit/props/blob/main/lib/components/via.ts)
- Local docs: [docs/docs/elements/via.mdx](../docs/docs/elements/via.mdx)
