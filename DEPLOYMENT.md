# Deployment Guide

## Netlify Deployment

### Quick Deploy

1. **Build the project locally:**

   ```bash
   npm install
   npm run build
   ```

2. **Commit all changes:**

   ```bash
   git add .
   git commit -m "Build for deployment"
   git push origin main
   ```

3. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Netlify will automatically use the `netlify.toml` configuration
   - Build command: `npm run build`
   - Publish directory: `.` (root)

### Manual Deploy

If automatic deployment fails:

1. **Build locally:**

   ```bash
   npm run build
   ```

2. **Drag and drop the entire project folder to Netlify**

### Troubleshooting

**If you get "Page not found" errors:**

1. Check that `assets/js/dist/` folder exists and contains compiled files
2. Verify `netlify.toml` is in the root directory
3. Ensure build command runs successfully: `npm run build`
4. Check that all TypeScript files compile without errors

**Common issues:**

- Missing dependencies: Run `npm install`
- TypeScript errors: Check `npm run build` output
- Missing compiled files: Ensure `assets/js/dist/` is committed to git

### Build Requirements

- Node.js 18+
- npm dependencies installed
- TypeScript compilation successful
