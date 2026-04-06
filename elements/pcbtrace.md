# `<pcbtrace />`

Explicit low-level PCB trace geometry.

## Example

```tsx
export default () => (
  <board width="20mm" height="20mm">
    <pcbtrace
      layer="top"
      thickness="0.2mm"
      route={[
        { x: -4, y: 0 },
        { x: 0, y: 2 },
        { x: 4, y: 0 },
      ]}
    />
  </board>
)
```

## Props

Commonly used: `layer`, `thickness`, `route`, `pcbX`, `pcbY`

## References

- Props: [PcbTraceProps](https://github.com/tscircuit/props#pcbtraceprops-pcbtrace)
- Source: [lib/components/pcb-trace.ts](https://github.com/tscircuit/props/blob/main/lib/components/pcb-trace.ts)
