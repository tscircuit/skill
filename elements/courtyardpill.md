# `<courtyardpill />`

Pill-shaped courtyard geometry for a custom footprint.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <chip
      name="U1"
      footprint={
        <footprint>
          <courtyardpill pcbX={0} pcbY={0} width={8} height={3} radius={1.5} />
        </footprint>
      }
    />
  </board>
)
```

## Props

Commonly used: `width`, `height`, `radius`, `pcbX`, `pcbY`, `layer`

## References

- Props: [CourtyardPillProps](https://github.com/tscircuit/props#courtyardpillprops-courtyardpill)
- Source: [lib/components/courtyard-pill.ts](https://github.com/tscircuit/props/blob/main/lib/components/courtyard-pill.ts)
