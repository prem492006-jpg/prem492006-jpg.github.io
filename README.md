# Prem Kumar - Personal Portfolio Website

A modern, professional, and responsive personal portfolio website built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Perfect for showcasing your work as a BCA student and aspiring frontend developer.

## ✨ Features

- **Modern Premium Design** - Dark theme with electric blue accents
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **No Dependencies** - Pure HTML, CSS, and JavaScript (no frameworks)
- **Smooth Animations** - Elegant scroll effects and transitions
- **Accessibility First** - Semantic HTML, keyboard navigation, ARIA labels
- **Easy to Customize** - Well-organized code with clear comments
- **Performance Optimized** - Lightweight and fast-loading
- **SEO Ready** - Proper meta tags and semantic HTML

## 📁 File Structure

```
portfolio/
├── index.html                 # Main HTML file
├── style.css                  # All styling with CSS variables
├── script.js                  # JavaScript for interactivity
├── README.md                  # This file
│
├── images/
│   ├── profile.jpg           # Your profile photo (Replace this)
│   └── certificates/
│       ├── cert1.jpg         # Certificate images
│       ├── cert2.jpg
│       ├── cert3.jpg
│       └── cert4.jpg
│
├── certificates/             # Optional: PDF certificates
│   ├── cert1.pdf
│   ├── cert2.pdf
│   └── cert3.pdf
│
└── resume/
    └── resume.pdf            # Your resume (Replace this)
```

## 🚀 Quick Start

### 1. **Setup**
- Clone or download this portfolio
- No build process needed!
- Simply open `index.html` in your browser

### 2. **Replace Placeholder Information**

Find and replace these placeholders throughout the project:

```
[Your Email]          → your.email@gmail.com
[Your Phone]          → +91 XXXXXXXXXX
[Your Location]       → City, State, Country
[Your College Name]   → Your College/University
[GitHub URL]          → https://github.com/yourusername
[LinkedIn URL]        → https://linkedin.com/in/yourprofile
```

**Files to update:**
- `index.html` - All contact information and social links
- `style.css` - Color scheme (optional, uses CSS variables)

---

## 📝 How to Customize

### **1. Update Personal Information**

In `index.html`, find and update:

```html
<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="accent">Your Name</span></h1>
<p class="hero-subtitle">BCA Student | Frontend Developer | UI/UX Enthusiast</p>

<!-- About Section -->
<p class="info-value">[Your College Name]</p>
<p class="info-value">[Your Location]</p>

<!-- Contact Section -->
<a href="mailto:[Your Email]">[Your Email]</a>
<a href="tel:[Your Phone]">[Your Phone]</a>
<a href="[GitHub URL]" target="_blank">GitHub</a>
<a href="[LinkedIn URL]" target="_blank">LinkedIn</a>

<!-- Footer -->
<p>&copy; 2026 Your Name. All Rights Reserved.</p>
```

### **2. Replace Profile Photo**

1. **Add your photo:**
   - Place your photo in `images/` folder
   - Name it `profile.jpg` (or another name)
   - Recommended size: 350x350px, square format
   - Supports: JPG, PNG, WebP

2. **Update HTML:**
   ```html
   <img src="images/profile.jpg" alt="Your Name - Profile Photo" class="profile-img">
   ```

3. **Image Optimization Tips:**
   - Use 350x350px resolution for profile picture
   - Compress with TinyPNG or similar
   - Use PNG for transparency, JPG for photos

### **3. Update Skills**

Skills are in `script.js` - very easy to modify!

**Find this section:**
```javascript
const skillsData = [
    { name: 'HTML5', icon: '📝', description: 'Semantic markup' },
    { name: 'CSS3', icon: '🎨', description: 'Modern styling' },
    // ... more skills
];
```

**To add a new skill:**
```javascript
{ name: 'React', icon: '⚛️', description: 'UI library' }
```

**To remove a skill:** Simply delete the line

