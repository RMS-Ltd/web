# web

Public cooperative landing page for **RMS Ltd.** — GitHub Pages.

**Live:** https://rms-ltd.github.io/web/  
**Current version:** `0.0.15` ([VERSION](./VERSION)) — see [docs/planning/CURRENT_RELEASE.md](docs/planning/CURRENT_RELEASE.md)

**Source of truth:** this repo ([RMS-Ltd/web](https://github.com/RMS-Ltd/web)). Planning canon stays in private [RMS-Ltd/enterprise](https://github.com/RMS-Ltd/enterprise); the public site is edited here only.

---

## SemVer workflow

1. Edit site files in this repo (`index.html`, `ethos.html`, `projects.html`, `people.html`, `styles.css`, `assets/`). Bump root `VERSION` and `SITE_VERSION` in `assets/site.js` together.
2. Copy-then-edit next `docs/releases/release-notes-v0.0.x.md`; update [VERSION](./VERSION) and [release-register](docs/planning/release-register-v0.0.0.md).
3. Commit on `main`; tag `v0.0.x`; push branch and tags.

| Increment | When |
|-----------|------|
| **PATCH** | Copy, links, styles, small HTML |
| **MINOR** | New sections, layout restructure |
| **MAJOR** | Public launch / rebrand (`1.0.0`) |

---

## Enable Pages (once)

**Settings → Pages → Source:** GitHub Actions

---

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

---

## Deploy

Push to `main` runs [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).
