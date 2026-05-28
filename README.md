# web

Public cooperative landing page for **RMS Ltd.** — GitHub Pages.

**Live:** https://rms-ltd.github.io/web/

**Source of truth (private):** [RMS-Ltd/enterprise](https://github.com/RMS-Ltd/enterprise) → `site/` — sync HTML/CSS here when the landing changes.

---

## Enable Pages (once)

Repo **Settings → Pages → Build and deployment → Source:** **GitHub Actions**

---

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

---

## Deploy

Push to `main` runs [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).
