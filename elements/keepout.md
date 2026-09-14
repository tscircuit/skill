# `<keepout />`

Keepout region that blocks copper/features in a PCB area.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <keepout shape="rect" pcbX={0} pcbY={0} width="6mm" height="4mm" />
  </board>
)
```

## Props

Commonly used: `shape`, `radius`, `width`, `height`, `pcbX`, `pcbY`, `layer`

## References

- Props: [KeepoutProps](https://github.com/tscircuit/props#keepoutprops-keepout)
- Source: [lib/components/keepout.ts](https://github.com/tscircuit/props/blob/main/lib/components/keepout.ts)
