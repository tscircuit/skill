# `<schematicarc />`

Draw circular arcs within custom schematic symbols.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      symbol={
        <symbol>
          <schematicarc
            center={{ x: 0, y: 0 }}
            radius={1}
            startAngleDegrees={0}
            endAngleDegrees={180}
            strokeWidth={0.05}
          />
          <schematicline x1={-1} y1={0} x2={1} y2={0} strokeWidth={0.05} />
          <port name="pin1" direction="left" schX={-1} schY={0} />
          <port name="pin2" direction="right" schX={1} schY={0} />
        </symbol>
      }
    />
  </board>
)
```

## Props

Commonly used: `center`, `radius`, `startAngleDegrees`, `endAngleDegrees`, `direction`, `strokeWidth`, `color`, `isDashed`

## References

- Props: [SchematicArcProps](https://github.com/tscircuit/props#schematicarcprops-schematicarc)
- Source: [lib/components/schematic-arc.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-arc.ts)
- Local docs: [docs/docs/elements/schematicarc.mdx](../docs/docs/elements/schematicarc.mdx)
