# Footprints

Use a footprinter string for standard packages.

For JLCPCB parts, run `tsci import <C-number>`. It uses a string only when there is a close footprinter string match. Otherwise it keeps the exact EasyEDA footprint. `--use-exact-footprint` skips conversion.

To simplify explicit pads, run `tsci convert imports/MyChip.tsx --footprinter`
(one component, not a board). Use the printed string as `footprint="..."` after
checking pad geometry and pin mapping. The source is not rewritten. Optional
`--json` returns a match report containing the string and scores, not a footprint file.

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

## Inspect a footprint

To see which pin sits where before placing a part, run
`tsci inspect footprint` from the project directory.

```bash
tsci inspect footprint jst2_p2.5mm_xh
```

```text
jst2_p2.5mm_xh
source: footprinter string (@tscircuit/footprinter installed in this project)
parameters: fn=jst p=2.5 xh=true id=1 pw=1.7 pl=2 w=7.62 h=5.97 num_pins=2
pads: 2 plated holes
copper: 4.2 x 2 mm (x -2.1 to 2.1, y -1 to 1)
courtyard: 8.4 x 6.75 mm (x -4.2 to 4.2, y -3.9 to 2.85)

pin  kind         shape                        x      y  width  height  hole  layers
1    plated_hole  circular_hole_with_rect_pad  -1.25  0  1.7    2       1     top,bottom
2    plated_hole  pill                         1.25   0  1.7    2       1     top,bottom

Millimetres in the footprint's own frame (+x right, +y up), before pcbRotation.
```

- `x` and `y` are the pad centre. `width` and `height` are the copper extent.
  `hole` is the drill size.
- `parameters` shows how the string was parsed. Check it: a modifier that
  footprinter does not recognise is dropped without an error, so a missing
  thermal pad or a default pitch shows up here and in the pad count.
- The argument can also be a library footprint
  (`kicad:Resistor_SMD/R_0402_1005Metric`, `jlcpcb:C14877`) or a file: a
  `.kicad_mod`, a `.circuit.json`, or a TSX file that renders one component,
  such as `imports/MyChip.tsx`. For a component file the pin labels are listed
  next to the pin numbers (`1,VCC`).
- `--json` prints the same data as JSON.
- A string that does not parse exits with status 1.
- If the CLI reports `unknown command 'inspect'`, it predates this command; run
  `tsci upgrade`.

Use custom `<footprint>` TSX only for unsupported manufacturer geometry, such as asymmetric pads, slots, shield tabs, segmented thermal pads, or mixed SMT and through-hole layouts. Never guess.
