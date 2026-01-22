# tscircuit Claude Skill

This folder is intended to be used as a Claude Code Skill.

Install as:

- Personal Skill (for you):
  - `~/.claude/skills/tscircuit/`

- Project Skill (shared in repo):
  - `.claude/skills/tscircuit/`

The canonical entrypoint is `SKILL.md`.

## Contents

- `SKILL.md` – Main skill definition (frontmatter + instructions)
- `CLI.md` – tsci CLI command reference
- `SYNTAX.md` – tscircuit JSX syntax primer
- `WORKFLOW.md` – Recommended development workflow
- `CHECKLIST.md` – Pre-export/pre-fab checklist
- `templates/` – Reference TSX examples (copy into your project)
- `scripts/` – Helper shell scripts

## Templates

The files in `templates/` are **reference examples**—they are not standalone runnable projects. To use them:

1. Create a tscircuit project: `tsci init`
2. Copy the desired template into your project
3. Install any additional dependencies (e.g., `npm install @tscircuit/common` for Arduino/RPi templates)
4. Run `tsci build` or `tsci dev`

## License

See `LICENSE` for terms.
