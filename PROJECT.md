# PROJECT.md

Created: 2026-07-10 12:59 JST

Last Updated: 2026-07-10 12:59 JST

Repository: web-postapocalypse-site

Project: 輪郭の後で / postapocalypse.site

Status: Active

## Project Summary

`postapocalypse.site` は、静的HTMLで公開されている読み物サイトです。

現在の公開内容は、トップページ、目次、第一章から第二十三章、記録断片一から七で構成されています。サイト全体は、廃れた大型店舗跡を中心にした記録的・断片的な読書体験として設計されています。

## Current Focus

現在の焦点は、Repository Contextへの移行を開始しつつ、スマートフォンでの読書体験を改善することです。

最初の改修対象は、本文の読みやすさです。特にスマートフォンで文字が小さく感じられる問題に対して、ユーザーが本文サイズを自分で調整できる仕組みを追加します。

## Renovation Direction

全体改修は、既存本文とURLを守りながら段階的に進めます。

初期の改修軸:

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

## Known

- 公開対象は `site/` です。
- 現在は静的HTMLサイトです。
- 章ページと記録断片ページは `.prose` を本文コンテナとして共有しています。
- 共通CSSは `site/assets/css/style.css` です。
- 共通JavaScriptは `site/assets/js/main.js` です。
- GitHub Actions は `.github/workflows/deploy.yml` で `./site/` をアップロードします。

## Unknown

- 長期的な編集方針とデザイン語彙の最終形。
- 静的HTMLを維持するか、将来的に生成器やテンプレートを導入するか。
- トップページ、目次、本文ページのどこを次の主要改修対象にするか。
- 本文の章・断片以外に、今後どの種類の公開ページが増えるか。

## Immediate Next Actions

1. Repository Context文書を初期整備する。
2. 本文ページに文字サイズ切替を追加する。
3. モバイルで本文の標準サイズを見直す。
4. 章ページと記録断片ページの両方で動作確認する。
5. 次回以降の改修候補を `docs/progress.md` と `docs/site-audit.md` に残す。

## Open Questions

- Long-term editorial identity?
- Static HTML or generator/framework?
- Which pages renovated first after text-size controls?
- What design vocabulary should guide full-site renovation?
