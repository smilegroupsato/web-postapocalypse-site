# web-postapocalypse-site

静的Web公開サイト **輪郭の後で** / `postapocalypse.site` の公開用リポジトリです。

このリポジトリは、公開サイトのHTML/CSS/JavaScriptと、今後の保守・改修に必要なRepository Contextを管理します。

## Overview

- Site: 輪郭の後で
- Domain: https://postapocalypse.site/
- Repository: `smilegroupsato/web-postapocalypse-site`
- Publish directory: `site/`
- Current format: static HTML
- Current content: top page, contents page, chapters 1-23, record fragments 1-7

## Public Site

公開対象は `site/` 以下の管理ファイルです。

`main` ブランチへ反映された内容は、GitHub Actions の `Deploy static site` workflow により、FTP経由で公開サーバへアップロードされます。

FTPでの手動アップロードは標準経路ではありません。

## Current Workflow

標準運用は次の流れです。

```text
ChatGPT / Codex
-> GitHub repository
-> GitHub Actions
-> public site
```

作業前には最新 `main` を pull し、未コミット変更がないことを確認します。force push は使用しません。

## Local Preview

このサイトには現在、ビルド手順やパッケージ依存はありません。

`site/` を静的ファイルとして配信すれば確認できます。簡易確認では `site/index.html` をブラウザで開くこともできますが、相対パスや絶対パスを含む画像確認にはローカルサーバでの確認が望ましいです。

## Documents

- `README.md`: Repositoryの入口。
- `AGENTS.md`: AIエージェント向け作業指針。
- `PROJECT.md`: サイト改修の方向性、現在の焦点、未確定事項。
- `docs/decision-log.md`: 設計判断とOpen Questions。
- `docs/changelog.md`: サイトとRepository Contextの主要変更履歴。
- `docs/progress.md`: 作業進捗と次の作業候補。
- `docs/site-audit.md`: サイト構造と初期監査メモ。

## Maintenance Notes

- 公開ファイルは原則として `site/` 以下に置きます。
- 共通CSSは `site/assets/css/style.css` です。
- 共通JavaScriptは `site/assets/js/main.js` です。
- 見た目やUXに関わる変更は `docs/changelog.md` に記録します。
- 方向性、構造、文書責務、改修戦略に関わる判断は `docs/decision-log.md` に記録します。
- 大きな改修前には `PROJECT.md` と `docs/site-audit.md` を確認します。

## GitHub Secrets

Deploy workflow では以下のRepository Secretsを使用します。

| Secret | Purpose |
|---|---|
| `FTP_SERVER` | FTPサーバ名 |
| `FTP_USERNAME` | FTPアカウント名 |
| `FTP_PASSWORD` | FTPパスワード |
| `SERVER_DIR` | 公開サーバ側ディレクトリ |

秘密情報は、README・HTML・YAML・チャット本文に直接書かないでください。

## Open Questions

- 長期的な編集方針とサイトのデザイン語彙をどう定義するか。
- 将来的にも静的HTMLを維持するか、生成器やテンプレートを導入するか。
- 全体改修の優先順位を、本文体験、目次、トップページ、運用性のどこから進めるか。
