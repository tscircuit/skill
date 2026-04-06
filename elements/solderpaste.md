# `<solderpaste />`

Paste-mask aperture used inside custom footprints.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <chip
      name="U1"
      footprint={
        <footprint>
          <solderpaste shape="rect" pcbX={0} pcbY={0} width="2mm" height="1mm" />
        </footprint>
      }
    />
  </board>
)
```

## Props

Commonly used: `shape`, `width`, `height`, `name`, `footprint`, `connections`

## References

- Props: [RectSolderPasteProps](https://github.com/tscircuit/props#rectsolderpasteprops-solderpaste)
- Source: [lib/components/solderpaste.ts](https://github.com/tscircuit/props/blob/main/lib/components/solderpaste.ts)
