# Build and deploy script for Angular app to GitHub Pages
# Assumes you have angular-cli-ghpages installed globally or via npx

# Stop on any error
$ErrorActionPreference = 'Stop'

Write-Host "Building Angular application for production..."
ng build --configuration production --base-href /landingpage/

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed. Exiting."
    exit 1
}

Write-Host "Build completed successfully."

Write-Host "Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/portfolio/browser --repo=https://github.com/Kenyson/landingpage.git --branch=gh-pages --no-silent

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed. Exiting."
    exit 1
}

Write-Host "Deployment completed successfully!"
Write-Host "Your site should be available at: https://Kenyson.github.io/landingpage/"