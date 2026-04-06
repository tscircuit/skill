# `<schematictable />`

Draw tables within schematics.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <schematictable
      schX={0}
      schY={0}
      borderWidth={0.05}
      fontSize={0.3}
      cellPadding={0.15}
    >
      <schematicrow height={0.6}>
        <schematiccell text="Component" />
        <schematiccell text="Value" horizontalAlign="center" />
        <schematiccell text="Package" />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="R1" />
        <schematiccell text="10k" horizontalAlign="center" />
        <schematiccell text="0805" />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="C1" />
        <schematiccell text="100nF" horizontalAlign="center" />
        <schematiccell text="0402" />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="U1" colSpan={3} horizontalAlign="center" text="ATmega328P" />
      </schematicrow>
    </schematictable>
  </board>
)
```

## Props

Commonly used: `schX`, `schY`, `children`, `cellPadding`, `borderWidth`, `anchor`, `fontSize`, `name`

## References

- Props: [SchematicTableProps](https://github.com/tscircuit/props#schematictableprops-schematictable)
- Source: [lib/components/schematic-table.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-table.ts)
- Local docs: [docs/docs/elements/schematictable.mdx](../docs/docs/elements/schematictable.mdx)
