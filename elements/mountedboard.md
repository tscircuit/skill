# `<mountedboard />`

Place one board as a mounted child assembly of another.

## Example

```tsx
export default () => (
  <board width="40mm" height="30mm">
    <mountedboard name="MB1" boardToBoardDistance="6mm" mountOrientation="faceUp">
      <board width="20mm" height="12mm">
        <chip name="U1" footprint="soic8" />
      </board>
    </mountedboard>
  </board>
)
```

## Props

Commonly used: `boardToBoardDistance`, `mountOrientation`, `width`, `height`, `children`

## References

- Props: [MountedBoardProps](https://github.com/tscircuit/props#mountedboardprops-mountedboard)
- Source: [lib/components/mountedboard.ts](https://github.com/tscircuit/props/blob/main/lib/components/mountedboard.ts)
