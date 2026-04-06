# `<toolingrail />`

Panel rail helper for tooling, fiducials, or labels.

## Example

```tsx
export default () => (
  <panel width="80mm" height="40mm">
    <toolingrail>
      <pcbnotetext pcbX={0} pcbY={0} text="RAIL" />
    </toolingrail>
    <board width="20mm" height="10mm" />
  </panel>
)
```

## Props

Commonly used: `children`

## References

- Props: [ToolingrailProps](https://github.com/tscircuit/props#toolingrailprops-toolingrail)
- Source: [lib/components/toolingrail.ts](https://github.com/tscircuit/props/blob/main/lib/components/toolingrail.ts)
