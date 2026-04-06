# `<subpanel />`

Nested grouping inside a manufacturing `<panel />`.

## Example

```tsx
export default () => (
  <panel width="100mm" height="80mm">
    <subpanel layoutMode="grid" boardGap="2mm">
      <board width="20mm" height="10mm" />
      <board width="20mm" height="10mm" />
    </subpanel>
  </panel>
)
```

## Props

Commonly used: `width`, `height`, `children`

## References

- Props: [SubpanelProps](https://github.com/tscircuit/props#subpanelprops-subpanel)
- Source: [lib/components/subpanel.ts](https://github.com/tscircuit/props/blob/main/lib/components/subpanel.ts)
- Local docs: [docs/docs/guides/tscircuit-essentials/panelization.mdx](../docs/docs/guides/tscircuit-essentials/panelization.mdx)
