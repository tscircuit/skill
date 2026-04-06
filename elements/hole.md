# `<hole />`

Used for mounting and does not have conductive properties.

## Example

```tsx
export default () => (
    <board width="30mm" height="20mm">
      <hole diameter="3mm" pcbX={0} pcbY={0} />
    </board>
  )
```

## Props

Commonly used: `name`, `shape`, `diameter`, `radius`, `solderMaskMargin`, `coveredWithSolderMask`, `footprint`, `connections`

## References

- Props: [CircleHoleProps](https://github.com/tscircuit/props#circleholeprops-hole)
- Source: [lib/components/hole.ts](https://github.com/tscircuit/props/blob/main/lib/components/hole.ts)
- Local docs: [docs/docs/elements/hole.mdx](../docs/docs/elements/hole.mdx)
