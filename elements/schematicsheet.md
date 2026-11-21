# `<schematicsheet />`

Declares one page of the schematic. Assign a component to a sheet with
`schSheetName`; schematic primitives such as `<schematictext />` can be nested
inside the sheet instead.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <schematicsheet name="Power" displayName="Power input" sheetIndex={0}>
      <schematictext text="Power input" schX={0} schY={3} fontSize={0.3} />
    </schematicsheet>
    <schematicsheet name="Logic" displayName="Logic" sheetIndex={1} />

    <resistor name="R1" resistance="10k" footprint="0603" schSheetName="Power" schX={0} schY={0} pcbX={-3} />
    <resistor name="R2" resistance="10k" footprint="0603" schSheetName="Logic" schX={0} schY={0} pcbX={3} />
  </board>
)
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Identifier that `schSheetName` refers to |
| `displayName` | `string` | Title shown on the sheet |
| `sheetIndex` | `number` | Page order, starting at 0 |
| `sheetSize` | `"A4" \| "ANSI_B"` | Defaults to `"A4"` (297 × 210 mm). `"ANSI_B"` is 431.8 × 279.4 mm |
| `sheetWidth`, `sheetHeight` | distance (mm) | Override the size from `sheetSize` |

## How much fits on a sheet

Sheet sizes are in millimetres; `schX` / `schY` are in schematic units. One
schematic unit is about 9.24 mm (a resistor's 1.1-unit pin span is drawn as
10.16 mm).

| Sheet | Size in schematic units | Usable area inside the 5 mm margin |
| --- | --- | --- |
| A4 | 32.2 × 22.7 | about 31 × 21.6 |
| ANSI B | 46.8 × 30.3 | about 45.7 × 29.2 |

- The sheet is centred on the bounding box of its contents, so only the extent
  of the placement matters, not where the origin is. Components at
  `(0, 0)` and `(14, 9)` give a sheet centred on `(7, 4.5)`.
- Content that does not fit is reported by `tsci build`:
  `schematic_component … extends outside the drawing area of schematic sheet "…"`.
  Move the parts closer together, split the circuit over another sheet, or use
  `sheetSize="ANSI_B"`.
- Keep a standard size for a small circuit. A custom `sheetWidth` /
  `sheetHeight` makes `tsci build` warn `uses a non-default size … Prefer the
  default A4 sheet size`. Spread the sections out to use the sheet instead of
  shrinking it.

## References

- Props: [SchematicSheetProps](https://github.com/tscircuit/props#schematicsheetprops-schematicsheet)
- Sections within a sheet: [`<schematicsection />`](./schematicsection.md)
- Splitting one chip across sheets: [`<schematicbox />`](./schematicbox.md#split-one-chip-across-multiple-schematic-sheets)
- Box sizing rules: [SCHEMATIC_PLACEMENT.md](../SCHEMATIC_PLACEMENT.md)
