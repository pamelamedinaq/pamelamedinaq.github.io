# Pamela Medina Quispe — Personal Academic Website

Plain HTML/CSS site. No build step: edit the `.html` files and the changes are live once uploaded.

## Structure

- `index.html` — Home (bio, news, contact)
- `research.html` — Publications, working papers, work in progress
- `teaching.html` — Courses and PhD students
- `media.html` — Opinion pieces, interviews, panels
- `files/MedinaQuispePamela_CV.pdf` — CV (replace this file to update the CV; the nav link points to it)
- `style.css` — All styling (colors are defined at the top under `:root`)

## Adding your photo

Save a photo as `files/photo.jpg`, then in `index.html` replace the
`<div class="portrait-placeholder">…</div>` block with:

```html
<img class="portrait" src="files/photo.jpg" alt="Pamela Medina Quispe">
```

## Publishing on GitHub Pages at www.pamelamedinaquispe.com

The `CNAME` file in this folder is already set to `www.pamelamedinaquispe.com`.

1. **Register `pamelamedinaquispe.com`** (verified available as of July 2026) at
   Namecheap (namecheap.com) or Cloudflare Registrar (~US$10–12/year).
2. **Create a GitHub repository** at github.com (e.g. named `website`, public),
   then push this folder to it (a local git repo is already initialized here):
   ```
   cd ~/Dropbox/Website
   git remote add origin https://github.com/<your-username>/website.git
   git push -u origin main
   ```
3. **Enable Pages**: repo → Settings → Pages → Source: "Deploy from a branch" →
   Branch: `main`, folder `/ (root)`. Custom domain: `www.pamelamedinaquispe.com`.
4. **At your registrar's DNS settings**, add:
   - A `CNAME` record: host `www` → `<your-username>.github.io`
   - `A` records for the apex (`pamelamedinaquispe.com`, host `@`) pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (this makes `pamelamedinaquispe.com` without the www redirect to the site)
5. Back in GitHub Pages settings, check **Enforce HTTPS** (appears ~an hour
   after DNS propagates).

To update the site later: edit the files, then
`git add -A && git commit -m "update" && git push` — live in about a minute.
