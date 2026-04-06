# `<platedhole />`

The `<platedhole />` element is used to represent a plated through hole on a PCB.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip name="U1" footprint={
      <footprint>
        <platedhole
          pcbX="0mm"
          pcbY="0mm"
          shape="circle"
          holeDiameter="1mm"
          outerDiameter="2mm"
          portHints={["pin1"]}
        />
      </footprint>
    } />
  </board>
)
```

## Props

Commonly used: `name`, `connectsTo`, `shape`, `holeDiameter`, `outerDiameter`, `padDiameter`, `portHints`, `solderMaskMargin`

## References

- Props: [CirclePlatedHoleProps](https://github.com/tscircuit/props#circleplatedholeprops-platedhole)
- Source: [lib/components/platedhole.ts](https://github.com/tscircuit/props/blob/main/lib/components/platedhole.ts)
- Local docs: [docs/docs/footprints/platedhole.mdx](../docs/docs/footprints/platedhole.mdx)
