# Pizarras Ecuador - Next.js Website

A modern, professional website for a whiteboard business built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, clean design inspired by professional interior design websites
- 📱 Fully responsive layout for all devices
- ⚡ Built with Next.js 16 App Router for optimal performance
- 🎨 Styled with Tailwind CSS 4
- 💪 Written in TypeScript for type safety
- 🚀 Production-ready with optimized builds

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd whiteboard-app
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
whiteboard-app/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json          # Dependencies
```

## Sections

The landing page includes:

1. **Header** - Navigation with product, services, and contact links
2. **Hero Section** - Eye-catching introduction with CTAs
3. **Features** - Highlighting quality, installation, and customization
4. **Products** - Showcase of different whiteboard types
5. **CTA Section** - Call-to-action for quotations
6. **Footer** - Contact information and site links

## Customization

To customize the content:

- Edit `app/page.tsx` to modify sections and content
- Update `app/globals.css` for global styling changes
- Modify colors and design in Tailwind classes

## Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## Deployment

Deploy easily on:

- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- Any Node.js hosting service

## License

This project is created for Pizarras Ecuador.

---

Built with ❤️ using Next.js
