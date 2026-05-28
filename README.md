# web

Public cooperative landing page for **RMS Ltd.** — GitHub Pages.

**Live:** https://rms-ltd.github.io/web/  
**Current version:** `0.0.2` ([VERSION](./VERSION)) — see [docs/planning/CURRENT_RELEASE.md](docs/planning/CURRENT_RELEASE.md)

**Source of truth (private):** [RMS-Ltd/enterprise](https://github.com/RMS-Ltd/enterprise) → `site/` — sync HTML/CSS here, then bump VERSION and release notes per [docs/governance/versioning-policy-v0.0.0.md](docs/governance/versioning-policy-v0.0.0.md).

---

## SemVer workflow

1. Edit landing in **enterprise** `site/` (or here if urgent).
2. Sync to **web** root (`index.html`, `styles.css`, `assets/`).
3. Copy-then-edit next `docs/releases/release-notes-v0.0.x.md`; update [VERSION](./VERSION) and [release-register](docs/planning/release-register-v0.0.0.md).
4. Commit on `main`; tag `v0.0.x`; push branch and tags.

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
