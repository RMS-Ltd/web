# Versioning policy (SemVer) — web

## Version 0.0.0

---

## Changelog — v0.0.0

| Change | Detail |
|--------|--------|
| **INIT** | SemVer for [RMS-Ltd/web](https://github.com/RMS-Ltd/web); aligned with [enterprise](https://github.com/RMS-Ltd/enterprise) doc practice. |

---

## 1) Format

`MAJOR.MINOR.PATCH` — pre-`1.0.0` while the landing is in formation.

| Location | Example |
|----------|---------|
| Git tag | `v0.0.2` |
| Root [VERSION](../../VERSION) | `0.0.2` |
| Release notes | `docs/releases/release-notes-v0.0.2.md` |

---

## 2) What gets versioned

| Artifact | SemVer | Bump PATCH | Bump MINOR |
|----------|--------|------------|------------|
| **Site bundle** (`index.html`, `styles.css`, `assets/`) | Yes — one release per deploy | Copy, styling, link fixes, metadata | New sections, layout restructure |
| **Release notes** | `release-notes-v0.0.x.md` | Per site PATCH | New page / major narrative change |
| **Release register** | `release-register-v0.0.x.md` | Row + changelog | New tables / policy |
| **Versioning policy** | `versioning-policy-v0.0.x.md` | Clarifications | New rules |

**MAJOR (`1.0.0`):** cooperative launch positioning frozen, custom domain canonical, or full rebrand.

---

## 3) Copy-before-edit (release notes & policy)

1. Choose next version.
2. Copy `release-notes-v0.0.x.md` → new filename; edit **new file only**.
3. Update [VERSION](../../VERSION) and [CURRENT_RELEASE.md](../planning/CURRENT_RELEASE.md).
4. PATCH bump [release-register](../planning/release-register-v0.0.0.md) changelog (or copy register if MINOR).
5. Commit; tag `v0.0.x` on the release commit.
6. Push; GitHub Pages deploys from `main`.

**Site files** (`index.html`, etc.) are edited in place on `main` — the **git tag** and **release notes** record the SemVer snapshot.

---

## 4) Tier A — unversioned (edit in place)

| Path | Role |
|------|------|
| `README.md` | Repo entry |
| `docs/planning/CURRENT_RELEASE.md` | Pointer to current register |
| `.github/workflows/deploy-pages.yml` | Deploy mechanics |

---

## 5) Source sync

HTML/CSS **source of truth** for copy changes: `RMS-Ltd/enterprise` → `site/`. After editing there, sync to **web** `main`, then bump VERSION + release notes + tag. See [README.md](../../README.md).

---

*Version 0.0.0*
