# Simarjit Singh - Professional Portfolio Website

A modern, vibrant, and fully responsive portfolio website showcasing cloud-native development expertise, AI/ML integration, and IoT solutions.

## 🚀 Features

### Design & UX
- **Modern & Vibrant Design**: Sleek gradient backgrounds, smooth animations, and vibrant color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Semantic HTML5**: Proper semantic markup for accessibility and SEO
- **Smooth Animations**: Engaging transitions, hover effects, and scroll-triggered animations
- **Dark Mode by Default**: Eye-friendly dark theme with gradient accents

### Interactive Elements
- **Sticky Navigation**: Auto-adjusting navbar with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices with smooth transitions
- **Form Validation**: Contact form with email validation
- **Scroll Animations**: Elements animate in as they become visible
- **Counter Animations**: Stats counter with smooth number increment
- **Smooth Scrolling**: All navigation links enable smooth scroll behavior
- **Cursor Animation**: Custom cursor trail effect (desktop only)

### Sections Included

1. **Hero Section**
   - Eye-catching introduction with gradient text
   - Call-to-action buttons
   - Social media links
   - Floating animated technology boxes

2. **About Section**
   - Personal introduction
   - Education details with CGPA
   - Focus areas and skills overview
   - Impressive statistics (6+ projects, 2 internships, 2 hackathon wins, 15+ technologies)

3. **Skills Section**
   - 6 skill categories with organized tags
   - Languages, Cloud & DevOps, AI/ML & Data, Frameworks & Libraries, Monitoring & Analytics, Core Concepts
   - Hover effects for better interactivity

4. **Projects Section**
   - 6 featured projects with descriptions
   - Project tags and technology stack
   - Links to GitHub repositories
   - Hover animations and smooth transitions

5. **Experience Section**
   - Timeline layout showing work experience
   - Two internships with detailed descriptions
   - Technologies used for each position
   - Responsive timeline design

6. **Achievements Section**
   - Grand Challenge Contest - 1st Position
   - IBM Z Datathon - 3rd Position
   - Highlighting badges and descriptions

7. **Contact Section**
   - Multiple contact methods (email, phone, GitHub, LinkedIn)
   - Interactive contact form with validation
   - Fallback mailto functionality

8. **Footer**
   - Quick links section
   - Social media links
   - Copyright information

## 📁 Project Structure

```
/simar/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete CSS with responsive design and animations
├── script.js           # JavaScript for interactivity and animations
└── README.md          # This file
```

## 🎨 Color Palette

- **Primary**: `#6366f1` (Indigo) - Main accent color
- **Secondary**: `#ec4899` (Pink) - Secondary accent
- **Accent**: `#14b8a6` (Teal) - Highlight color
- **Dark Background**: `#0f172a` - Primary background
- **Surface**: `#1e293b` - Card backgrounds
- **Text Primary**: `#f1f5f9` - Main text color
- **Text Secondary**: `#cbd5e1` - Secondary text color

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with gradients, animations, and grid/flexbox
- **JavaScript (Vanilla)**: No frameworks, pure JavaScript for better performance
- **Font Awesome**: Icon library (CDN)
- **Google Fonts**: Modern typography (via Segoe UI fallback)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted layouts)
- **Mobile**: Below 768px (optimized for single column)
- **Small Mobile**: Below 480px (heading sizes and spacing adjustments)

## ⚙️ Installation & Setup

### Option 1: Local File System
1. Clone or download the portfolio files to a folder named `simar/`
2. Open `index.html` in your default browser
3. That's it! No build process or server required

### Option 2: Web Server
For best experience, serve through a web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Option 3: Deploy Online

#### Deploy to GitHub Pages
1. Create a repository named `Simar0024.github.io`
2. Push the portfolio files to the main branch
3. Access at: `https://Simar0024.github.io`

#### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

#### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

## 🎯 Customization Guide

### Update Personal Information

**In `index.html`:**

1. **Title & Meta Tags** (Line 6):
   ```html
   <title>Your Name - Your Title</title>
   ```

