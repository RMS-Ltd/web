---
name: web-dev-branch-workflow
description: >-
  RMS-Ltd/web Git workflow — work on dev branch, local preview, merge to main
  only when stable; GitHub Pages deploys on main push only. Use when editing
  this site, committing, pushing, releasing, tagging, or changing deploy-pages.yml.
---

# web — dev branch and deploy workflow

## When to use

- Editing `index.html`, `ethos.html`, `projects.html`, `people.html`, `styles.css`, `assets/`
- Git commit, push, merge, PR, tag, or VERSION bump for **RMS-Ltd/web**
- Changing `.github/workflows/deploy-pages.yml`

## Canon

Full policy: [docs/governance/branch-and-deploy-policy-v0.0.0.md](../../docs/governance/branch-and-deploy-policy-v0.0.0.md)

## Rules (binding)

1. **Branch:** Do routine work on **`dev`**. Check out `dev` if unsure (`git checkout dev`).
2. **No deploy on dev push:** Pushes to `dev` must not trigger GitHub Pages. Workflow deploys **`main` only**.
3. **Local test before main:** Run `python3 -m http.server 8080` and verify before merge to `main`.
4. **Release on main:** Merge `dev` → `main`, then bump VERSION + release notes, tag `v0.0.x`, push `main` + tags **once**.
5. **Do not** push to `main` after every small edit unless the user explicitly asks for a production release.
6. **Do not** add `dev` or wildcard branches to `deploy-pages.yml` without a governance policy bump.

## Commands (typical)

```bash
git checkout dev
# edit files
python3 -m http.server 8080   # verify locally
git add … && git commit -m "…"
git push origin dev           # no Pages deploy

# when user confirms stable:
git checkout main && git pull origin main
git merge dev
# VERSION, docs/releases, release-register
git commit … && git tag v0.0.x
git push origin main && git push origin v0.0.x
git checkout dev && git merge main
```

## VERSION

Update root `VERSION` and `SITE_VERSION` in `assets/site.js` together when preparing a release.

## User asked only to commit

Commit on **`dev`** unless they explicitly request merge to `main`, tag, or push to production.
