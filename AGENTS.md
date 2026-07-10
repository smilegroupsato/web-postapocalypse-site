# AGENTS.md

Created: 2026-07-10 12:59 JST

Last Updated: 2026-07-10 12:59 JST

Repository: web-postapocalypse-site

Project: 輪郭の後で / postapocalypse.site

## Purpose

This file gives practical instructions for AI agents working in this repository.

## Before Editing

1. Read `README.md` first.
2. Check `PROJECT.md` and `docs/decision-log.md` before major changes.
3. Pull latest `main`.
4. Confirm `git status --short` is clean.
5. Confirm the remote points to `smilegroupsato/web-postapocalypse-site` or an equivalent postapocalypse.site repository.
6. Do not edit other repositories.
7. Do not use force push.

## Site Rules

- Preserve existing content.
- Do not delete published pages unless explicitly instructed.
- Do not rename URLs without an explicit migration plan.
- Prefer shared CSS and JavaScript over per-page duplication.
- Keep navigation, header, and footer stable unless the task directly targets them.
- Avoid blind redesign. Inspect the existing structure and visual language first.
- Use low-risk, reviewable changes for the first pass of any renovation.

## Repository Context Rules

- Update `docs/changelog.md` for visible site changes.
- Update `docs/decision-log.md` for direction, structure, document responsibility, or renovation strategy changes.
- Update `docs/progress.md` when starting or completing renovation steps.
- Keep `README.md` as the entry point, not as a long work log.
- Add Open Questions when uncertainty affects future work.

## Technical Notes

- Public files live under `site/`.
- Shared CSS: `site/assets/css/style.css`
- Shared JavaScript: `site/assets/js/main.js`
- Deploy workflow: `.github/workflows/deploy.yml`
- The deploy workflow currently publishes `./site/`.

## Repository Context Impact Check

At the end of each task, report whether the work affected Repository Context:

- README.md update: done / not needed / recommended
- AGENTS.md update: done / not needed / recommended
- PROJECT.md update: done / not needed / recommended
- docs/decision-log.md update: done / not needed / recommended
- docs/changelog.md update: done / not needed / recommended
- docs/progress.md update: done / not needed / recommended
- Open Question added: yes / no
- Force push used: no
