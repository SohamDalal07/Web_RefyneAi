# Vercel Deployment Troubleshooting Guide

## Common Vercel Deployment Issues & Solutions

### Issue 1: Build Fails - Missing Dependencies
**Solution:** Make sure all dependencies are installed
```bash
npm install
npm run build
```

### Issue 2: Wrong Build Settings
**Solution:** Use these Vercel settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Issue 3: Environment Variables
If you're using any environment variables, add them in Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add required variables

### Issue 4: Node Version Mismatch
**Solution:** Specify Node version in package.json:
```json
"engines": {
  "node": ">=18.0.0"
}
```

---

## Step-by-Step: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Push to GitHub First:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Vercel Configuration File

I've created a `vercel.json` file with the correct settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

---

## Check Build Locally First

Before deploying, test the build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

If the build succeeds locally, it should work on Vercel.

---

## Common Error Messages & Fixes

### Error: "Command failed with exit code 1"
- **Cause:** Build errors in your code
- **Fix:** Run `npm run build` locally to see the actual error

### Error: "Module not found"
- **Cause:** Missing dependencies or wrong import paths
- **Fix:** Check all import statements use correct paths

### Error: "ENOENT: no such file or directory"
- **Cause:** Missing files or wrong output directory
- **Fix:** Ensure `dist` folder is created during build

### Error: "Cannot find module '@/...'
- **Cause:** Path alias not configured properly
- **Fix:** Check `vite.config.ts` has correct alias setup (already configured)

---

## Video Files Issue

**Important:** Large video files might cause deployment issues.

**Solutions:**
1. **Host videos externally** (YouTube, Vimeo, CDN)
2. **Compress videos** before deploying
3. **Use Git LFS** for large files:
   ```bash
   git lfs install
   git lfs track "*.mp4"
   git add .gitattributes
   ```

Current video files:
- `Premium_Logo_Animation_for_RAi.mp4` (if still in public folder)
- `Rai explanation.mp4`

---

## Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Build works locally (`npm run build`)
- [ ] Code pushed to GitHub
- [ ] `vercel.json` configuration file created
- [ ] Video files are in `public` folder or hosted externally
- [ ] No TypeScript/ESLint errors
- [ ] Environment variables set (if needed)

---

## Get Deployment Logs

If deployment fails, check logs:

1. **In Vercel Dashboard:**
   - Go to your project
   - Click on the failed deployment
   - View "Build Logs" and "Function Logs"

2. **Via CLI:**
   ```bash
   vercel logs
   ```

---

## Need More Help?

Share the error message from Vercel deployment logs, and I can help diagnose the specific issue!
