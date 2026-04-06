# `<opamp />`

Operational amplifier component with standard five-pin aliases.

## Example

```tsx
export default () => (
  <board width="24mm" height="16mm">
    <opamp
      name="U1"
      footprint="soic8"
      connections={{
        non_inverting_input: "net.IN+",
        inverting_input: "net.IN-",
        output: "net.OUT",
      }}
    />
  </board>
)
```

## Props

Commonly used: `connections`, `name`, `footprint`

## References

- Props: [OpAmpProps](https://github.com/tscircuit/props#opampprops-opamp)
- Source: [lib/components/opamp.ts](https://github.com/tscircuit/props/blob/main/lib/components/opamp.ts)
