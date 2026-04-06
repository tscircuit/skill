# `<smtpad />`

The `<smtpad />` element is used to represent a surface mount pad.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip name="U1" footprint={
      <footprint>
        <smtpad
          pcbX="0mm"
          pcbY="0mm"
          layer="top"
          shape="rect"
          width="5mm"
          height="5mm"
          portHints={["pin1"]}
        />
      </footprint>
    } />
  </board>
)
```

## Props

Commonly used: `name`, `shape`, `width`, `height`, `rectBorderRadius`, `cornerRadius`, `portHints`, `coveredWithSolderMask`

## References

- Props: [RectSmtPadProps](https://github.com/tscircuit/props#rectsmtpadprops-smtpad)
- Source: [lib/components/smtpad.ts](https://github.com/tscircuit/props/blob/main/lib/components/smtpad.ts)
- Local docs: [docs/docs/footprints/smtpad.mdx](../docs/docs/footprints/smtpad.mdx)
