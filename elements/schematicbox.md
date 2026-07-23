# `<schematicbox />`

Use `<schematicbox />` for schematic-space grouping and callouts, or to show a
selected set of pins from one chip on a schematic sheet.

## Visual box without `chipRef`

Without `chipRef`, the element draws a visual annotation. Provide either both
`width` and `height`, or a non-empty `overlay` array of port selectors. Do not
combine the two sizing modes.

```tsx
export default () => (
  <board width="20mm" height="12mm">
    <schematicbox schX={0} schY={0} width="18mm" height="10mm" title="Power" />
  </board>
)
```

An overlay box calculates its bounds from the selected ports after layout:

```tsx
const selectedPortSelectors = [
  ".U1 > .pin1",
  ".U1 > .pin2",
  ".U2 > .pin1",
]

<schematicbox
  overlay={selectedPortSelectors}
  padding={0.2}
  title="Selected ports"
  strokeStyle="dashed"
/>
```

## Split one chip across multiple schematic sheets

Declare the physical chip once, before any box references it. Use `chipRef` to
select the source chip, and give each box only the labels that should be visible
on its sheet.

### Nest boxes inside sheets

One option is to place each `<schematicbox />` inside its
`<schematicsheet />`:

```tsx
const chipSelector = ".U1"
const powerSheetName = "U1 Power"
const ioSheetName = "U1 I/O"
const sectionWidth = 2.245
const sectionHeight = 1

const allPinLabels = {
  pin1: "VCC",
  pin2: "GND",
  pin3: "IO0",
  pin4: "IO1",
}

const powerPinLabels = {
  pin1: "VCC",
  pin2: "GND",
}

const ioPinLabels = {
  pin1: "IO0",
  pin2: "IO1",
}

export default () => (
  <board routingDisabled>
    <chip name="U1" pinLabels={allPinLabels} />

    <schematicsheet
      name={powerSheetName}
      displayName={powerSheetName}
      sheetIndex={0}
    >
      <schematicbox
        name="U1A"
        chipRef={chipSelector}
        width={sectionWidth}
        height={sectionHeight}
        pinLabels={powerPinLabels}
        schPinArrangement={{
          leftSide: ["pin1", "pin2"],
          rightSide: [],
        }}
      />
      <resistor
        name="R1"
        resistance="1k"
        footprint="0402"
        connections={{ pin1: "U1.VCC" }}
      />
    </schematicsheet>

    <schematicsheet
      name={ioSheetName}
      displayName={ioSheetName}
      sheetIndex={1}
    >
      <schematicbox
        name="U1B"
        chipRef={chipSelector}
        width={sectionWidth}
        height={sectionHeight}
        pinLabels={ioPinLabels}
        schPinArrangement={{
          leftSide: ["pin1"],
          rightSide: ["pin2"],
        }}
      />
      <resistor
        name="R2"
        resistance="1k"
        footprint="0402"
        connections={{ pin1: "U1.IO0" }}
      />
    </schematicsheet>
  </board>
)
```

### Assign boxes to sheets without nesting

The sheets and boxes can also be siblings. Declare each sheet, then set the
box's `schSheetName` to the matching sheet `name`:

```tsx
const interfaceChipPinLabels = {
  pin1: "VDD",
  pin2: "GND",
  pin3: "RESET",
  pin4: "TX",
  pin5: "RX",
  pin6: "IRQ",
}

export default () => (
  <board width="18mm" height="12mm">
    <chip
      name="U1"
      footprint="soic6"
      pinLabels={interfaceChipPinLabels}
    />

    <schematicsheet
      name="Power Sheet"
      displayName="Power Sheet"
      sheetIndex={0}
    />
    <schematicsheet
      name="Interface Sheet"
      displayName="Interface Sheet"
      sheetIndex={1}
    />

    <schematicbox
      name="U1 Power"
      schSheetName="Power Sheet"
      chipRef=".U1"
      width={2.4}
      height={1.2}
      pinLabels={{ pin1: "VDD", pin2: "GND", pin3: "RESET" }}
      schPinArrangement={{
        leftSide: ["pin1", "pin2", "pin3"],
        rightSide: [],
      }}
    />
    <schematicbox
      name="U1 Interface"
      schSheetName="Interface Sheet"
      chipRef=".U1"
      width={2.4}
      height={1.2}
      pinLabels={{ pin1: "TX", pin2: "RX", pin3: "IRQ" }}
      schPinArrangement={{
        leftSide: ["pin1", "pin2", "pin3"],
        rightSide: [],
      }}
    />
  </board>
)
```

`schSheetName` must exactly match the target sheet's `name`. This flat form is
equivalent to nesting each box in its target sheet.

Important rules:

- Declare the source `<chip />` before the `<schematicbox />` elements that
  reference it.
- `chipRef` is a component selector. For `name="U1"`, use `chipRef=".U1"`.
- Values in each box's `pinLabels` must match labels on the source chip.
- Box pin keys are local positions. For example, source `pin3: "IO0"` can be
  placed at local `pin1: "IO0"` in a box.
- Connect through the original chip name and label, such as `U1.IO0`; tscircuit
  resolves the connection to the matching sheet-local port.

## Props

Commonly used: `name`, `chipRef`, `schSheetName`, `pinLabels`,
`schPinArrangement`, `schX`, `schY`, `width`, `height`, `overlay`, `padding`,
`paddingLeft`, `paddingRight`, `paddingTop`, `paddingBottom`, `title`,
`titleAlignment`, `titleInside`, `strokeStyle`

## References

- Guide: [Split a Component Across Schematic Sheets](https://docs.tscircuit.com/guides/tscircuit-essentials/splitting-a-component-across-schematic-sheets)
- Example circuit: [assign boxes with `schSheetName` without nesting](https://github.com/tscircuit/core/blob/da17db77c9646a0300056c46c969189ed7c5a751/tests/features/schematic-sheet/schematic-sheet05.test.tsx)
- Props: [SchematicBoxProps](https://github.com/tscircuit/props#schematicboxprops-schematicbox)
- Source: [lib/components/schematic-box.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-box.ts)
