# `<schematiccircle />`

Draw circles within custom schematic symbols.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      symbol={
        <symbol>
          <schematiccircle
            center={{ x: 0, y: 0 }}
            radius={1}
            isFilled={false}
          />
          <port name="pin1" direction="left" schX={-1} schY={0} />
          <port name="pin2" direction="right" schX={1} schY={0} />
        </symbol>
      }
    />
  </board>
)
```

## Props

Commonly used: `center`, `radius`, `strokeWidth`, `color`, `isFilled`, `fillColor`, `isDashed`, `name`

## References

- Props: [SchematicCircleProps](https://github.com/tscircuit/props#schematiccircleprops-schematiccircle)
- Source: [lib/components/schematic-circle.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-circle.ts)
- Local docs: [docs/docs/elements/schematiccircle.mdx](../docs/docs/elements/schematiccircle.mdx)
