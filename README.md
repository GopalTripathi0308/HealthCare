# HealthTech Solutions - Modern Healthcare Website

A modern, fully responsive single-page website built with Next.js, showcasing healthcare technology solutions with beautiful animations and dark/light mode support.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Animated theme toggle with system preference detection
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessible**: ARIA attributes, keyboard navigation, and semantic HTML
- **SEO Optimized**: Proper meta tags, OpenGraph, and structured data
- **Clean Architecture**: Modular, maintainable code structure

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Architecture**: Clean Architecture principles

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
├── components/ui/          # Reusable UI components
├── shared/                 # Shared utilities and constants
│   ├── constants/         # Site configuration
│   ├── context/           # React contexts (Theme)
│   └── utils/             # Utility functions
└── modules/
    └── landing/           # Landing page module
        ├── core/          # Business logic and types
        ├── infrastructure/ # Data and external services
        └── presentation/  # UI components and hooks
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd health-project-nextjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Changing Content

Edit the data in `src/modules/landing/infrastructure/data/landingData.ts` to customize:

- Hero section content
- About section information
- Services offered
- Experience timeline
- Project portfolio
- Contact information

### Styling & Theme

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Update component styles in respective files
- **Animations**: Customize Framer Motion animations in component files

### Site Configuration

Update `src/shared/constants/siteConfig.ts` for:

- Site name and description
- Navigation menu items
- Social media links
- Contact information

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with typewriter effect
2. **About Section**: Company overview with animated features
3. **Services Section**: Healthcare technology services with icons
4. **Experience Section**: Timeline of professional experience
5. **Projects Section**: Portfolio of featured projects
6. **Contact Section**: Contact form and information
7. **Footer**: Links and additional information

## 🎯 Performance Features

- **Lazy Loading**: Images and components load as needed
- **Optimized Images**: Next.js Image component for performance
- **Code Splitting**: Automatic code splitting by Next.js
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Lighthouse Score**: 90+ across all metrics

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

```bash
npm run build
npm start
```

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact [contact@healthtech-solutions.com](mailto:contact@healthtech-solutions.com)

---

Built with ❤️ for better healthcare technology solutions.
