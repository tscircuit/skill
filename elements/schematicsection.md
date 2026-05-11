# `<schematicsection />`

Groups components into a named section on the schematic (e.g. "Power", "Digital").

Use `schSectionName` on any component to assign it to a section, then declare the section with `<schematicsection />`.

> **No auto-layout.** `<schematicsection />` does NOT move components. You must manually place all components in the section in close proximity using `schX`/`schY` so the section renders as a coherent group.

## Placement rule

Pick a cluster origin (e.g. `schX={0} schY={0}`) and place all section members nearby. Components scattered across the schematic will still be tagged to the section but will look disconnected.

## Example

```tsx
export default () => (
  <board width="40mm" height="20mm">
    <schematicsection name="Power" displayName="Power Supply" />
    <schematicsection name="IO" displayName="Input / Output" />

    {/* Power section — cluster around schX=0 */}
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      schSectionName="Power"
      schX={0}
      schY={0}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      schSectionName="Power"
      schX={2}
      schY={0}
    />
    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      schSectionName="Power"
      schX={4}
      schY={0}
    />

    {/* IO section — cluster around schX=12, well separated from Power */}
    <pushbutton
      name="BTN1"
      footprint="button_4pin"
      schSectionName="IO"
      schX={12}
      schY={0}
    />
    <resistor
      name="R2"
      resistance="1k"
      footprint="0402"
      schSectionName="IO"
      schX={14}
      schY={0}
    />
  </board>
)
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | yes | Unique identifier for the section |
| `displayName` | `string` | no | Human-readable label shown on schematic |

## Assigning components to a section

Any component that accepts `CommonComponentProps` has `schSectionName`. Set it to the `name` of a `<schematicsection />`.

```tsx
<resistor name="R1" resistance="10k" footprint="0402" schSectionName="Power" schX={0} schY={0} />
```

## Layout guidance

- Keep section members within ~4–6 schematic units of each other.
- Separate different sections by at least 6–8 units so section boundaries are visually clear.
- Arrange members in a row or grid — do not leave large schX/schY gaps between them.

## References

- Props: [SchematicSectionProps](https://github.com/tscircuit/props#schematicsectionprops-schematicsection)
- Source: [lib/components/schematic-section.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-section.ts)
