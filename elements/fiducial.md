# `<fiducial />`

A reference marker used for optical alignment during automated PCB assembly.

## Example

```tsx
export default () => (
    <board width="30mm" height="20mm">
      <fiducial 
        padDiameter="1mm" 
        soldermaskPullback="1mm" 
        pcbX={-10} 
        pcbY={-5} 
      />
      <fiducial 
        padDiameter="1mm" 
        soldermaskPullback="1mm" 
        pcbX={10} 
        pcbY={5} 
      />
    </board>
  )
```

## Props

Commonly used: `soldermaskPullback`, `padDiameter`, `name`, `footprint`, `connections`

## References

- Props: [FiducialProps](https://github.com/tscircuit/props#fiducialprops-fiducial)
- Source: [lib/components/fiducial.ts](https://github.com/tscircuit/props/blob/main/lib/components/fiducial.ts)
- Local docs: [docs/docs/elements/fiducial.mdx](../docs/docs/elements/fiducial.mdx)
