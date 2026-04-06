# `<courtyardrect />`

Draw rectangular IPC courtyard markings around a footprint body.

## Example

```tsx
export default () => (
  <board width="26mm" height="20mm">
    <chip
      name="U1"
      footprint={
        <footprint>
          <platedhole shape="circle" pcbX={-4} pcbY={0} outerDiameter={2.2} holeDiameter={1.1} />
          <platedhole shape="circle" pcbX={4} pcbY={0} outerDiameter={2.2} holeDiameter={1.1} />
          <courtyardrect
            pcbX={0}
            pcbY={0}
            width={12}
            height={8}
            strokeWidth={0.1}
          />
        </footprint>
      }
    />
  </board>
)
```

## Props

Commonly used: `width`, `height`, `strokeWidth`, `isFilled`, `hasStroke`, `isStrokeDashed`, `color`, `name`

## References

- Props: [CourtyardRectProps](https://github.com/tscircuit/props#courtyardrectprops-courtyardrect)
- Source: [lib/components/courtyard-rect.ts](https://github.com/tscircuit/props/blob/main/lib/components/courtyard-rect.ts)
- Local docs: [docs/docs/elements/courtyardrect.mdx](../docs/docs/elements/courtyardrect.mdx)
