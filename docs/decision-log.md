# Decision Log

Created: 2026-07-10 12:59 JST

Last Updated: 2026-07-10 12:59 JST

Repository: web-postapocalypse-site

Project: 輪郭の後で / postapocalypse.site

## Purpose

This document records design and maintenance decisions for this repository. It is not a chat transcript.

## Decision 001: Convert postapocalypse.site repository into Repository Context

Status: Adopted

The repository will hold not only public site files, but also the context needed by humans and AI agents to maintain the site over time.

Implications:

- `README.md` becomes the entry point.
- `AGENTS.md` gives operational instructions to AI agents.
- `PROJECT.md` records project direction and current focus.
- `docs/decision-log.md`, `docs/changelog.md`, and `docs/progress.md` preserve decisions, changes, and working progress.

## Decision 002: Start renovation from reading accessibility and mobile readability

Status: Adopted

The first renovation step will focus on making reading pages more comfortable on smartphones. A user-controlled text size switcher will be introduced for article/main reading content.

Rationale:

- The site is primarily a reading experience.
- Mobile readability is a low-risk, high-value improvement.
- Text size control can be implemented through shared CSS/JS without rewriting content.

## Decision 003: Preserve existing content while improving structure and reading experience

Status: Adopted

Existing prose, record fragments, public URLs, and site identity should be preserved while the repository and reading experience are improved.

Implications:

- Do not delete content in the first renovation pass.
- Do not rename URLs without an explicit migration plan.
- Prefer shared styling and behavior over per-page patches.
- Keep changes small and reviewable.

## Open Questions

- Long-term editorial identity?
- Static HTML or generator/framework?
- Which pages renovated first after text-size controls?
- What design vocabulary should guide full-site renovation?
