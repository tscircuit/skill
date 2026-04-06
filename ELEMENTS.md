# tscircuit Elements

This is a reference table of common tscircuit elements used in React/TSX designs.

| Element | Description | Common Props |
|---------|-------------|--------------|
| `<board />` | Root container for the circuit | `width`, `height`, `layers` |
| `<chip />` | Generic integrated circuit or component | `name`, `footprint`, `pinLabels` |
| `<resistor />` | Passive resistor | `name`, `resistance`, `footprint` |
| `<capacitor />`| Passive capacitor | `name`, `capacitance`, `footprint` |
| `<inductor />` | Passive inductor | `name`, `inductance`, `footprint` |
| `<led />` | Light-emitting diode | `name`, `color`, `footprint` |
| `<diode />` | Rectifying diode | `name`, `footprint` |
| `<battery />` | Power source | `name`, `voltage`, `footprint` |
| `<crystal />` | Crystal oscillator | `name`, `frequency`, `footprint` |
| `<trace />` | Electrical connection between points | `from`, `to`, `width` |
| `<via />` | Through-hole connection between layers| `pcbX`, `pcbY`, `fromLayer`, `toLayer`|
| `<netlabel />` | Named net identifier in schematic | `name`, `schX`, `schY` |
| `<group />` | Logical grouping for layout/positioning| `pcbX`, `pcbY`, `schX`, `schY` |
| `<subcircuit />`| Modular sub-layout | `name`, `pcbX`, `pcbY` |
| `<copperpour />`| Ground or power plane | `connectsTo`, `layer`, `clearance` |
| `<connector />`| Physical connector (USB, Header, etc.)| `name`, `footprint` |

For a full list of props and advanced usage, refer to the [official documentation](https://docs.tscircuit.com).
