#!/usr/bin/env bash
set -euo pipefail

if ! command -v tsci >/dev/null 2>&1; then
  echo "tsci not found. Install it first:" >&2
  echo "  npm install -g tscircuit" >&2
  echo "  # or" >&2
  echo "  bun install --global tscircuit" >&2
  exit 127
fi

TARGET="${1:-.}"

# Determine starting directory
if [[ -f "$TARGET" ]]; then
  TARGET_DIR="$(dirname "$TARGET")"
else
  TARGET_DIR="$TARGET"
fi

# Walk up to find a tscircuit project (has tscircuit.config.json or tscircuit in package.json)
PROJECT_ROOT="$TARGET_DIR"
FOUND_PROJECT=false
while [[ "$PROJECT_ROOT" != "/" ]]; do
  if [[ -f "$PROJECT_ROOT/tscircuit.config.json" ]]; then
    FOUND_PROJECT=true
    break
  fi
  if [[ -f "$PROJECT_ROOT/package.json" ]]; then
    if grep -q '"tscircuit"' "$PROJECT_ROOT/package.json" 2>/dev/null; then
      FOUND_PROJECT=true
      break
    fi
  fi
  PROJECT_ROOT="$(dirname "$PROJECT_ROOT")"
done

if [[ "$FOUND_PROJECT" != "true" ]]; then
  echo "Error: Not inside a tscircuit project." >&2
  echo "No tscircuit.config.json or tscircuit dependency found." >&2
  echo "Create a project with: tsci init" >&2
  exit 1
fi

echo "Running: tsci build ${TARGET}" >&2
tsci build "$TARGET"

echo "OK: tsci build" >&2
