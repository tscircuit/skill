# tsci CLI primer

Prereqs
- Node.js or Bun
- Install the tscircuit CLI (global install):
  - npm: `npm install -g tscircuit`
  - bun: `bun install --global tscircuit`

Core commands

1) Create / bootstrap a project
- `tsci init` (interactive)
- `tsci init -y` (accept defaults)

Typical output includes:
- `index.circuit.tsx` (main circuit entrypoint)
- `package.json`, `tsconfig.json`
- `tscircuit.config.json`

2) Preview locally (interactive)
- `tsci dev`
- Opens a local preview server (commonly https://localhost:3020)
- Note: For AI-driven iteration, prefer `tsci build` over `tsci dev`—dev mode is primarily for interactive visual feedback.

3) Search the ecosystem
- `tsci search "<query>"`
  - Finds footprints, components, and packages across multiple sources

Search flags:
- `--jlcpcb` (or `--lcsc`) – Search JLCPCB/LCSC components by name or part number
- `--digikey` – Search DigiKey components and cached stock
- `--mouser` – Search Mouser components and cached stock
- `--kicad` – Search KiCad footprint library
- `--tscircuit` – Search tscircuit registry packages
- `--json` – Return machine-readable JSON output instead of plain text

JLCPCB is searched when no source flag is supplied. Source flags can be
combined to search more than one provider in a single command.

Examples:
```bash
# Search JLCPCB for microcontrollers
tsci search --jlcpcb "ATmega328"
# Output: ATMEGA328P-AU (C14877) - stock: 20,226

# Search JLCPCB by part number
tsci search --jlcpcb "C14877"

# Search JLCPCB for Micro-USB connectors
tsci search --jlcpcb "micro usb connector"

# Search DigiKey inventory
tsci search --digikey "10k 0603 resistor"
# Output: RC0603FR-0710KL (311-10.0KHRCT-ND) - ... (stock: ...)

# Search Mouser inventory
tsci search --mouser "10k 0603 resistor"
# Output: RC0603FR-0710KL (603-RC0603FR-0710KL) - ... (stock: ...)

# Compare both distributor sources
tsci search --digikey --mouser "STM32F4 microcontroller"

# Search KiCad footprints
tsci search --kicad "QFP-32"
# Output: kicad:Package_QFP/LQFP-32_5x5mm_P0.5mm

# Search KiCad for SMD resistor footprints
tsci search --kicad "0402"

# Search tscircuit registry for existing projects
tsci search --tscircuit "LED"
# Output: seveibar/usb-c-flashlight - Stars: 5

# Search without flags (searches JLCPCB)
tsci search "ESP32"

# Search both distributors with JSON output (useful for scripts)
tsci search --digikey --mouser "10k 0603 resistor" --json
# Example output:
# {
#   "query": "10k 0603 resistor",
#   "results": [
#     {
#       "source": "digikey",
#       "digikey_product_number": "311-10.0KHRCT-ND",
#       "mfr": "RC0603FR-0710KL",
#       "manufacturer": "YAGEO",
#       "package": "0603",
#       "description": "...",
#       "stock": 100000
#     },
#     {
#       "source": "mouser",
#       "mouser_product_number": "603-RC0603FR-0710KL",
#       "mfr": "RC0603FR-0710KL",
#       "manufacturer": "YAGEO",
#       "package": "0603",
#       "description": "...",
#       "stock": 100000
#     }
#   ]
# }
```

DigiKey and Mouser results are loaded through tscircuit's cached search
services. Their `stock` and `price` fields are snapshots and can change. These
flags discover orderable parts; `tsci import` currently imports only from
JLCPCB or the tscircuit registry.

4) Add existing registry packages to your project
- `tsci add <author/pkg>`
  - Use when a reusable tscircuit package already exists in the registry
  - Example: `tsci add seveibar/PICO_W`
  - Imports look like: `import { PICO_W } from "@tsci/seveibar.PICO_W"`
  - The `@tsci/` scope with dot notation (`author.pkg`) is the registry convention

5) Import components (e.g., from JLCPCB)
- `tsci import <query>`
  - Use when you need to bring a specific part into your project
  - Searches both the tscircuit registry and JLCPCB parts database
  - Opens an interactive picker to select and import the component
  - For USB-C connectors, prefer `<connector standard="usb_c" />` directly instead of importing from JLCPCB

