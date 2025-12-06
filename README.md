# appxlab.space Landing Page

A premium Next.js landing page for appxlab.space featuring an interactive 3D particle ring background and modern dark theme design.

## Features

- ✨ Interactive 3D particle ring background using React Three Fiber
- 🎨 Modern dark theme with premium styling
- ⚡ Lightning-fast performance with Next.js 14
- 📱 Fully responsive design
- 🎯 Clean, minimal layout focused on the core message
- 🔗 Privacy Policy and Terms & Conditions pages

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **React Three Fiber** - 3D graphics in React
- **@react-three/drei** - Useful helpers for React Three Fiber

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd front_page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   ├── legal/page.tsx       # Legal documents manager (3-column view)
│   ├── apps/page.tsx        # App documents index page
│   └── [app-name]/          # Individual app document pages
│       ├── privacy/page.tsx # Privacy policy page
│       └── terms/page.tsx   # Terms & conditions page
├── components/
│   └── ParticleRing.tsx     # 3D particle ring component
└── lib/
    ├── particle-utils.ts    # Particle generation utilities
    └── utils.ts             # General utility functions
```

## URL Structure

The application supports multiple ways to access legal documents:

### Direct App Document Links (for mobile apps)
- `/notifype/privacy` - Notifype Privacy Policy (standalone page)
- `/notifype/terms` - Notifype Terms & Conditions (standalone page)

### Document Manager Views
- `/legal` - Interactive 3-column legal document manager
- `/legal?app=notifype&doc=privacy` - Direct link to specific document in manager
- `/apps` - Index of all apps with direct links to their documents

### Usage in Mobile Apps
Use these URLs for linking from mobile applications:
```javascript
// Privacy Policy
const privacyUrl = "https://appxlab.space/notifype/privacy";

// Terms & Conditions  
const termsUrl = "https://appxlab.space/notifype/terms";
```

## Customization

### Particle Ring

The particle ring can be customized in `src/lib/particle-utils.ts`:

- `NUM_POINTS` - Number of particles
- `MIN_RADIUS` / `MAX_RADIUS` - Ring size
- `LEFT_COLOR` / `RIGHT_COLOR` - Gradient colors
- `DEPTH` - Z-axis spread

### Theme Colors

Dark theme colors are defined in `src/app/globals.css` using CSS custom properties.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The optimized build will be in the `.next` folder.

## License

This project is proprietary software for appxlab.space.

## Contact

For questions or support, contact: hello@appxlab.space