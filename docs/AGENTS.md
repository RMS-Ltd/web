# Agent instructions — web

Public **RMS Ltd.** GitHub Pages site ([RMS-Ltd/web](https://github.com/RMS-Ltd/web)). Planning canon lives in private [RMS-Ltd/enterprise](https://github.com/RMS-Ltd/enterprise).

## Bootstrap (required)

1. Repo entry: [README.md](../README.md)
2. Docs index: [docs/README.md](./README.md)
3. **Branch & deploy:** [governance/branch-and-deploy-policy-v0.0.0.md](./governance/branch-and-deploy-policy-v0.0.0.md)
4. **SemVer:** [governance/versioning-policy-v0.0.0.md](./governance/versioning-policy-v0.0.0.md)
5. Current release: [planning/CURRENT_RELEASE.md](./planning/CURRENT_RELEASE.md) → [release-register](./planning/release-register-v0.0.0.md)

## Binding rules

| Rule | Detail |
|------|--------|
| **Work on `dev`** | All routine site edits and pushes go to `dev` — no Pages deploy per push |
| **Merge to `main` when stable** | Only after local preview (`python3 -m http.server 8080`) |
| **One deploy per release** | Push/tag on `main` after merge — not on every commit |
| **Copy-then-edit** | Versioned `docs/**/*-v0.0.x.md` — never bump policy/release files in place |
| **VERSION sync** | Root [VERSION](../VERSION) and `SITE_VERSION` in [assets/site.js](../assets/site.js) together |
| **No commit on `main` without ask** | Unless user explicitly requests merge/release or hotfix |

## Task routing

| Task | First loads |
|------|-------------|
| Edit HTML/CSS | `dev` branch; site files at repo root |
| Release / tag / deploy | branch-and-deploy policy + versioning policy + release register |
| Theme / footer / assets | `styles.css`, `assets/theme.js`, `assets/site.js` |
| CI / Pages | `.github/workflows/deploy-pages.yml` — **main only** |

## Do not

- Push every change to `main` “to deploy”
- Add `dev` to Pages workflow triggers
- Skip local preview before recommending merge to `main`
- Commit secrets or enable Pages on enterprise
