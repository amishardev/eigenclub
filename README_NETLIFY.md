This README contains quick steps to push this project to GitHub and deploy it on Netlify.

What I added
- `netlify.toml` — config for Netlify using `@netlify/plugin-nextjs`.
- Added `@netlify/plugin-nextjs` to `devDependencies` in `package.json`.

Steps to push to GitHub and enable Netlify (copy & paste in PowerShell):

1) Initialize git (if the repo is not already a git repo) and commit changes

```powershell
# run from repository root (C:\code\THE EIGEN CLUB)
git init
git add .
git commit -m "Prepare for Netlify: add netlify.toml and plugin"
```

2) Create a GitHub repository and push
- Create a new repo on GitHub (via web UI). Copy the remote URL (e.g. git@github.com:you/your-repo.git or https://github.com/you/your-repo.git)

```powershell
# replace <REMOTE_URL> with the GitHub repo URL
git remote add origin <REMOTE_URL>
git branch -M main
git push -u origin main
```

3) Configure Netlify
- In Netlify, click "Add new site" → "Import from Git" → choose Git provider (GitHub) → select the repository.
- Netlify should auto-detect the framework and plugin. If not, set:
  - Build command: `npm run build`
  - Publish directory: leave blank (plugin handles `.next`), or set to `.next`
- Enable environment variables if you have any (in Site settings → Build & deploy → Environment).

4) Advanced: Use Netlify CLI for local testing

```powershell
# install netlify CLI globally if you want
npm i -g netlify-cli
# run build locally
npm run build
# to run a local dev server that mimics Netlify, see netlify dev docs
netlify dev
```

Notes & caveats
- This project uses Next.js 15 and the `app` router. `@netlify/plugin-nextjs` handles server functions and middleware for Netlify, but if your app uses non-static server features, Netlify will deploy serverless functions for SSR.
- Keep secrets out of `netlify.toml`; use Netlify UI or GitHub Actions secrets.

If you'd like, I can also:
- Add a GitHub Actions workflow to push builds or run tests.
- Run `npm install` to add the netlify plugin locally (I can run it if you'd like me to).