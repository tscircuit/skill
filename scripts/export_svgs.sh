#!/usr/bin/env bash
set -euo pipefail

if ! command -v tsci >/dev/null 2>&1; then
  echo "tsci not found. Install it first:" >&2
  echo "  npm install -g tscircuit" >&2
  echo "  # or" >&2
  echo "  bun install --global tscircuit" >&2
  exit 127
fi

FILE="${1:-index.circuit.tsx}"
BASE="${FILE%.*}"

OUT_SCHEM="${BASE}-schematic.svg"
OUT_PCB="${BASE}-pcb.svg"

tsci export "$FILE" -f schematic-svg -o "$OUT_SCHEM"
tsci export "$FILE" -f pcb-svg -o "$OUT_PCB"

echo "Wrote:" >&2
echo "  $OUT_SCHEM" >&2
echo "  $OUT_PCB" >&2
