# web-postapocalypse-site

静的Web公開サイト **輪郭の後で** / `postapocalypse.site` の公開用リポジトリです。

## サイト

- サイト名：輪郭の後で
- ドメイン：postapocalypse.site
- 公開方式：静的HTML
- 公開サーバ：ロリポップ等
- デプロイ方式：GitHub Actions から FTPS で自動アップロード

## 現在の公開内容

- 第一章〜第二十三章
- 記録断片一〜七
- トップページ
- 目次ページ

## 運用方針

- Notion は内部ノート・研究原本・素材整理の場所として扱う。
- GitHub はWeb公開用ファイルの正本・履歴管理・自動公開の起点として扱う。
- 公開ファイルは `site/` 以下に置く。
- `main` ブランチへ反映された内容を、GitHub Actions 経由で公開サーバへアップロードする。
- FTPでの手動アップロードは原則行わない。

## ディレクトリ構成

```text
/
  README.md
  site/
    index.html
    contents/
    chapters/
    fragments/
    assets/
    robots.txt
    sitemap.xml
  .github/
    workflows/
      deploy.yml
```

## GitHub Secrets

以下のRepository Secretsを設定してください。

| Secret名 | 内容 |
|---|---|
| `FTP_SERVER` | ロリポップ等のFTPS / FTPサーバ名 |
| `FTP_USERNAME` | FTP / WebDAVアカウント名 |
| `FTP_PASSWORD` | FTP / WebDAVパスワード |
| `SERVER_DIR` | 独自ドメインの公開フォルダ |

秘密情報は、README・HTML・YAML・チャット本文に直接書かないでください。

## 初回デプロイ

初回は `.github/workflows/deploy.yml` に `dry-run: true` を入れています。

1. GitHub Secrets を設定する。
2. GitHub Actions の `Deploy static site` を手動実行する。
3. ログで転送先と差分を確認する。
4. 問題なければ `dry-run: true` を削除して commit する。
5. 再度実行し、本番反映する。

## 更新ルール

ページ追加・修正時は、`site/` 以下のファイルを更新し、内容が分かるcommitメッセージで保存します。

例：

- `Add record fragment pages`
- `Update table of contents layout`
- `Revise hero image`
- `Configure Lolipop deploy workflow`
