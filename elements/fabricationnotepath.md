# `<fabricationnotepath />`

Polyline/path annotation on the fabrication layer.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <fabricationnotepath
      strokeWidth={0.3}
      route={[
        { x: -5, y: 0 },
        { x: 0, y: 5 },
        { x: 5, y: 0 },
      ]}
    />
  </board>
)
```

## Props

Commonly used: `pcbLeftEdgeX`, `pcbRightEdgeX`, `pcbTopEdgeY`, `pcbBottomEdgeY`, `pcbX`, `pcbY`, `pcbOffsetX`, `pcbOffsetY`

## References

- Props: [FabricationNotePathProps](https://github.com/tscircuit/props#fabricationnotepathprops-fabricationnotepath)
- Source: [lib/components/fabrication-note-path.ts](https://github.com/tscircuit/props/blob/main/lib/components/fabrication-note-path.ts)
