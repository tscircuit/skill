# `<schematicpath />`

Draw connected line segments within custom schematic symbols.

## Example

```tsx
export default () => (
  <board width="12mm" height="10mm">
    <chip
      name="U1"
      symbol={
        <symbol>
          <schematicpath
            strokeWidth={0.05}
            points={[
              { x: -1, y: -0.6 },
              { x: -0.3, y: 0.6 },
              { x: 0.4, y: -0.6 },
              { x: 1.1, y: 0.6 },
            ]}
          />
          <port name="in" direction="left" schX={-1.5} schY={0} />
          <port name="out" direction="right" schX={1.5} schY={0} />
        </symbol>
      }
    />
  </board>
)
```

## Props

Commonly used: `points`, `svgPath`, `strokeWidth`, `strokeColor`, `isFilled`, `fillColor`, `name`, `footprint`

## References

- Props: [SchematicPathProps](https://github.com/tscircuit/props#schematicpathprops-schematicpath)
- Source: [lib/components/schematic-path.ts](https://github.com/tscircuit/props/blob/main/lib/components/schematic-path.ts)
- Local docs: [docs/docs/elements/schematicpath.mdx](../docs/docs/elements/schematicpath.mdx)