**Available emoji icons:**
- Frontend: 📝 📱 ⚡ 🎨 🎯 🖥️
- Backend: 🐍 🍶 🗄️ 🍃
- Tools: 📦 🐙 🔧 📊
- [More emojis](https://emojipedia.org/)

### **4. Add New Certificates** ⭐ Easy!

**Step 1: Add certificate image**
- Add image to `images/certificates/` folder
- Example: `certificate_aws.jpg`

**Step 2: Update script.js**

Find this section in `script.js`:
```javascript
const certificatesData = [
    {
        image: 'images/certificates/cert1.jpg',
        title: 'Python Programming Certificate',
        organization: 'Certification Platform',
        date: '2023',
        link: 'certificates/cert1.pdf'
    },
    // Add your new certificate here
];
```

**Add your new certificate:**
```javascript
{
    image: 'images/certificates/aws_certified.jpg',
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: '2024',
    link: 'certificates/aws_certified.pdf'
}
```

**That's it!** The certificate will automatically appear on your website.

**Optional: Add PDF link**
- Place PDF in `certificates/` folder
- Update the `link` field in the data
- When user clicks "View Certificate", it opens in new tab

### **5. Replace Resume**

1. **Save your resume:**
   - Place PDF in `resume/` folder
   - Name it `resume.pdf`
   - Recommended: Use professional format

2. **Update if needed (optional):**
   ```html
   <a href="resume/your_resume.pdf" class="btn btn-secondary" download>
       Download Resume
   </a>
   ```

### **6. Update Colors (Advanced)**

Edit CSS variables in `style.css`:

```css
:root {
    /* Change primary color */
    --primary-color: #5a67d8;        /* Electric blue */
    --primary-dark: #434eb9;
    
    /* Change accent color */
    --accent-color: #00d4ff;          /* Cyan */
    --accent-secondary: #7c3aed;      /* Purple */
    
    /* Or use this purple theme instead: */
    /* --primary-color: #7c3aed; */
    /* --accent-color: #ec4899; */
}
```

**Popular color combinations:**
- Blue + Cyan: `#5a67d8` + `#00d4ff`
- Purple + Pink: `#7c3aed` + `#ec4899`
- Orange + Yellow: `#f97316` + `#fbbf24`

---

## 📧 Enable Email on Contact Form

**Currently**, the contact form is frontend-only and doesn't send emails.

Choose one of these options to enable emails:

### **Option 1: Formspree (Recommended - Free & Easy)**

1. Go to [formspree.io](https://formspree.io/)
2. Sign up (takes 2 minutes)
3. Create a new form, get your form ID
4. In `index.html`, find:
   ```html
   <form class="contact-form" id="contactForm">
   ```
5. Change to:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Remove `id="contactForm"` and the form handler in `script.js`
7. Done! Emails will go to your inbox

### **Option 2: EmailJS (Free & Client-side)**

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create account and get API credentials
3. Follow their setup guide for vanilla JavaScript
4. Add to `index.html` head:
   ```html
   <script type="text/javascript"
       src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js">
   </script>
   ```
5. In `script.js`, replace the `handleFormSubmit` function with EmailJS code

### **Option 3: mailto Link (Simplest)**

For a quick solution, use mailto:
```html
<form action="mailto:your.email@gmail.com" method="POST" enctype="text/plain">
    <!-- form fields -->
</form>
```

**Note:** Opens user's default email client

---

## 🎨 Customization Guide

### **Navigation Links**
Edit in `index.html`:
```html
<ul class="nav-menu" id="navMenu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#certificates">Certificates</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

### **Social Links**
In Contact section of `index.html`:
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<!-- Add more: Twitter, Portfolio, etc. -->
```

### **About Section**
Replace the placeholder text with your bio:
```html
<p>I am a dedicated BCA student...</p>
<p>My approach combines...</p>
```

---

## 📱 Responsive Breakpoints

The website is responsive at all sizes:

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

No changes needed! CSS handles it automatically.

---

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ ARIA labels for icons
- ✅ Keyboard navigation
- ✅ Focus visible states
- ✅ Good color contrast
- ✅ Respects prefers-reduced-motion

---

## 🚀 Deploy on GitHub Pages (FREE!)

### **Step 1: Create GitHub Repository**

1. Go to [github.com](https://github.com)
2. Click "New" to create new repository
3. Name it `yourusername.github.io`
4. Make it public
5. Click "Create repository"

### **Step 2: Upload Files**

**Option A: Using Git (Recommended)**
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy your portfolio files here
# (index.html, style.css, script.js, images/, etc.)

git add .
git commit -m "Initial portfolio commit"
git push origin main
```

**Option B: Upload via GitHub Web**
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Upload all files and folders
4. Commit changes

### **Step 3: Enable GitHub Pages**

1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Set source to `main` branch
4. Click Save

### **Step 4: Visit Your Site**

Your portfolio is now live at: `https://yourusername.github.io`

**Optional: Custom Domain**
- Buy a domain (Namecheap, GoDaddy, etc.)
- In Settings → Pages, add custom domain
- Follow their DNS setup guide

---

## 📊 SEO & Meta Tags

Already included:
- ✅ Page title
- ✅ Meta description
- ✅ Meta keywords
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Alt text for images

**To customize:**
In `index.html` head:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your unique description">
<meta property="og:title" content="Your Name">
```

---

## 🎯 Performance Tips

- Images are optimized
- No external frameworks (lightweight!)
- CSS is organized with variables
- JavaScript is modular and commented
- Page loads in < 1 second

**Further optimization:**
- Compress images with TinyPNG
- Minimize CSS/JS (if needed)
- Use WebP format for images
- Enable browser caching

---

## 🐛 Troubleshooting

### **Images not showing?**
- Check file paths are correct
- Image must be in `images/` folder
- Check file extension (jpg, png, etc.)

### **Form not working?**
- Setup Formspree or EmailJS
- Check console for errors (F12)
- Ensure email address is correct

### **Layout looks weird?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check on different browsers
- Test on mobile with DevTools

### **Navigation not sticky?**
- JavaScript should automatically handle it
- Check if navbar element is in HTML
- Console might show errors (F12)

---

## 📚 Code Structure

### **HTML (index.html)**
- Semantic HTML5 structure
- All text and structure
- Easy to understand

### **CSS (style.css)**
- CSS variables for easy customization
- Mobile-first approach
- Organized by sections
- Accessibility built-in

### **JavaScript (script.js)**
- Modular functions
- Clear comments
- Data-driven (skills, certificates)
- Event handlers

---

## 🔐 Privacy & Security

- No data collection
- No external analytics (unless you add Google Analytics)
- Contact form requires email service (Formspree/EmailJS)
- All code is client-side

---

## 📄 License

This portfolio template is yours to use and modify freely.

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

- [ ] Replace all [placeholders] with real information
- [ ] Add your profile photo
- [ ] Update skills with your actual skills
- [ ] Add your actual certificates
- [ ] Update resume file
- [ ] Setup email (Formspree/EmailJS)
- [ ] Test on mobile and desktop
- [ ] Check all links work
- [ ] Deploy to GitHub Pages
- [ ] Test on different browsers
- [ ] Share with friends/family

---

## 🎓 Learning Resources

**HTML/CSS/JavaScript:**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

**Design Inspiration:**
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [Awwwards](https://www.awwwards.com/)

**Deployment:**
- [GitHub Pages Docs](https://pages.github.com/)
- [Netlify](https://www.netlify.com/) (Alternative)
- [Vercel](https://vercel.com/) (Alternative)

---

## 💡 Next Steps

1. ✅ Customize portfolio with your information
2. ✅ Deploy to GitHub Pages
3. ✅ Share with recruiters and connections
4. ✅ Apply for internships and jobs
5. ✅ Keep adding projects to your portfolio

---

## 🎉 Good Luck!

Your professional portfolio is ready. Make it yours!

**Questions?** Check the comments in the code files.

---

**Last Updated:** 2024
**Version:** 1.0
**Made with ❤️ for aspiring developers**
