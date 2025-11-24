# Quick Start Guide

Get your 3D portfolio running in under 5 minutes!

## Prerequisites

Make sure you have:
- Node.js 18+ ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- Git installed

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- Tailwind CSS
- Framer Motion
- Three.js & React Three Fiber
- Shadcn UI components
- TypeScript

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see your 3D portfolio with:
- Animated hero section with 3D sphere
- Smooth scroll navigation
- All sections loading properly

### 3. Test the Build

```bash
npm run build
```

This ensures the production build works correctly.

## Customization Quick Guide

### Update Personal Information

1. **Contact Details** (`components/sections/Contact.tsx`):
   - Email address
   - Phone number
   - Location
   - Social links

2. **Hero Section** (`components/sections/Hero.tsx`):
   - Name
   - Title/subtitle
   - Introduction text

3. **About Section** (`components/sections/About.tsx`):
   - Professional summary
   - Career goals

### Add Your Resume PDF

1. Add your resume PDF to the `public` folder:
```bash
public/
  └── resume.pdf
```

2. The download link in Hero section will automatically work

### Update Project Links

In `components/sections/Projects.tsx`, update:
- `liveLink`: Your project's live URL
- `githubLink`: Your GitHub repository URL

### Change Theme Colors

To customize the blue/cyan gradient theme:

1. Edit `tailwind.config.ts` for global color changes
2. Modify individual gradient classes in components:
   - `from-blue-500 to-cyan-500`
   - `from-cyan-500 to-teal-500`
   - etc.

## Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Features Checklist

Verify these features work:

- [ ] 3D animated sphere in hero section
- [ ] Smooth scroll navigation
- [ ] Mobile responsive menu
- [ ] Light/Dark theme toggle
- [ ] Hover animations on cards
- [ ] Contact form validation
- [ ] Social links working
- [ ] Resume download button
- [ ] All sections visible

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### 3D Sphere Not Rendering

- Clear browser cache
- Check browser console for errors
- Ensure WebGL is enabled in browser

### Slow Performance in Dev Mode

This is normal! Production build is much faster:
```bash
npm run build
npm start
```

### Module Not Found Errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. **Deploy to Vercel**:
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guide
   - Should take about 5 minutes

2. **Test on Multiple Devices**:
   - Mobile phones
   - Tablets
   - Different browsers

3. **Optimize Content**:
   - Add your actual project screenshots
   - Update descriptions
   - Add more projects if needed

4. **Share Your Portfolio**:
   - Add link to resume
   - Share on LinkedIn
   - Include in job applications

## Getting Help

If you encounter issues:

1. Check the console for errors (F12 in browser)
2. Review the README.md for detailed docs
3. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Verify all dependencies installed correctly

## Tech Stack Reminder

Your portfolio uses:
- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **Shadcn UI**: Beautiful UI components
- **TypeScript**: Type-safe JavaScript

## Performance Tips

- Images should be in `public` folder
- Use Next.js Image component for optimization
- Keep bundle size minimal
- Lazy load heavy components if needed

---

You're all set! Your portfolio is ready to impress recruiters. 🚀

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
