/* ====================================
   PORTFOLIO JAVASCRIPT
   ==================================== */

// ====================================
// DATA STRUCTURES
// ====================================

// Skills data - Easy to update
const skillsData = [
    { name: 'HTML5', icon: '📝', description: 'Semantic markup' },
    { name: 'CSS3', icon: '🎨', description: 'Modern styling' },
    { name: 'JavaScript', icon: '⚡', description: 'Interactivity' },
    { name: 'Python', icon: '🐍', description: 'Backend basics' },
    { name: 'Flask', icon: '🍶', description: 'Web framework' },
    { name: 'SQL', icon: '🗄️', description: 'Database design' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database' },
    { name: 'Figma', icon: '🎯', description: 'UI/UX design' },
    { name: 'Git', icon: '📦', description: 'Version control' },
    { name: 'GitHub', icon: '🐙', description: 'Code hosting' }
];

// Certificates data - Easy to update
// TO ADD NEW CERTIFICATES:
// 1. Add image to images/certificates/ folder
// 2. Add new object to this array with matching image path
// Example:
// {
//     image: 'images/certificates/certificate4.jpg',
//     title: 'Advanced Web Development',
//     organization: 'Some Platform',
//     date: '2024',
//     link: 'certificates/certificate4.pdf'
// }

const certificatesData = [
    {
        image: 'images/certificates/cert1.jpg',
        title: 'Python Programming Certificate',
        organization: 'Certification Platform',
        date: '2023',
        link: 'certificates/cert1.pdf'
    },
    {
        image: 'images/certificates/cert2.jpg',
        title: 'Web Development Fundamentals',
        organization: 'Online Learning Platform',
        date: '2023',
        link: 'certificates/cert2.pdf'
    },
    {
        image: 'images/certificates/cert3.jpg',
        title: 'AI & Data Science Basics',
        organization: 'Tech Academy',
        date: '2024',
        link: 'certificates/cert3.pdf'
    },
    {
        image: 'images/certificates/cert4.jpg',
        title: 'ICT Academy Certification',
        organization: 'ICT Academy',
        date: '2024',
        link: 'certificates/cert4.pdf'
    }
];

// ====================================
// DOM ELEMENTS
// ====================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const skillsGrid = document.getElementById('skillsGrid');
const certificatesGrid = document.getElementById('certificatesGrid');
const contactForm = document.getElementById('contactForm');
const backToTop = document.getElementById('backToTop');
const certModal = document.getElementById('certModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

// ====================================
// INITIALIZATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderCertificates();
    setupEventListeners();
    setupScrollAnimations();
    setupNavigation();
});

// ====================================
// NAVIGATION & MENU
// ====================================

/**
 * Setup hamburger menu toggle
 */
function setupEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Back to top button
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) closeModal();
    });

    // Contact form
    contactForm.addEventListener('submit', handleFormSubmit);
}

/**
 * Setup navbar active state on scroll
 */
function setupNavigation() {
    window.addEventListener('scroll', () => {
        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
            navbar.classList.add('scrolled');
        } else {
            backToTop.classList.remove('show');
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNavLink();
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to current link
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// ====================================
// RENDER SKILLS
// ====================================

/**
 * Render skills from data
 */
function renderSkills() {
    skillsGrid.innerHTML = skillsData.map(skill => `
        <div class="skill-card fade-in">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
        </div>
    `).join('');
}

// ====================================
// RENDER CERTIFICATES
// ====================================

/**
 * Render certificates from data
 */
function renderCertificates() {
    certificatesGrid.innerHTML = certificatesData.map((cert, index) => `
        <div class="certificate-card fade-in">
            <img 
                src="${cert.image}" 
                alt="${cert.title}" 
                class="certificate-image"
                onclick="openCertificateModal('${cert.image}', '${cert.title}')"
            >
            <div class="certificate-details">
                <h3 class="certificate-title">${cert.title}</h3>
                <p class="certificate-org">${cert.organization}</p>
                <p class="certificate-date">${cert.date}</p>
                <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary certificate-button" style="margin-top: auto;">
                    View Certificate
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Open certificate modal
 */
function openCertificateModal(imageSrc, title) {
    modalImage.src = imageSrc;
    modalImage.alt = title;
    certModal.classList.add('active');
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

/**
 * Close certificate modal
 */
function closeModal() {
    certModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal.classList.contains('active')) {
        closeModal();
    }
});

// ====================================
// FORM HANDLING
// ====================================

/**
 * Handle contact form submission
 * 
 * IMPORTANT: This is frontend only and doesn't send emails.
 * To enable email functionality, choose one:
 * 
 * OPTION 1: Using Formspree (Recommended)
 * 1. Go to https://formspree.io/
 * 2. Create account and verify your email
 * 3. Create new form and copy your form ID
 * 4. Change form action: <form action="https://formspree.io/f/YOUR_ID" method="POST">
 * 5. Remove this JavaScript handler
 * 
 * OPTION 2: Using EmailJS
 * 1. Go to https://www.emailjs.com/
 * 2. Create account and get API credentials
 * 3. Install EmailJS via CDN in HTML head
 * 4. Replace this function with EmailJS code from their docs
 * 
 * OPTION 3: Using mailto (Simplest)
 * Change the form to use: mailto:[your-email]@example.com
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Option A: Open default email client
    // Uncomment below to use mailto:
    /*
    window.location.href = `mailto:[Your Email]?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`;
    */

    // Option B: Show success message (for demo purposes)
    alert(`Thank you for your message, ${name}!\n\nSince this is a frontend-only portfolio, please use:\n\n1. Formspree.io - For form handling\n2. EmailJS - For client-side email\n3. Your email client - For direct contact\n\nPlease refer to the script.js comments for setup instructions.`);

    // Clear form
    contactForm.reset();
}

// ====================================
// SCROLL ANIMATIONS
// ====================================

/**
 * Setup Intersection Observer for fade-in animations
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.scroll-fade, .fade-in').forEach(element => {
        observer.observe(element);
    });

    // Also observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ====================================
// UTILITY FUNCTIONS
// ====================================

/**
 * Smooth scroll to element
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Debounce function for scroll events
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ====================================
// ACCESSIBILITY ENHANCEMENTS
// ====================================

// Skip to content link
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
        const navbar = document.querySelector('.navbar');
        if (navbar && navbar.classList.contains('scrolled') === false) {
            // Already handled by browser default
        }
    }
});

// ====================================
// PERFORMANCE OPTIMIZATIONS
// ====================================

// Lazy load images (if needed for certificates)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ====================================
// CONSOLE MESSAGE
// ====================================

console.log('%c✨ Welcome to Prem Kumar\'s Portfolio', 'font-size: 20px; color: #5a67d8; font-weight: bold;');
console.log('%cCheck out the source code!', 'font-size: 14px; color: #00d4ff;');
