# Vishwajeet Kumar - 3D Portfolio Website

A modern, fully responsive 3D portfolio website built with Next.js 14, Tailwind CSS, Framer Motion, and Three.js. Designed for professional job applications as a final-year B.Tech CSE (AI Specialization) student.

## Features

- **3D Interactive Elements**: Animated 3D hero section with interactive sphere using Three.js
- **Smooth Animations**: Beautiful page transitions and element animations with Framer Motion
- **Glass Morphism Theme**: Modern dark gradient design with blue/cyan accents
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Light/Dark Mode**: Theme toggle with smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized build with Next.js 14
- **Accessible**: WCAG compliant with proper ARIA labels

## Sections

1. **Hero Section**: 3D animated intro with name, title, and CTA buttons
2. **About Me**: Professional summary with key strengths visualization
3. **Skills**: Categorized technical skills with hover effects
4. **Experience**: StuFit internship details with timeline
5. **Education**: University of Lucknow B.Tech details with SGPA
6. **Projects**: MindWare and Resume Analyzer with tech stacks
7. **Certifications**: Professional certifications and achievements
8. **Contact**: Contact form with social links and contact information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **UI Components**: Shadcn UI
- **Language**: TypeScript
- **Icons**: Lucide React

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

Build the project:
```bash
npm run build
```

Test the production build locally:
```bash
npm start
```

## Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Create a free account on [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure settings
5. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

## Environment Setup

No environment variables are required for basic functionality. The portfolio is ready to deploy as-is.

## Customization

To customize the portfolio with your own information:

1. **Personal Information**: Update contact details in `components/sections/Contact.tsx`
2. **Resume PDF**: Add your resume PDF to the `public` folder and update the link in `components/sections/Hero.tsx`
3. **Project Links**: Update project URLs in `components/sections/Projects.tsx`
4. **Social Links**: Update GitHub and LinkedIn URLs throughout the components

## Project Structure

```
project/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section with 3D elements
│   │   ├── About.tsx         # About me section
│   │   ├── Skills.tsx        # Technical skills
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Education.tsx     # Education details
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── Certifications.tsx # Certifications & achievements
│   │   └── Contact.tsx       # Contact form & info
│   ├── Navigation.tsx        # Top navigation bar
│   ├── ThemeToggle.tsx       # Light/Dark mode toggle
│   └── ThemeProvider.tsx     # Theme context provider
├── components/ui/            # Shadcn UI components
├── public/                   # Static assets
└── package.json              # Dependencies

```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## Contact Information

- **Email**: vishwajeetkumarpatelmgs@gmail.com
- **Phone**: +91-9569121326
- **Location**: Varanasi, Uttar Pradesh
- **LinkedIn**: [linkedin.com/in/vishwajeetkumarpatelmgs](https://linkedin.com/in/vishwajeetkumarpatelmgs)
- **GitHub**: [github.com/vishwajeetkumarpatelmgs](https://github.com/vishwajeetkumarpatelmgs)

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ by Vishwajeet Kumar
