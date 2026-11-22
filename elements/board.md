# `<board />`

Root element that contains all chips and traces to create a printed circuit board.

## Example

```tsx
export default () => (
  <board width="10mm" height="10mm">
    <resistor resistance="1k" footprint="0402" name="R1" />
  </board>
)
```

## Props

Commonly used: `title`, `material`, `layers`, `borderRadius`, `thickness`, `boardAnchorPosition`, `anchorAlignment`, `boardAnchorAlignment`

Routing and via defaults:

- `layers` – `1`, `2`, `4`, `6`, `8` or `10`.
- `defaultTraceWidth` – width for routed traces whose net sets no `nominalTraceWidth`.
- `minTraceWidth` – minimum routed trace width.
- `defaultViaTenting` – tenting for every via; see [`<via />`](./via.md).
- A hand-placed via inside an SMD pad is a placement error; see [`<via />`](./via.md#vias-inside-pads).

## References

- Props: [BoardProps](https://github.com/tscircuit/props#boardprops-board)
- Source: [lib/components/board.ts](https://github.com/tscircuit/props/blob/main/lib/components/board.ts)
- Local docs: [docs/docs/elements/board.mdx](../docs/docs/elements/board.mdx)
