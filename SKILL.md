---
name: tscircuit
description: Build, modify, and debug tscircuit (React/TypeScript) PCB designs. Use when working with tsci CLI (init/dev/search/add/import/build/export/snapshot/push), choosing footprints, placing parts, wiring nets/traces, or preparing fabrication outputs (Gerbers/BOM/PnP).
allowed-tools: Read, Write, Grep, Glob, Bash
---

# tscircuit

You are helping the user design electronics using tscircuit (React/TypeScript) and the `tsci` CLI.

When this Skill is active:

- Prefer tscircuit’s documented primitives and CLI behavior. If something is unclear, confirm by:
  - Reading local files in the repo (e.g., `tscircuit.config.json`, `index.circuit.tsx`, `package.json`)
  - Running `tsci --help` or the specific subcommand’s `--help`
- Avoid “inventing” JSX props or CLI flags.

## Default workflow

1) Clarify requirements (if not already given)
- Board form factor / size constraints
- Power sources and voltage rails
- I/O: connectors, headers, mounting holes, mechanical constraints
- Target manufacturer constraints (trace/space, assembly, supplier)

2) Choose a starting point
- If the repo is not a tscircuit project, recommend:
  - Install CLI, then `tsci init` to bootstrap a project.
- If a form-factor template is appropriate (Arduino Shield, Raspberry Pi HAT, etc.), prefer `@tscircuit/common` templates.

3) Find and install components
- Use `tsci search "<query>"` to discover footprints and tscircuit registry packages.
- Use one of:
  - `tsci add <author/pkg>` for registry packages (installs `@tsci/*` packages)
  - `tsci import <query>` when you need to import a component from JLCPCB or the registry.

4) Write/modify TSX circuit code
- Keep circuits as a default-exported function that returns JSX.
- Use layout props intentionally:
  - PCB: `pcbX`, `pcbY`, `pcbRotation`, `layer`
  - Schematic: `schX`, `schY`, `schRotation`, `schOrientation`
- Use `<trace />` for connectivity; prefer net connections (`net.GND`, `net.VCC`, etc.) for power/ground.

5) Build and iterate
- Run `tsci check netlist` before `tsci check schematic-placement`, `tsci check placement`, and `tsci build` to catch connectivity issues early.
- Use `tsci check schematic-placement` to validate schematic-side placement before checking PCB placement.
- Do not finalize unless both `tsci check schematic-placement` and `tsci check placement` pass with no actionable placement violations; if violations exist, fix layout and rerun until clean.
- Use `tsci check trace-length` to check for long straight line distances (before routing) or long routes (after routing)
- Run `tsci build --pcb-png [file]` to inspect placement before checking routing.
- Run `tsci check routing-difficulty` after placement to identify potential areas of congestion.
- Run `tsci build` to compile and validate the circuit.
- DRC (Design Rule Check) errors can often be ignored during development—focus on getting the circuit correct first.
- If routing struggles, reduce density, use `<group />` for sub-layouts, or change autorouter settings.
- Use `tsci dev` only when you need interactive visual feedback (not typical for AI-driven iteration).

6) Validate and export
- Run `tsci check netlist` before `tsci check schematic-placement`, `tsci check placement`, and `tsci build` when preparing to share/publish.
- Run `tsci build` (and optionally `tsci snapshot`) before sharing/publishing.
- Use `tsci export` for SVG/netlist/DSN/3D/library outputs.
- For manufacturing, obtain fabrication outputs (Gerbers/BOM/PnP) from the export UI after `tsci dev`.

## Safety and non-goals

- Treat electrical safety, regulatory compliance, and manufacturability as user-owned responsibilities.
- Do not publish (`tsci push`) or place orders unless the user explicitly requests it.

## Local references bundled with this Skill

- CLI primer: `CLI.md`
- Syntax primer: `SYNTAX.md`
- Workflow patterns: `WORKFLOW.md`
- Pre-export checklist: `CHECKLIST.md`
- Ready-to-copy templates: `templates/`
- Helper scripts: `scripts/`

## Builtin Elements

