# web

Public cooperative landing page for **RMS Ltd.** — GitHub Pages.

**Live:** https://rms-ltd.github.io/web/  
**Current version:** `0.0.18` ([VERSION](./VERSION)) — see [docs/planning/CURRENT_RELEASE.md](docs/planning/CURRENT_RELEASE.md)

**Source of truth:** this repo ([RMS-Ltd/web](https://github.com/RMS-Ltd/web)). Planning canon stays in private [RMS-Ltd/enterprise](https://github.com/RMS-Ltd/enterprise); the public site is edited here only.

---

## Branches

| Branch | Role |
|--------|------|
| **`dev`** | Day-to-day edits; push as often as you like — **no** GitHub Pages deploy |
| **`main`** | Production; merge from `dev` after local testing; push (or merge) **triggers** Pages deploy |

**Policy:** [docs/governance/branch-and-deploy-policy-v0.0.0.md](docs/governance/branch-and-deploy-policy-v0.0.0.md) · **Agents:** [docs/AGENTS.md](docs/AGENTS.md)

```bash
git checkout dev
# edit, preview locally, commit, push origin dev
git checkout main
git merge dev
# bump VERSION, release notes, tag v0.0.x
git push origin main
git push origin v0.0.x
```

**Default branch on GitHub:** `dev` (clones and PRs start here; merge to `main` to release).

---

## SemVer workflow

1. Work on **`dev`**. Edit site files; bump root `VERSION` and `SITE_VERSION` in `assets/site.js` together when preparing a release.
2. Copy-then-edit next `docs/releases/release-notes-v0.0.x.md`; update [release-register](docs/planning/release-register-v0.0.0.md).
3. Merge to **`main`** when locally stable; tag `v0.0.x`; push `main` and tags (deploy runs once).

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

Push to **`main`** only runs [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). Pushes to **`dev`** do not.
