param(
  [Parameter(Mandatory=$false)]
  [string]$RemoteUrl
)

# Simple helper to initialize a repo, commit, and push to GitHub.
# Usage:
# .\scripts\push-to-github.ps1 -RemoteUrl "https://github.com/you/repo.git"

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $root

if (-not (Test-Path .git)) {
  Write-Host "Initializing git repository..."
  git init
} else {
  Write-Host "Repository already initialized."
}

git add -A

git commit -m "Prepare repo for Netlify deployment" -q 2>$null || Write-Host "No changes to commit or commit failed (maybe no user.name/email configured)."

if ($RemoteUrl) {
  if (-not (git remote)) {
    git remote add origin $RemoteUrl
  } else {
    Write-Host "Remote already exists. To change it run: git remote set-url origin <url>"
  }
  git branch -M main
  git push -u origin main
} else {
  Write-Host "No remote provided. To push to GitHub run:\n git remote add origin <REMOTE_URL>\n git branch -M main\n git push -u origin main"
}
