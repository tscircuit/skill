# `<constraint />`

The `<constraint />` element is used to enforce geometric relationships between different elements in a PCB footprint. Constraints can set specific distances and alignments, such as center-to-center, edge-to-edge, or ensuring two elements line up along the same axis.

## Example

```tsx
/**
 * A switch shaft you can use to connect a pluggable Kailh socket.
 */
const KeyswitchSocket = (props: {
  name: string
  pcbX?: number
  pcbY?: number
  layer?: "top" | "bottom"
}) => (
  <chip
    {...props}
    cadModel={{
      objUrl: "/easyeda/C5184526",
    }}
    footprint={
      <footprint>
        {/* <silkscreentext text={props.name} /> */}
        <smtpad
          shape="rect"
          width="2.55mm"
          height="2.5mm"
          portHints={["pin1"]}
          layer="top"
        />
        <smtpad
          shape="rect"
          width="2.55mm"
          height="2.5mm"
          portHints={["pin2"]}
          layer="top"
        />
        <hole name="H1" diameter="3mm" />
        <hole name="H2" diameter="3mm" />
        <constraint xDist="6.35mm" centerToCenter left=".H1" right=".H2" />
        <constraint yDist="2.54mm" centerToCenter top=".H1" bottom=".H2" />
        <constraint edgeToEdge xDist="11.3mm" left=".pin1" right=".pin2" />
        <constraint sameY for={[".pin1", ".H1"]} />
        <constraint sameY for={[".pin2", ".H2"]} />
        <constraint
          edgeToEdge
          xDist={(11.3 - 6.35 - 3) / 2}
          left=".pin1"
          right=".H1"
        />
      </footprint>
    }
  />
)

export default () => (
  <board width="40mm" height="40mm">
    <KeyswitchSocket name="SW1" pcbX={-10} pcbY={0} layer="top" />
    <KeyswitchSocket name="SW2" pcbX={10} pcbY={0} layer="bottom" />
  </board>
)
```

## Props

Commonly used: `pcb`, `xDist`, `left`, `right`, `edgeToEdge`, `centerToCenter`, `yDist`, `top`

## References

- Props: [ConstraintProps](https://github.com/tscircuit/props#constraintprops-constraint)
- Source: [lib/components/constraint.ts](https://github.com/tscircuit/props/blob/main/lib/components/constraint.ts)
- Local docs: [docs/docs/footprints/constraint.mdx](../docs/docs/footprints/constraint.mdx)
