# Model Stack - Theoretical Macroeconomic Models

A comprehensive resource for understanding complex macroeconomic models through detailed mathematical derivations and economic insights.

## Features

- 🧮 **Mathematical Rigor**: Complete derivations with KaTeX rendering
- 📊 **Categorized Models**: Organized by complexity and topic
- 📝 **Blog System**: Economic insights and detailed explanations
- 🎨 **Clean Design**: Professional, academic-focused interface
- 📱 **Responsive**: Works on all devices

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Content Management Guide

### Adding New Models

Models are organized in the `/src/app/models/` directory. Each model should have its own folder with a `page.tsx` file.

#### Method 1: Create Individual Model Pages (Recommended)

1. **Create a new model directory:**
   ```
   src/app/models/your-model-name/
   └── page.tsx
   ```

2. **Use the Solow model template** (`src/app/models/solow/page.tsx`) as a starting point:
   ```tsx
   import MathRenderer from '@/components/MathRenderer';
   
   export default function YourModelPage() {
     return (
       <div className="max-w-4xl mx-auto">
         <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Model Name</h1>
         
         {/* Math equations */}
         <MathRenderer math="Y = C + I + G" block />
         <MathRenderer math="\\alpha" /> {/* inline math */}
         
         {/* Content sections */}
         <section>
           <h2 className="text-2xl font-bold text-gray-900 mb-4">Section Title</h2>
           <p className="text-gray-700">Your content here...</p>
         </section>
       </div>
     );
   }
   ```

3. **Add to the models list** in `/src/app/models/page.tsx`:
   ```tsx
   { 
     name: "Your Model Name", 
     description: "Brief description", 
     href: "/models/your-model-name" 
   }
   ```

#### Method 2: Markdown Support (Future Enhancement)

For easier content management, you could implement MDX support:

1. **Install MDX dependencies:**
   ```bash
   npm install @next/mdx @mdx-js/loader @mdx-js/react
   ```

2. **Configure `next.config.ts`:**
   ```tsx
   import createMDX from '@next/mdx'
   
   const nextConfig = {
     pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
   }
   
   const withMDX = createMDX({})
   export default withMDX(nextConfig)
   ```

3. **Create `.mdx` files:**
   ```
   src/app/models/your-model/
   └── page.mdx
   ```

### Math Rendering

Use the `MathRenderer` component for equations:

```tsx
{/* Block equations (centered) */}
<MathRenderer math="\\frac{dK}{dt} = sY - \\delta K" block />

{/* Inline equations */}
<MathRenderer math="\\alpha \\in (0,1)" />
```

**Common LaTeX Symbols:**
- Greek letters: `\\alpha`, `\\beta`, `\\gamma`, `\\delta`
- Fractions: `\\frac{numerator}{denominator}`
- Integrals: `\\int_0^T f(t) dt`
- Partial derivatives: `\\frac{\\partial Y}{\\partial K}`
- Summation: `\\sum_{i=1}^n x_i`

### Adding Blog Posts

Blog posts are managed in `/src/app/blogs/page.tsx`. Currently static, but you can:

1. **Add posts to the array:**
   ```tsx
   const blogPosts = [
     {
       title: "Your Blog Title",
       excerpt: "Brief description...",
       date: "2024-01-15", 
       readTime: "10 min read",
       category: "Theory"
     }
   ];
   ```

2. **Create individual blog pages:**
   ```
   src/app/blogs/your-post-slug/
   └── page.tsx
   ```

### Styling Guidelines

- Use Tailwind CSS classes consistently
- Follow the existing color scheme (grays with accent colors)
- Maintain responsive design with `md:`, `lg:` prefixes
- Use proper semantic HTML structure

### Model Categories

Current categories in `/src/app/models/page.tsx`:
- **Basic Models**: IS-LM, AD-AS, Phillips Curve
- **Growth Models**: Solow, Ramsey-Cass-Koopmans, Endogenous Growth
- **Dynamic Models**: RBC, New Keynesian DSGE, OLG
- **Advanced Topics**: Search & Matching, Heterogeneous Agents, Open Economy

## Project Structure

```
src/
├── app/
│   ├── models/
│   │   ├── solow/           # Example model page
│   │   └── page.tsx         # Models listing
│   ├── blogs/
│   │   └── page.tsx         # Blog listing
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Navigation.tsx       # Top navigation
│   └── MathRenderer.tsx     # KaTeX math rendering
└── ...
```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push to main
3. Custom domain support available

### Manual Deployment
```bash
npm run build
npm run start
```

## Development Tips

1. **Hot Reload**: Changes auto-update in development
2. **Math Debugging**: Check browser console for KaTeX errors
3. **Responsive Testing**: Use browser dev tools
4. **Performance**: Next.js optimizes automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your model or blog post
4. Test locally
5. Submit a pull request

## Support

- Next.js Documentation: https://nextjs.org/docs
- KaTeX Documentation: https://katex.org/docs/
- Tailwind CSS: https://tailwindcss.com/docs

---

Built with ❤️ using Next.js, TypeScript, and KaTeX