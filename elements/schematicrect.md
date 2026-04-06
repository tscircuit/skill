# `<schematicrect />`

Draw rectangles and boxes within custom schematic symbols.

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
          <port name="pin1" direction="left" schX={-1} schY={0} />
          <port name="pin2" direction="right" schX={1} schY={0} />
        </symbol>
      }
    />
  </board>
)
```

## Props

Commonly used: `schX`, `schY`, `width`, `height`, `rotation`, `strokeWidth`, `color`, `isFilled`

## References

- Props: [SchematicRectProps](https://github.com/tscircuit/props#schematicrectprops-schematicrect)
- Source: [lib/components/schematic-rect.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-rect.ts)
- Local docs: [docs/docs/elements/schematicrect.mdx](../docs/docs/elements/schematicrect.mdx)
