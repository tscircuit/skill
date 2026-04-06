# `<schematictext />`

The `<schematictext />` element places text directly on the schematic.

## Example

```tsx
export default () => (
    <board width="10mm" height="10mm">
      <schematictext text="Hello" schX={2} schY={3} color="red" anchor="center" />
    </board>
  )
```

## Props

Commonly used: `schX`, `schY`, `text`, `fontSize`, `anchor`, `color`, `schRotation`, `name`

## References

- Props: [SchematicTextProps](https://github.com/tscircuit/props#schematictextprops-schematictext)
- Source: [lib/components/schematic-text.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-text.ts)
- Local docs: [docs/docs/elements/schematictext.mdx](../docs/docs/elements/schematictext.mdx)
