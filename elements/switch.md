# `<switch />`

A switch is a mechanical device that can be used to connect or disconnect a circuit.

## Example

```tsx
export default () => (
  <switch name="SW1" type="spst" />
)
```

## Props

Commonly used: `type`, `isNormallyClosed`, `spdt`, `spst`, `dpst`, `dpdt`, `simSwitchFrequency`, `simCloseAt`

## References

- Props: [SwitchProps](https://github.com/tscircuit/props#switchprops-switch)
- Source: [lib/components/switch.ts](https://github.com/tscircuit/props/blob/main/lib/components/switch.ts)
- Local docs: [docs/docs/elements/switch.mdx](../docs/docs/elements/switch.mdx)
