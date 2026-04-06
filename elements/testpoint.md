# `<testpoint />`

A `<testpoint />` is a designated location on a PCB that provides easy access for testing, debugging, and measuring electrical signals. Test points are essential for troubleshooting circuits and verifying proper operation during development and manufacturing.

## Example

```tsx
export default () => (
    <testpoint
      name="TP1"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1mm"
    />
)
```

## Props

Commonly used: `footprintVariant`, `padShape`, `padDiameter`, `holeDiameter`, `width`, `height`, `connections`, `name`

## References

- Props: [TestpointProps](https://github.com/tscircuit/props#testpointprops-testpoint)
- Source: [lib/components/testpoint.ts](https://github.com/tscircuit/props/blob/main/lib/components/testpoint.ts)
- Local docs: [docs/docs/elements/testpoint.mdx](../docs/docs/elements/testpoint.mdx)
