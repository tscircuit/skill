# `<constrainedlayout />`

Optional wrapper for layout-constrained groups.

## Example

```tsx
export default () => (
  <board width="20mm" height="12mm">
    <constrainedlayout name="cluster">
      <resistor name="R1" resistance="1k" footprint="0402" />
      <led name="D1" footprint="0402" />
    </constrainedlayout>
  </board>
)
```

## Props

Commonly used: `name`, `pcbOnly`, `schOnly`, `width`, `height`, `children`

## References

- Props: [ConstrainedLayoutProps](https://github.com/tscircuit/props#constrainedlayoutprops-constrainedlayout)
- Source: [lib/components/constrainedlayout.ts](https://github.com/tscircuit/props/blob/main/lib/components/constrainedlayout.ts)
