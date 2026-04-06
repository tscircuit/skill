# `<fuse />`

A `<fuse />` is a safety device that protects electrical circuits by interrupting current flow when it exceeds a predetermined threshold. Fuses are essential for preventing damage to components and circuits from overcurrent conditions.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <fuse
      name="F1"
      footprint="0603"
      currentRating="2A"
      voltageRating="32V"
    />
  </board>
)
```

## Props

Commonly used: `currentRating`, `voltageRating`, `schShowRatings`, `schOrientation`, `connections`, `name`, `footprint`

## References

- Props: [FuseProps](https://github.com/tscircuit/props#fuseprops-fuse)
- Source: [lib/components/fuse.ts](https://github.com/tscircuit/props/blob/main/lib/components/fuse.ts)
- Local docs: [docs/docs/elements/fuse.mdx](../docs/docs/elements/fuse.mdx)
