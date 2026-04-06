# `<solderjumper />`

Small pads that can be cut or bridged with solder for configuration options.

## Example

```tsx
export default () => (
  <solderjumper name="SJ1" footprint="solderjumper2_bridged12" bridgedPins={[["1","2"]]} />
)
```

## Props

Commonly used: `bridgedPins`, `bridged`, `name`, `footprint`, `connections`

## References

- Props: [SolderJumperProps](https://github.com/tscircuit/props#solderjumperprops-solderjumper)
- Source: [lib/components/solderjumper.ts](https://github.com/tscircuit/props/blob/main/lib/components/solderjumper.ts)
- Local docs: [docs/docs/elements/solderjumper.mdx](../docs/docs/elements/solderjumper.mdx)
