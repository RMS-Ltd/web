# Branch and deploy policy — web

## Version 0.0.0

**Live site:** https://rms-ltd.github.io/web/  
**Workflow:** [.github/workflows/deploy-pages.yml](../../.github/workflows/deploy-pages.yml)  
**Related:** [versioning-policy-v0.0.0.md](./versioning-policy-v0.0.0.md)

---

## Changelog — v0.0.0

| Change | Detail |
|--------|--------|
| **INIT** | `dev` for day-to-day work; `main` for production; Pages deploy on `main` only. |

---

## 1) Purpose

Reduce unnecessary GitHub Pages builds. Each deploy uses CI minutes and edge propagation; batching changes behind local testing is **environmentally aware practice** for a static site.

---

## 2) Branches

| Branch | Role | Push triggers Pages deploy? |
|--------|------|----------------------------|
| **`dev`** | Default workspace for edits, experiments, agent work | **No** |
| **`main`** | Production canon; matches live site | **Yes** |

**Rule:** Do not push site work directly to `main` unless merging a tested changeset from `dev` (or an emergency hotfix with explicit intent).

---

## 3) Developer workflow

### Day-to-day (on `dev`)

1. `git checkout dev` (create from `main` if missing: `git checkout -b dev origin/main`).
2. Edit site bundle and docs as needed.
3. **Local preview** (required before merge):

   ```bash
   python3 -m http.server 8080
   ```

   Open http://localhost:8080 — check pages, theme toggle, links.

4. Commit on `dev`; `git push origin dev` — **no production deploy**.

### Release (merge to `main`)

1. Confirm local testing on `dev` is stable.
2. `git checkout main` && `git pull origin main`.
3. `git merge dev` (prefer merge commit or squash per team habit; do not force-push `main`).
4. Bump [VERSION](../../VERSION) and `SITE_VERSION` in [assets/site.js](../../assets/site.js).
5. Copy-then-edit release notes; update [release-register](../planning/release-register-v0.0.0.md) per [versioning-policy](./versioning-policy-v0.0.0.md).
6. Commit on `main`; tag `v0.0.x`; `git push origin main` && `git push origin v0.0.x`.
7. **One** Pages deploy runs (push to `main`).
8. `git checkout dev` && `git merge main` — keep `dev` current.

### Emergency hotfix on `main`

Allowed only when `dev` cannot be used in time. Still: local preview, VERSION + release notes, tag, push `main` once.

---

## 4) CI / GitHub Pages

[deploy-pages.yml](../../.github/workflows/deploy-pages.yml):

| Trigger | Deploys? |
|---------|----------|
| `push` to **`main`** | Yes |
| `push` to **`dev`** | No |
| `workflow_dispatch` | Yes (manual; use sparingly) |

Do not add `dev` (or `**`) to deploy triggers without a policy bump.

---

## 5) GitHub repo settings

| Setting | Value |
|---------|--------|
| Default branch | **`dev`** — new clones and PRs target `dev` → `main` |
| Branch protection on `main` | Require PR or review before merge (optional) |

---

## 6) Agents and automation

- **Default branch for edits:** `dev`.
- **Do not** commit site releases on `main` without user confirmation that local testing passed.
- **Do not** push to `main` after every small change.
- **Do not** tag or bump VERSION on `dev` unless preparing a release (may do on `dev` while staging; tag only on `main` release commit).
- Load this policy when changing site files, workflows, or git/release process.

See [docs/AGENTS.md](../AGENTS.md) and project skill `.cursor/skills/web-dev-branch-workflow/`.

---

## 7) What this policy does not change

- SemVer rules: [versioning-policy-v0.0.0.md](./versioning-policy-v0.0.0.md)
- Site content canon: this repo is source of truth (not enterprise `site/`)

---

*Version 0.0.0*