Workflow:
```bash
# First, search to find the part number
tsci search --jlcpcb "ATmega328"
# Output: ATMEGA328P-AU (C14877) - stock: 20,226

# Then import using the part number or name
tsci import "C14877"
# or
tsci import "ATmega328"
```

The interactive picker shows:
- Registry packages (already wrapped by other users): `author/PART_NAME`
- JLCPCB parts (raw import): `[jlcpcb] PART_NAME (CXXXXXX)`

Tip: If someone has already imported the part, prefer the registry version—it may have better pin mappings or schematic symbols.

6) Build (generate circuit.json)

Before placement checks or builds, run a netlist check first:
- `tsci check netlist [file]`

Then check schematic placement:
- `tsci check schematic-placement [file]`

Then generate a placement snapshot before routing checks:
- `tsci snapshot`

Then check placement of the entire board or a specific component:
- `tsci check placement [file] [refdes]`

After placement, identify potential congestion before routing:
- `tsci check routing-difficulty [file]`

After routing, check for unintended copper shorts:
- `tsci check shorts [file]`
- With no `[file]`, the CLI resolves the project entrypoint. It also accepts a prebuilt `*.circuit.json` file.
- The default is `--mode gerber --layer all`. Use `--mode pcb`, `--layer top`, `--layer bottom`, or `--pixels-per-mm <number>` when needed.
- A detected short exits with status 1 and writes debug artifacts to `checks/check-shorts/bitmap.png` and `checks/check-shorts/pcb.svg`. Inspect them, fix the copper bridge or overlap, and rerun until the command reports no shorts.

- `tsci build` (auto-detects entrypoint)
- `tsci build path/to/file.circuit.tsx`

Notes
- If no path is provided, `tsci build` searches for `index.circuit.tsx` or `mainEntrypoint` in `tscircuit.config.json`.
- `*.circuit.tsx` files are built automatically.
- Outputs go to `dist/`.

Useful flags
- `--all-images` (emit PCB/schematic/3D renders into `dist/`)

Autorouter stage debugging
- `tsci build [file] --autorouter-debug` logs each autorouting stage and writes
  cumulative images to `dist/autorouter-debug/`.
- `placement-unrouted.png` shows the PCB before routing starts.
- `phase-N-routed.png` shows cumulative routing after zero-indexed stage `N`.
  Fanout and its downstream router are separate stages.
- Use `--autorouter-debug-dir <path>` to choose another artifact directory.
- Add `--autorouter-dump-srj all` for every stage's
  `phase-N.input.simple-route.json` and `phase-N.output.traces.json`.
- Use `--autorouter-dump-srj failed` for only failed-stage data, or
  `--autorouter-dump-srj phase:N` for one stage.

DRC (Design Rule Check)
- DRC errors are often reported but can frequently be ignored during development.
- Focus on getting the circuit correct first; DRC violations can be addressed later when preparing for manufacturing.

7) Export (SVG/netlist/3D/library)
- `tsci export <file> -f <format>`

Common formats
- `schematic-svg`
- `pcb-svg`
- `readable-netlist`
- `specctra-dsn`
- `gltf` / `glb`
- `kicad-library`

8) Visual snapshots for analysis and verification
- `tsci snapshot` generates visual outputs (schematic/PCB, optionally 3D) and writes/overwrites snapshots by default.
- Use these visuals to inspect placement, orientation, and overall circuit understanding during iteration.
- `tsci snapshot --test` switches to regression-test mode: it fails on visual diffs and does **not** overwrite snapshots.
- `tsci snapshot --pcb-only` generates only PCB visuals, which is especially useful for placement-focused iteration.
- `tsci snapshot --3d` includes 3D snapshots in the output.

Recommended pattern:
```bash
# During development: generate fresh visuals for analysis and review
tsci snapshot

# During placement-heavy iterations: focus only on PCB output
tsci snapshot --pcb-only

# In CI/regression checks: detect unexpected visual changes without overwriting
tsci snapshot --test
```

9) Auth / publish
- `tsci login` (browser-based)
- `tsci push` (publish package)
- `tsci auth print-token`

Guidance
- Prefer `tsci --help` and `tsci <cmd> --help` when unsure about flags.
- Avoid `tsci push` unless the user explicitly asks to publish.
