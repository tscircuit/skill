# Recommended workflow

## 1) Start from a known shape

- Prefer a standard template when possible (Arduino Shield, Raspberry Pi HAT, etc.)
- Otherwise use `<board width height>` with explicit dimensions.

## 2) Establish rails and connectors early

- Decide net names (`net.GND`, `net.VCC`, `net.V3_3`, etc.)
- Add power entry (USB-C, barrel jack, header) and protection (fuse/TVS) as appropriate.

## 3) Search before you model

- Use `tsci search` to find:
  - JLCPCB components: `tsci search --jlcpcb "STM32F4"`
  - KiCad footprints: `tsci search --kicad "SOIC8"`
  - Registry packages: `tsci search --tscircuit "ESP32"`

## 4) Add/import parts

- Prefer `tsci add <author/pkg>` when a reusable module exists.
- Use `tsci import` when you must bring in a specific component (e.g., supplier part).
- For JLCPCB parts: first search with `tsci search --jlcpcb "<query>"`, then import with `tsci import "<part number>"`.

## 5) Define pinLabels and pinAttributes first

**This is a critical step for chips and ICs.** Before wiring traces, ensure your components have correct `pinLabels` and `pinAttributes`.

### Getting pin information right

1. **Consult the datasheet** - Look up the component's datasheet to find the correct pin names and functions.

2. **Define pinLabels** - Map physical pin numbers to meaningful names:
   ```tsx
   pinLabels={{
     pin1: "VCC",
     pin2: "GND",
     pin3: ["SDA", "I2C_DATA"],
     pin4: ["SCL", "I2C_CLK"],
   }}
   ```

3. **Add pinAttributes** - Specify pin behavior for DRC and schematic clarity:
   ```tsx
   pinAttributes={{
     VCC: { requiresPower: true },
     EN: { mustBeConnected: true },
     VOUT: { providesPower: true },
   }}
   ```

4. **Verify pin mappings** - Double-check that:
   - Power pins are marked with `requiresPower` or `providesPower`
   - Critical control pins have `mustBeConnected: true`
   - Multi-function pins have all relevant aliases

## 6) Make a minimal, working first draft

- Place core IC + passives
- Wire nets using `<trace />`
- Reference pins by label when pinLabels are defined:
  ```tsx
  <trace from="U1.VCC" to="net.V3_3" />
  <trace from="U1.GND" to="net.GND" />
  ```

## 7) Iterate with `tsci build`

- Run `tsci check netlist` before `tsci check placement` and `tsci build` to catch connectivity issues early.
- Run `tsci build` to validate changes—this is the preferred iteration method for AI-driven development.
- DRC (Design Rule Check) errors can often be ignored during development; focus on connectivity and component placement first.
- Fix connectivity errors first, then placement.
- Run `tsci snapshot` to inspect placement before checking routing.
- Run `tsci check routing-difficulty` after placement to identify potential areas of congestion.
- Then address routing issues.
- Use `tsci dev` only when interactive visual preview is needed (not typical for AI iteration).

## 8) Stabilize and regression-test

- Use `tsci build` in CI or before sharing.
- Use `tsci snapshot` to generate visuals that help with placement analysis and quick circuit understanding.
- Use `tsci snapshot --pcb-only` when you want a fast, placement-focused PCB view without schematic snapshots.
- Use `tsci snapshot --test` in CI/regression checks to prevent overwriting snapshots and catch unexpected visual diffs.

## 9) Export what you need

- `tsci export` for SVG/netlist/DSN/3D/library
- Fabrication zip (Gerbers/BOM/PnP): use the export UI after `tsci dev`
