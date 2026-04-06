# `<schematicbox />`

Schematic-space box for grouping or callouts.

## Example

```tsx
export default () => (
  <board width="20mm" height="12mm">
    <schematicbox schX={0} schY={0} width="18mm" height="10mm" title="Power" />
  </board>
)
```

## Props

Commonly used: `schX`, `schY`, `width`, `height`, `overlay`, `padding`, `paddingLeft`, `paddingRight`

## References

- Props: [SchematicBoxProps](https://github.com/tscircuit/props#schematicboxprops-schematicbox)
- Source: [lib/components/schematic-box.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-box.ts)