2. **Hero Section** (Around Line 57-75):
   ```html
   <h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>
   <p class="hero-subtitle">Your Professional Title</p>
   ```

3. **Social Links** (Around Line 85-98):
   ```html
   <a href="your-github-url" target="_blank" class="social-link">
   ```

4. **Contact Info** (Around Line 490, 535):
   - Email address
   - Phone number
   - GitHub profile
   - LinkedIn profile

### Update Projects

Each project card is around lines 300-350. Template structure:
```html
<article class="project-card">
    <div class="project-image">
        <div class="project-icon">🎯</div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Project description here</p>
        <div class="project-tags">
            <span>Technology1</span>
            <span>Technology2</span>
        </div>
        <a href="github-url" target="_blank" class="project-link">
            View on GitHub <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</article>
```

### Update Skills

Modify the skill categories around line 240:
```html
<div class="skill-category">
    <div class="skill-icon">🎯</div>
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill1</span>
        <span class="skill-tag">Skill2</span>
    </div>
</div>
```

### Modify Colors

In `styles.css`, update CSS variables at the top (lines 5-22):
```css
:root {
    --primary: #6366f1;        /* Change primary color */
    --secondary: #ec4899;      /* Change secondary color */
    --accent: #14b8a6;         /* Change accent color */
    /* ... other variables ... */
}
```

## 📊 Performance Optimization

The website includes:
- **No external dependencies** (except Font Awesome icons)
- **Optimized animations** using CSS transforms
- **Lazy evaluation** of DOM queries
- **Keyboard navigation** support
- **Accessibility-friendly** design

## 🔍 SEO Optimization

- Semantic HTML5 tags (`<section>`, `<article>`, `<nav>`, etc.)
- Meta tags for description and theme color
- Proper heading hierarchy
- Structured content

## 🖥️ Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Partial support (no CSS Grid, limited animations)

## 📝 Future Enhancement Ideas

1. Add dark/light mode toggle
2. Add blog section with articles
3. Add testimonials carousel
4. Integrate with CMS (Contentful, Sanity)
5. Add animation preferences (respects `prefers-reduced-motion`)
6. Add service worker for offline support
7. Implement PWA capabilities
8. Add email service integration (EmailJS, Formspree)

## 📧 Contact Form Setup (Optional)

The contact form currently opens the default email client. To use a backend service:

### Option 1: Formspree (Recommended)
1. Visit [formspree.io](https://formspree.io)
2. Create an account and form
3. Update the form action in `index.html`

### Option 2: EmailJS
1. Visit [emailjs.com](https://emailjs.com)
2. Get your service ID and template ID
3. Update `script.js` to use EmailJS API

### Option 3: Backend API
Create your own backend endpoint and update the form submission in `script.js`

## 🎓 Learning Resources

This portfolio demonstrates:
- Modern CSS techniques (Grid, Flexbox, Gradients, Animations)
- Vanilla JavaScript best practices
- Responsive web design principles
- Semantic HTML5 structure
- Web accessibility basics
- Performance optimization

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🙏 Credits

- **Font Awesome** for icons
- **Inspired by** modern portfolio designs and best practices
- **Built with** ❤️ for Simarjit Singh

## 🐛 Troubleshooting

### Navigation links not working
- Make sure section IDs match the href values in navigation

### Animations not playing
- Check if CSS animations are enabled in browser
- Verify JavaScript file is loaded (check browser console)

### Form not submitting
- Check browser console for errors
- Verify email client is configured on the system
- Consider using Formspree or EmailJS as alternatives

### Mobile menu not closing
- Clear browser cache
- Verify `hamburger` and `navMenu` IDs exist in HTML

## 📞 Support

For questions or issues:
- Check the troubleshooting section above
- Review the customization guide
- Inspect browser console for error messages
- Review the code comments in HTML/CSS/JS files

---

**Happy coding!** 🚀 Feel free to use and modify this portfolio for your professional needs.
