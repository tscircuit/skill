# `<battery />`

A `<battery />` is a power source that provides electrical energy through electrochemical reactions. Batteries are essential components that supply power to electronic circuits and devices. They have a positive and negative terminal and must be connected with correct polarity.

## Example

```tsx
export default () => (
  <battery
    name="BAT1"
    capacity="2500mAh"
  />
)
```

## Props

Commonly used: `capacity`, `voltage`, `standard`, `schOrientation`, `name`, `footprint`, `connections`

## References

- Props: [BatteryProps](https://github.com/tscircuit/props#batteryprops-battery)
- Source: [lib/components/battery.ts](https://github.com/tscircuit/props/blob/main/lib/components/battery.ts)
- Local docs: [docs/docs/elements/battery.mdx](../docs/docs/elements/battery.mdx)
