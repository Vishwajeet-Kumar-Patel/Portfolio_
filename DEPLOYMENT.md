# Deployment Guide

Complete guide to deploy your 3D portfolio website to Vercel.

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account (for easy deployment)
- Vercel account (free tier available)

## Quick Deployment to Vercel (5 minutes)

### Step 1: Prepare Your Repository

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: 3D portfolio website"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `.next` (auto-configured)
5. Click "Deploy"

Your site will be live in 2-3 minutes at `https://your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Alternative: Vercel CLI Deployment

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login to Vercel

```bash
vercel login
```

### Deploy

For preview deployment:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

## Environment Variables

This portfolio doesn't require environment variables for basic functionality. If you add features that need them:

1. Create `.env.local` file in project root
2. Add your variables:
```
NEXT_PUBLIC_API_KEY=your_key_here
```

3. Add environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable with its value
   - Redeploy the project

## Build Verification

Before deploying, verify the build works locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test the production build.

## Troubleshooting

### Build Fails

**Error**: "Module not found"
- **Solution**: Run `npm install` to ensure all dependencies are installed

**Error**: "Type error in components"
- **Solution**: Run `npm run typecheck` to identify TypeScript issues

### Three.js/Canvas Issues

**Error**: Canvas rendering issues
- **Solution**: Ensure `'use client'` directive is at the top of files using Three.js

### Performance Issues

**Slow loading**:
1. Check image optimization
2. Verify code splitting is working
3. Use Lighthouse to identify bottlenecks

### Mobile Responsiveness

**Layout issues on mobile**:
1. Test with Chrome DevTools mobile emulation
2. Check Tailwind responsive classes
3. Verify viewport meta tag in layout

## Post-Deployment Checklist

- [ ] Test all sections scroll correctly
- [ ] Verify 3D animations work
- [ ] Check all links (GitHub, LinkedIn, email)
- [ ] Test contact form functionality
- [ ] Verify theme toggle works
- [ ] Test on multiple devices/browsers
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test page load speed
- [ ] Check console for errors

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

To disable auto-deployment:
1. Go to Project Settings → Git
2. Configure deployment branches

## Performance Optimization

### Image Optimization

Add images to `public` folder and use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### Code Splitting

Next.js automatically code-splits. For dynamic imports:
```tsx
import dynamic from 'next/dynamic';

const Component = dynamic(() => import('./Component'), {
  loading: () => <p>Loading...</p>,
});
```

### Caching

Vercel automatically handles caching. For custom cache:
```tsx
export const revalidate = 3600; // Revalidate every hour
```

## Analytics (Optional)

### Add Vercel Analytics

1. Install:
```bash
npm install @vercel/analytics
```

2. Add to layout:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

1. Add tracking ID to environment variables
2. Add script to layout.tsx

## Monitoring

Monitor your site:
1. Vercel Dashboard → Analytics
2. Check deployment logs
3. Monitor error reports
4. Track Core Web Vitals

## Updating Your Portfolio

1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit changes:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel automatically deploys the changes.

## Rollback

If deployment has issues:
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

## Support

For deployment issues:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Report bugs in repository

## Cost

**Vercel Free Tier includes**:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Custom domains
- Analytics

Upgrade to Pro only if you need:
- More bandwidth
- Advanced analytics
- Team collaboration

---

Your portfolio is now live and ready to impress recruiters! 🚀
