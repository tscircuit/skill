# `<schematicline />`

Draw straight lines within custom schematic symbols.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={2}
            height={1.5}
            isFilled={false}
          />
          <schematicline x1={-1} y1={0} x2={1} y2={0} strokeWidth={0.04} />
          <port name="in" direction="left" schX={-1} schY={0} />
          <port name="out" direction="right" schX={1} schY={0} />
        </symbol>
      }
    />
  </board>
)
```

## Props

Commonly used: `x1`, `y1`, `x2`, `y2`, `strokeWidth`, `color`, `isDashed`, `name`

## References

- Props: [SchematicLineProps](https://github.com/tscircuit/props#schematiclineprops-schematicline)
- Source: [lib/components/schematic-line.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-line.ts)
- Local docs: [docs/docs/elements/schematicline.mdx](../docs/docs/elements/schematicline.mdx)
