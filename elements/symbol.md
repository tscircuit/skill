# `<symbol />`

Used to define custom schematic representations for chips using primitive drawing components like rectangles, circles, lines, and arcs.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="Q1"
      symbol={
        <symbol>
          {/* Outer circle */}
          <schematiccircle center={{ x: 0.1, y: 0 }} radius={0.55} isFilled={false} strokeWidth={0.05} />
          {/* Base vertical bar */}
          <schematicline x1={-0.1} y1={-0.5} x2={-0.1} y2={0.5} strokeWidth={0.05} />
          {/* Base input line */}
          <schematicline x1={-0.7} y1={0} x2={-0.1} y2={0} strokeWidth={0.05} />
          {/* Collector line (diagonal then vertical) */}
          <schematicline x1={-0.1} y1={0.2} x2={0.35} y2={0.5} strokeWidth={0.05} />
          <schematicline x1={0.35} y1={0.5} x2={0.35} y2={1} strokeWidth={0.05} />
          {/* Emitter line (diagonal then vertical) */}
          <schematicline x1={-0.1} y1={-0.2} x2={0.35} y2={-0.5} strokeWidth={0.05} />
          <schematicline x1={0.35} y1={-0.5} x2={0.35} y2={-1} strokeWidth={0.05} />
          {/* Emitter arrow (V shape pointing outward along emitter line) */}
          <schematicpath
            strokeWidth={0.05}
            points={[
              { x: 0.16, y: -0.25},
              { x: 0.2, y: -0.40 },
              { x: 0.06, y: -0.44 },
            ]}
          />
          {/* Ports */}
          <port name="B" direction="left" schX={-0.7} schY={0} />
          <port name="C" direction="up" schX={0.35} schY={1} />
          <port name="E" direction="down" schX={0.35} schY={-1} />
        </symbol>
      }
    />
  </board>
)
```

## Props

Commonly used: `originalFacingDirection`, `width`, `height`, `name`, `footprint`, `connections`

## References

- Props: [SymbolProps](https://github.com/tscircuit/props#symbolprops-symbol)
- Source: [lib/components/symbol.ts](https://github.com/tscircuit/props/blob/main/lib/components/symbol.ts)
- Local docs: [docs/docs/elements/symbol.mdx](../docs/docs/elements/symbol.mdx)
