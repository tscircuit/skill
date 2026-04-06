# `<netalias />`

Deprecated schematic net label alias. Prefer `<netlabel />`.

Deprecated in `@tscircuit/props`; prefer [`<netlabel />`](./netlabel.md).

## Example

```tsx
export default () => (
  <board width="20mm" height="10mm">
    <netalias net="GND" schX={0} schY={0} anchorSide="right" />
  </board>
)
```

## Props

Commonly used: `net`, `connection`, `schX`, `schY`, `schRotation`, `anchorSide`, `name`, `footprint`

## References

- Props: [NetAliasProps](https://github.com/tscircuit/props#netaliasprops-netalias)
- Source: [lib/components/netalias.ts](https://github.com/tscircuit/props/blob/main/lib/components/netalias.ts)
- Local docs: [docs/docs/elements/netlabel.mdx](../docs/docs/elements/netlabel.mdx)
