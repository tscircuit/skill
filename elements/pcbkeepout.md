# `<pcbkeepout />`

Keepout region that blocks copper/features in a PCB area.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <pcbkeepout shape="rect" pcbX={0} pcbY={0} width="6mm" height="4mm" />
  </board>
)
```

## Props

Commonly used: `shape`, `radius`, `width`, `height`, `pcbX`, `pcbY`, `layer`

## References

- Props: [PcbKeepoutProps](https://github.com/tscircuit/props#pcbkeepoutprops-pcbkeepout)
- Source: [lib/components/pcb-keepout.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-keepout.ts)
