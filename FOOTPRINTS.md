# Footprints

Use a footprinter string for standard packages.

For JLCPCB parts, run `tsci import <C-number>`. It uses a string only when there is a close footprinter string match. Otherwise it keeps the exact EasyEDA footprint. `--use-exact-footprint` skips conversion.

## Discover a string from an existing footprint

Before manually reducing a verbose imported footprint, ask the CLI to discover a matching string:

```bash
tsci convert imports/MyChip.tsx --footprinter
tsci convert imports/MyChip.tsx --footprinter --json -o footprint.json
```

Use a component that renders only the chip or footprint, not the entire board.
Discovery also accepts KiCad `.kicad_mod` files and footprint `.circuit.json`
arrays. It reports candidates without rewriting the source. In the JSON report,
inspect `best.footprinterString`, `copperIntersectionOverUnion`,
`holeIntersectionOverUnion`, `geometryScore`, `pinMatchRate`, `pinsMatch`, and
`pinMismatches`. A near-perfect copper overlap can still have an incorrect pin map.

Before replacing `footprint={<footprint>...</footprint>}` with the chosen string:

1. Preserve the original footprint as a baseline. Render the replacement independently; saved board/module geometry must not hide whether the new string was actually used.
2. Compare every pad's center, dimensions, shape, corner radius, rotation, layer, and drill geometry in the same coordinate system. Check pin-1 orientation and exposed-pad geometry against the package drawing.
3. Check each pad's port hints and resolved chip pin, including the exposed pad and its ground connection. Resolve all `pinMismatches`; never infer electrical equivalence from geometry scores alone.
4. Preserve pin labels, pin attributes, schematic configuration, and other chip props when changing `footprint`. Rebuild and inspect the PCB snapshot. Keep explicit pads if the string cannot preserve the required geometry or mapping.

For example, F1C100S discovery produced:

```text
mlp88_thermalpad6.75mmx6.75mm_p0.4mm_h11mm_pw0.2mm_pl0.8mm_pin1location(bottomside,left)
```

Despite approximately 0.999 copper overlap, `pinsMatch` was `false` because the
original exposed pad was hinted as `thermalpad` while the candidate used `pin89`.
For this chip, add the alias to its existing ground pin labels:

```tsx
pin89: ["GND", "thermalpad"]
```

Appending `_rounded0` preserved its original rectangular pad corners. Verify the
resulting 89 pads and their electrical mapping before adopting it. Exposed-pad
numbering and corner geometry are specific to each package; do not copy this
mapping to other chips without checking their footprint and datasheet.

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
