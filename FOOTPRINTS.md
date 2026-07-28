# Footprints

Use a footprinter string for standard packages.

For JLCPCB parts, run `tsci import <C-number>`. It uses a string only when there is a close footprinter string match. Otherwise it keeps the exact EasyEDA footprint. `--use-exact-footprint` skips conversion.

## Examples

```tsx
// Passives
<resistor footprint="0201" />
<resistor footprint="0402" />
<resistor footprint="0603" />
<resistor footprint="0805" />
<resistor footprint="1206" />
<capacitor footprint="cap0402" />
<resistor footprint="res0805" />
<resistor footprint="axial_p0.2in" />
<capacitor footprint="radial_p2.54mm" />
<capacitor footprint="electrolytic_d6.3mm_p2.5mm" />

// Diodes and transistors
<diode footprint="sod123" />
<diode footprint="sod323" />
<diode footprint="sma" />
<diode footprint="smb" />
<diode footprint="smf" />
<transistor footprint="sot23" />
<transistor footprint="sot223" />
<transistor footprint="sot323" />
<transistor footprint="sot363" />
<transistor footprint="sot563" />

// ICs
<chip footprint="dip8_w0.3in" />
<chip footprint="dip16" />
<chip footprint="soic8_p1.27mm" />
<chip footprint="soic16_p1.27mm" />
<chip footprint="ssop16_p0.65mm" />
<chip footprint="tssop20_p0.5mm" />
<chip footprint="msop10_p0.5mm" />
<chip footprint="vssop8_p0.5mm" />
<chip footprint="qfn16_w3_h3_p0.5mm_thermalpad" />
<chip footprint="qfn24_w6_h6_p0.8mm_thermalpad" />
<chip footprint="qfn32_w5_h5_p0.5mm_thermalpad" />
<chip footprint="tqfp32_w7_h7_p0.8mm" />
<chip footprint="lqfp48_w7_h7_p0.5mm" />
<chip footprint="bga64_grid8x8_p0.8mm_w8_h8" />

// Connectors and through-hole packages
<connector footprint="pinrow4_p2.54mm" />
<connector footprint="pinrow10_p2.54mm" />
<connector footprint="pinrow6_p2.54mm_rows2" />
<connector footprint="jst2_p2mm_ph" />
<connector footprint="jst4_p1mm_sh" />
<crystal footprint="hc49_p4.88mm" />
<crystal footprint="crystal4_px2.5mm_py2mm" />
<transistor footprint="to220" />
<transistor footprint="to220f" />
<transistor footprint="to92" />
<pushbutton footprint="smdpushbutton" />
```

Syntax: `<family>[pin-count]_<modifier><value>...`. Include units.

Use custom `<footprint>` TSX only for unsupported manufacturer geometry, such as asymmetric pads, slots, shield tabs, segmented thermal pads, or mixed SMT and through-hole layouts. Never guess.
