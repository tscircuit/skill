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
- `--kicad` – Search KiCad footprint library
- `--tscircuit` – Search tscircuit registry packages
- `--json` – Return machine-readable JSON output instead of plain text

Examples:
```bash
# Search JLCPCB for microcontrollers
tsci search --jlcpcb "ATmega328"
# Output: ATMEGA328P-AU (C14877) - stock: 20,226

# Search JLCPCB by part number
tsci search --jlcpcb "C14877"

# Search for USB-C connectors on JLCPCB
tsci search --jlcpcb "USB-C 16pin"

# Search KiCad footprints
tsci search --kicad "QFP-32"
# Output: kicad:Package_QFP/LQFP-32_5x5mm_P0.5mm

# Search KiCad for SMD resistor footprints
tsci search --kicad "0402"

# Search tscircuit registry for existing projects
tsci search --tscircuit "LED"
# Output: seveibar/usb-c-flashlight - Stars: 5

# Search without flags (searches all sources)
tsci search "ESP32"

# Search with JSON output (useful for scripts)
tsci search --jlcpcb "ATmega328" --json
# Example output:
# {
#   "results": [
#     {
#       "source": "jlcpcb",
#       "name": "ATMEGA328P-AU",
#       "part_number": "C14877",
#       "description": "Microcontroller Unit, 8-bit AVR",
#       "manufacturer": "Microchip Tech",
#       "stock": 20226,
#       "price": "0.735"
#     }
#   ]
# }
```

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

- `tsci build` (auto-detects entrypoint)
- `tsci build path/to/file.circuit.tsx`

Notes
- If no path is provided, `tsci build` searches for `index.circuit.tsx` or `mainEntrypoint` in `tscircuit.config.json`.
- `*.circuit.tsx` files are built automatically.
- Outputs go to `dist/`.

Useful flags
- `--all-images` (emit PCB/schematic/3D renders into `dist/`)

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
