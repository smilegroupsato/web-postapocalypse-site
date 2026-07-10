# Progress

Created: 2026-07-10 12:59 JST

Last Updated: 2026-07-10 12:59 JST

Repository: web-postapocalypse-site

Project: 輪郭の後で / postapocalypse.site

## Current Status

Repository Context conversion has started.

The first renovation pass is scoped to reading accessibility and mobile readability. The site remains static HTML, with shared CSS and JavaScript under `site/assets/`.

## Completed in This Pass

- Confirmed the target repository and deploy workflow.
- Confirmed public files live under `site/`.
- Confirmed all public HTML pages load the shared CSS and JavaScript.
- Identified `.prose` as the shared reading-content container for chapters and record fragments.
- Added initial Repository Context documents.
- Added reading text size controls through shared CSS/JS.

## Renovation Axes

- Mobile readability
- Reading typography and line-height
- Navigation clarity
- Template consistency
- Top page role
- Contents/archive usability
- CSS duplication reduction
- Shared asset maintenance
- Accessibility
- Static site maintainability

## Next Recommended Steps

- Review top page and contents page roles after the reading controls settle.
- Consider extracting repeated HTML structure into a generation workflow or documented template.
- Review Open Graph URLs and metadata consistency.
- Audit mobile navigation and contents list scanning.
- Decide whether a design vocabulary document is needed before deeper visual renovation.

## Open Questions

- Should the site remain hand-authored static HTML?
- What level of visual renovation is appropriate without changing the work's atmosphere?
- Should chapter and fragment pages eventually share a generated template?
