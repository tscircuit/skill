# `<port />`

Define connection points within custom schematic symbols.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="D1"
      symbol={
        <symbol>
          {/* Diode triangle */}
          <schematicline x1={-0.3} y1={-0.4} x2={-0.3} y2={0.4} strokeWidth={0.05} />
          <schematicline x1={-0.3} y1={0.4} x2={0.3} y2={0} strokeWidth={0.05} />
          <schematicline x1={0.3} y1={0} x2={-0.3} y2={-0.4} strokeWidth={0.05} />
          {/* Cathode bar */}
          <schematicline x1={0.3} y1={-0.4} x2={0.3} y2={0.4} strokeWidth={0.05} />
          {/* Ports */}
          <port name="A" schX={-0.3} schY={0} direction="left" />
          <port name="K" schX={0.3} schY={0} direction="right" />
        </symbol>
      }
    />
  </board>
)
```

## Props

Commonly used: `name`, `pinNumber`, `schStemLength`, `aliases`, `layer`, `layers`, `schX`, `schY`

## References

- Props: [PortProps](https://github.com/tscircuit/props#portprops-port)
- Source: [lib/components/port.ts](https://github.com/tscircuit/props/blob/main/lib/components/port.ts)
- Local docs: [docs/docs/elements/port.mdx](../docs/docs/elements/port.mdx)
