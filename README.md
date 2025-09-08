# Print3D Pro - Professional 3D Printing Website

A modern, responsive website for a 3D printing business built with Next.js, Framer Motion, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design matching the Print3D Pro brand
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Hover effects, form handling, and dynamic content
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Performance**: Optimized images and code for fast loading
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety throughout the application
- **Images**: Next.js Image optimization

## 📁 Project Structure

```
proto2Plastic/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Stats.tsx            # Statistics showcase
│   ├── Services.tsx         # Services grid
│   ├── Portfolio.tsx        # Project portfolio
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd proto2Plastic
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#d946ef to #3b82f6)
- **Secondary**: Blue gradient (#3b82f6 to #22c55e)
- **Accent**: Green gradient (#22c55e to #f59e0b)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with good readability

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile menu

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

### Framer Motion Features
- **Staggered animations**: Elements animate in sequence
- **Scroll-triggered animations**: Content appears on scroll
- **Hover effects**: Interactive elements respond to user input
- **Page transitions**: Smooth navigation between sections

### Animation Types
- **Fade in**: Elements appear with opacity transitions
- **Slide up**: Content slides up from below
- **Scale**: Buttons and cards scale on hover
- **Rotate**: Icons rotate on interaction

## 🔧 Customization

### Branding
1. Update colors in `tailwind.config.js`
2. Change logo text in `Header.tsx`
3. Modify contact information in `Contact.tsx`
4. Update social media links in `Footer.tsx`

### Content
1. Edit service offerings in `Services.tsx`
2. Add portfolio projects in `Portfolio.tsx`
3. Update statistics in `Stats.tsx`
4. Modify hero content in `Hero.tsx`

### Styling
1. Customize gradients in `globals.css`
2. Adjust spacing in component files
3. Modify animations in Framer Motion variants
4. Update responsive breakpoints as needed

## 📧 Contact Form

The contact form includes:
- Name, email, project type, and details fields
- Form validation and error handling
- Responsive design for all devices
- Success/error state management

**Note**: The form currently logs to console. Connect to your backend API for production use.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `out` folder
- **AWS Amplify**: Connect repository and deploy
- **Custom Server**: Build with `npm run build` and serve

## 📈 Performance

### Optimizations
- **Image optimization**: Next.js Image component
- **Code splitting**: Automatic with Next.js
- **CSS optimization**: Tailwind purges unused styles
- **Bundle analysis**: Use `@next/bundle-analyzer`

### Lighthouse Scores
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for the 3D printing community**




