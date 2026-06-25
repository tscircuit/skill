# `<trace />`

The `<trace />` element represents an electrical connection between two or more points in your circuit. Traces can connect components, nets, or specific pins on components.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <resistor name="R1" resistance="1k" footprint="0402" pcbX={-2} schX={-2} />
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={2} />
    <trace
      name="sig1"
      from=".R1 > .pin1"
      to=".C1 > .pin1"
    />
  </board>
)
```

## Props

Commonly used: `name`, `via`, `fromLayer`, `toLayer`, `code`, `message`, `path`, `key`, `thickness`

Always include a concise, stable `name` on every `<trace />`; it may appear as a visible net label when routing cannot draw the trace. Prefer short net or signal names such as `vcc`, `gnd`, `sda`, `reset`, `timing`, or `sig1`; avoid long endpoint slugs such as `u1_pin1_to_r2_pin2`.

## References

- Props: [TraceProps](https://github.com/tscircuit/props#traceprops-trace)
- Source: [lib/components/trace.ts](https://github.com/tscircuit/props/blob/main/lib/components/trace.ts)
- Local docs: [docs/docs/elements/trace.mdx](../docs/docs/elements/trace.mdx)