- [`<analogsimulation />`](./elements/analogsimulation.md)
- [`<battery />`](./elements/battery.md)
- [`<board />`](./elements/board.md)
- [`<cadassembly />`](./elements/cadassembly.md)
- [`<cadmodel />`](./elements/cadmodel.md)
- [`<capacitor />`](./elements/capacitor.md)
- [`<chip />`](./elements/chip.md)
- [`<connector />`](./elements/connector.md)
- [`<constraint />`](./elements/constraint.md)
- [`<copperpour />`](./elements/copperpour.md)
- [`<coppertext />`](./elements/coppertext.md)
- [`<courtyardcircle />`](./elements/courtyardcircle.md)
- [`<courtyardoutline />`](./elements/courtyardoutline.md)
- [`<courtyardpill />`](./elements/courtyardpill.md)
- [`<courtyardrect />`](./elements/courtyardrect.md)
- [`<crystal />`](./elements/crystal.md)
- [`<currentsource />`](./elements/currentsource.md)
- [`<cutout />`](./elements/cutout.md)
- [`<diode />`](./elements/diode.md)
- [`<fabricationnotedimension />`](./elements/fabricationnotedimension.md)
- [`<fabricationnotepath />`](./elements/fabricationnotepath.md)
- [`<fabricationnoterect />`](./elements/fabricationnoterect.md)
- [`<fabricationnotetext />`](./elements/fabricationnotetext.md)
- [`<fiducial />`](./elements/fiducial.md)
- [`<footprint />`](./elements/footprint.md)
- [`<fuse />`](./elements/fuse.md)
- [`<group />`](./elements/group.md)
- [`<hole />`](./elements/hole.md)
- [`<inductor />`](./elements/inductor.md)
- [`<jumper />`](./elements/jumper.md)
- [`<led />`](./elements/led.md)
- [`<mosfet />`](./elements/mosfet.md)
- [`<mountedboard />`](./elements/mountedboard.md)
- [`<net />`](./elements/net.md)
- [`<netalias />`](./elements/netalias.md)
- [`<netlabel />`](./elements/netlabel.md)
- [`<opamp />`](./elements/opamp.md)
- [`<panel />`](./elements/panel.md)
- [`<pcbkeepout />`](./elements/pcbkeepout.md)
- [`<pcbnotedimension />`](./elements/pcbnotedimension.md)
- [`<pcbnoteline />`](./elements/pcbnoteline.md)
- [`<pcbnotepath />`](./elements/pcbnotepath.md)
- [`<pcbnoterect />`](./elements/pcbnoterect.md)
- [`<pcbnotetext />`](./elements/pcbnotetext.md)
- [`<pcbtrace />`](./elements/pcbtrace.md)
- [`<pinheader />`](./elements/pinheader.md)
- [`<pinout />`](./elements/pinout.md)
- [`<platedhole />`](./elements/platedhole.md)
- [`<port />`](./elements/port.md)
- [`<potentiometer />`](./elements/potentiometer.md)
- [`<pushbutton />`](./elements/pushbutton.md)
- [`<resistor />`](./elements/resistor.md)
- [`<resonator />`](./elements/resonator.md)
- [`<schematicarc />`](./elements/schematicarc.md)
- [`<schematicbox />`](./elements/schematicbox.md)
- [`<schematiccell />`](./elements/schematiccell.md)
- [`<schematiccircle />`](./elements/schematiccircle.md)
- [`<schematicline />`](./elements/schematicline.md)
- [`<schematicpath />`](./elements/schematicpath.md)
- [`<schematicrect />`](./elements/schematicrect.md)
- [`<schematicrow />`](./elements/schematicrow.md)
- [`<schematictable />`](./elements/schematictable.md)
- [`<schematictext />`](./elements/schematictext.md)
- [`<silkscreencircle />`](./elements/silkscreencircle.md)
- [`<silkscreenline />`](./elements/silkscreenline.md)
- [`<silkscreenpath />`](./elements/silkscreenpath.md)
- [`<silkscreenrect />`](./elements/silkscreenrect.md)
- [`<silkscreentext />`](./elements/silkscreentext.md)
- [`<smtpad />`](./elements/smtpad.md)
- [`<solderjumper />`](./elements/solderjumper.md)
- [`<subcircuit />`](./elements/subcircuit.md)
- [`<subpanel />`](./elements/subpanel.md)
- [`<switch />`](./elements/switch.md)
- [`<symbol />`](./elements/symbol.md)
- [`<testpoint />`](./elements/testpoint.md)
- [`<trace />`](./elements/trace.md)
- [`<tracehint />`](./elements/tracehint.md)
- [`<transistor />`](./elements/transistor.md)
- [`<via />`](./elements/via.md)
- [`<voltageprobe />`](./elements/voltageprobe.md)
- [`<voltagesource />`](./elements/voltagesource.md)
