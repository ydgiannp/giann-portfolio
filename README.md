# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This project showcases your skills, projects, and experience as a software engineer.

## Features

- 🎨 Modern and responsive design
- 🌓 Dark mode support
- 📱 Mobile-friendly
- 🚀 Built with Next.js 14 (App Router)
- 💅 Styled with Tailwind CSS
- 📝 Dynamic content from JSON
- ⚡ Fast and optimized

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Portfolio Data

Edit the `data/portfolio.json` file to customize:

- **Personal Information**: Name, title, bio, contact details, social links
- **Skills**: Categorized list of your technical skills
- **Projects**: Your portfolio projects with descriptions, technologies, and links
- **Experience**: Your work experience and achievements

### File Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Work experience
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── data/
│   └── portfolio.json      # Portfolio data (edit this!)
├── types/
│   └── portfolio.ts        # TypeScript type definitions
└── public/
    └── projects/           # Add project images here
```

## Learning Resources

### React Concepts Used
- **Components**: Modular UI building blocks
- **Props**: Passing data between components
- **Hooks**: useState, useEffect for state management
- **JSX**: JavaScript XML syntax

### Next.js Features
- **App Router**: Modern routing system
- **Server Components**: Improved performance
- **File-based routing**: Automatic route creation
- **Metadata API**: SEO optimization

### Tailwind CSS
- **Utility classes**: Rapid styling
- **Responsive design**: Mobile-first approach
- **Dark mode**: Automatic theme switching

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **Railway**: Deploy with GitHub integration
- **AWS Amplify**: Deploy from Git

## Next Steps

1. Replace placeholder data in `data/portfolio.json`
2. Add project images to `public/projects/`
3. Customize colors in `tailwind.config.ts`
4. Add more sections as needed
5. Deploy your portfolio!

## License

MIT License - feel free to use this project for your own portfolio!
