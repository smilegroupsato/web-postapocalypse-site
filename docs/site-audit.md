# Site Audit

Created: 2026-07-10 12:59 JST

Last Updated: 2026-07-10 12:59 JST

Repository: web-postapocalypse-site

Project: 輪郭の後で / postapocalypse.site

## Scope

Initial inspection before the first renovation pass.

## Structure

```text
/
  README.md
  repo-manifest.json
  .github/workflows/deploy.yml
  site/
    index.html
    contents/index.html
    chapters/01.html ... chapters/23.html
    fragments/01.html ... fragments/07.html
    assets/css/style.css
    assets/js/main.js
    assets/img/
    robots.txt
    sitemap.xml
```

## Site Type

The site is a static HTML reading site. There is no package manager file or build command in the repository at the time of this audit.

## Deploy

GitHub Actions workflow `.github/workflows/deploy.yml` publishes `./site/` by FTP.

## Shared Assets

- Global stylesheet: `site/assets/css/style.css`
- Global script: `site/assets/js/main.js`
- Images: `site/assets/img/`

## Page Types

- Top page: `site/index.html`
- Contents page: `site/contents/index.html`
- Chapter pages: `site/chapters/*.html`
- Record fragment pages: `site/fragments/*.html`

## Reading Containers

Chapter and record fragment pages use `.prose` as the primary reading container.

This makes `.prose` the safest first target for text-size controls and reading typography changes.

## Initial Risks

- Repeated HTML structure may make large site-wide changes easy to miss.
- Some metadata appears duplicated and should be reviewed later.
- Mobile reading size was 16px in the existing CSS, which may feel small for long-form reading.
- The project currently has no automated HTML validation or link-check command.

## Safe Edit Points

- Shared reading styles in `site/assets/css/style.css`.
- Shared page behavior in `site/assets/js/main.js`.
- Repository Context documents under the repository root and `docs/`.
