# Pre-export / pre-fab checklist

Connectivity
- All intended nets are connected; no floating power pins.
- `tsci check shorts` passes with no detected shorts; inspect and resolve any generated `checks/check-shorts/` debug artifacts.

Footprints and pinout
- Footprints match intended package size and orientation.
- Pin 1 orientation is correct for polarized parts.

PCB constraints
- Board outline, mounting holes, and keepouts are correct.
- Trace width/clearance meets target fab rules.

Schematic hygiene
- Key nets labeled; power/ground clear.
- Reference designators present and stable.

Assembly readiness
- Use `supplierPartNumbers` for critical parts / specific suppliers.
- Mark hand-soldered parts with `doNotPlace`.

Build/export
- `tsci build` succeeds without unexpected errors.
- Exported artifacts match your needs (SVG, netlist, DSN, 3D, KiCad library).
- Fabrication zip contains Gerbers, BOM CSV, Pick'n'Place CSV.
