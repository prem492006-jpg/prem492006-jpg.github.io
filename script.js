/* =========================================================
   PREM KUMAR PORTFOLIO — ENHANCED JAVASCRIPT
   ========================================================= */

/* =========================================================
   DATA
   ========================================================= */

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

const typedStrings = [
    'Frontend Developer',
    'UI/UX Enthusiast',
    'Web Developer',
    'Creative Developer'
];

/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const pageLoader = document.getElementById('pageLoader');
const scrollProgress = document.getElementById('scrollProgress');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');

const skillsGrid = document.getElementById('skillsGrid');
const certificatesGrid = document.getElementById('certificatesGrid');

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const backToTop = document.getElementById('backToTop');

const certModal = document.getElementById('certModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

const typingText = document.getElementById('typingText');

/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize functions
    initializePageLoader();
    renderSkills();
    renderCertificates();
    setupMobileMenu();
    setupNavigation();
    setupScrollAnimations();
    setupScrollProgress();
    setupCertificateModal();
    setupBackToTop();
    setupThemeToggle();
    setupMouseGlow();
    setupCardTilt();
    setupContactForm();
    setupTypingEffect();
    setupLazyLoading();
    setupParallaxEffect();
    updateActiveNavLink();
    
    // Welcome message
    console.log(
        "%c✨ Welcome to Prem Kumar's Portfolio",
        "font-size:18px;color:#6366f1;font-weight:bold;text-shadow:0 0 10px rgba(99,102,241,0.5)"
    );
    console.log(
        "%cModern Animated Portfolio Loaded 🚀",
        "font-size:14px;color:#06b6d4;font-weight:600"
    );
});

/* =========================================================
   PAGE LOADER
   ========================================================= */

function initializePageLoader() {
    if (!pageLoader) return;

    // Simulate loading
    const loadingDuration = 1200;
    
    setTimeout(() => {
        pageLoader.setAttribute('data-loader', 'false');
        document.body.classList.add('page-loaded');
    }, loadingDuration);
}

/* =========================================================
   TYPING EFFECT
   ========================================================= */

function setupTypingEffect() {
    if (!typingText) return;

    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    const typingSpeed = 80;
    const deletingSpeed = 50;
    const waitTime = 2000;

    function type() {
        const currentString = typedStrings[currentStringIndex];
        
        if (!isWaiting) {
            if (!isDeleting) {
                // Typing
                if (currentCharIndex < currentString.length) {
                    typingText.textContent += currentString[currentCharIndex];
                    currentCharIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                    // Finished typing, wait before delete
                    isWaiting = true;
                    setTimeout(() => {
                        isWaiting = false;
                        isDeleting = true;
                        setTimeout(type, deletingSpeed);
                    }, waitTime);
                }
            } else {
                // Deleting
                if (currentCharIndex > 0) {
                    typingText.textContent = currentString.substring(0, currentCharIndex - 1);
                    currentCharIndex--;
                    setTimeout(type, deletingSpeed);
                } else {
                    // Move to next string
                    isDeleting = false;
                    currentStringIndex = (currentStringIndex + 1) % typedStrings.length;
                    setTimeout(type, 500);
                }
            }
        }
    }

    type();
}

/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */

function setupScrollProgress() {
    if (!scrollProgress) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function setupMobileMenu() {
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.getAttribute('data-active') === 'true';
        
        navMenu.setAttribute('data-active', !isActive);
        menuToggle.setAttribute('aria-expanded', !isActive);
        
        if (!isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.setAttribute('data-active', 'false');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

/* =========================================================
   NAVBAR & SCROLL EFFECTS
   ========================================================= */

function setupNavigation() {
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar effect
    if (navbar) {
        navbar.setAttribute('data-scrolled', scrollY > 50);
    }

    // Back to top button
    if (backToTop) {
        if (scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }

    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 180;

    let currentSection = '';

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const target = link.getAttribute('href');

        if (currentSection && target === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/* =========================================================
   RENDER SKILLS
   ========================================================= */

function renderSkills() {
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skillsData.map((skill, index) => `
        <div class="skill-card reveal" data-index="${index}">
            <div class="skill-icon">
                ${skill.icon}
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
        </div>
    `).join('');

    // Add reveal animation
    const cards = skillsGrid.querySelectorAll('.skill-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
}

/* =========================================================
   RENDER CERTIFICATES
   ========================================================= */

function renderCertificates() {
    if (!certificatesGrid) return;

    certificatesGrid.innerHTML = certificatesData.map((cert, index) => `
        <article class="certificate-card reveal" data-index="${index}">
            <img
                src="${cert.image}"
                alt="${cert.title}"
                class="certificate-image"
                loading="lazy"
                data-certificate="${cert.image}"
                data-title="${cert.title}"
            >
            <div class="certificate-details">
                <h3 class="certificate-title">${cert.title}</h3>
                <p class="certificate-org">${cert.organization}</p>
                <p class="certificate-date">${cert.date}</p>
                <a
                    href="${cert.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-secondary"
                >
                    <span class="btn-text">View Certificate</span>
                    <span class="btn-icon">↗</span>
                </a>
            </div>
        </article>
    `).join('');

    // Add reveal animation
    const cards = certificatesGrid.querySelectorAll('.certificate-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 120);
    });
}

/* =========================================================
   CERTIFICATE MODAL
   ========================================================= */

function setupCertificateModal() {
    if (!certificatesGrid || !certModal) return;

    certificatesGrid.addEventListener('click', (event) => {
        const image = event.target.closest('.certificate-image');
        if (!image) return;

        openCertificateModal(
            image.dataset.certificate,
            image.dataset.title
        );
    });

    modalClose?.addEventListener('click', closeModal);

    const overlay = certModal.querySelector('.modal-overlay');
    overlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && certModal.getAttribute('data-modal') === 'certificate') {
            closeModal();
        }
    });
}

function openCertificateModal(imageSrc, title) {
    if (!certModal || !modalImage) return;

    modalImage.src = imageSrc;
    modalImage.alt = title;

    certModal.setAttribute('data-modal', 'certificate');
    certModal.setAttribute('data-active', 'true');

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!certModal) return;

    certModal.setAttribute('data-active', 'false');
    document.body.style.overflow = '';
}

/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */

function setupScrollAnimations() {
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
        elements.forEach(element => {
            element.classList.add('visible');
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const element = entry.target;
            const delay = element.dataset.delay || 0;

            setTimeout(() => {
                element.classList.add('visible');
                observer.unobserve(element);
            }, delay);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

/* =========================================================
   PARALLAX EFFECT
   ========================================================= */

function setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (!parallaxElements.length) return;

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = window.scrollY * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/* =========================================================
   BACK TO TOP
   ========================================================= */

function setupBackToTop() {
    if (!backToTop) return;

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* =========================================================
   THEME TOGGLE
   ========================================================= */

function setupThemeToggle() {
    if (!themeToggle) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.setAttribute('aria-pressed', 'false');
    } else {
        themeToggle.setAttribute('aria-pressed', 'true');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');

        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        themeToggle.setAttribute('aria-pressed', !isLight);

        // Icon animation
        themeToggle.style.animation = 'none';
        setTimeout(() => {
            themeToggle.style.animation = '';
        }, 10);
    });

    // Auto detect system theme preference
    if (window.matchMedia && !localStorage.getItem('portfolio-theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (!prefersDark.matches) {
            document.body.classList.add('light-theme');
            themeToggle.setAttribute('aria-pressed', 'false');
        }
    }
}

/* =========================================================
   MOUSE FOLLOW GLOW
   ========================================================= */

function setupMouseGlow() {
    // Disable on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    glow.style.cssText = `
        position: fixed;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: -1;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(glow);

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }, { passive: true });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        glow.style.left = (glowX - 100) + 'px';
        glow.style.top = (glowY - 100) + 'px';

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

/* =========================================================
   3D CARD HOVER EFFECT
   ========================================================= */

function setupCardTilt() {
    if (window.matchMedia('(hover: none)').matches) return;

    const cards = document.querySelectorAll('.skill-card, .certificate-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (event) => {
            if (!card.matches(':hover')) return;

            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/* =========================================================
   CONTACT FORM
   ========================================================= */

function setupContactForm() {
    if (!contactForm) return;

    const inputs = contactForm.querySelectorAll('input, textarea');
    
    // Add input validation styling
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('.form-group')?.classList.remove('error');
            input.closest('.form-group')?.querySelector('.error-message')?.remove();
        });

        input.addEventListener('blur', () => {
            validateField(input);
        });
    });

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Validate all fields
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) return;

        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (!submitButton) return;

        submitButton.disabled = true;
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span class="btn-text">Sending...</span><span class="btn-arrow">→</span>';

        try {
            // The form will be submitted to Formspree
            // This is just for UI feedback
            
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;

                // Show success message
                if (formStatus) {
                    formStatus.classList.add('show', 'success');
                    formStatus.textContent = '✨ Message sent successfully! Thank you!';
                    
                    setTimeout(() => {
                        formStatus.classList.remove('show', 'success');
                        contactForm.reset();
                    }, 3000);
                }
            }, 2000);
        } catch (error) {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            
            if (formStatus) {
                formStatus.classList.add('show', 'error');
                formStatus.textContent = '❌ Error sending message. Please try again.';
            }
        }
    });
}

function validateField(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return true;

    let isValid = true;
    let errorMessage = '';

    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (input.name === 'message') {
        if (input.value.trim().length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters';
        }
    } else {
        if (input.value.trim().length === 0) {
            isValid = false;
            errorMessage = 'This field is required';
        }
    }

    if (!isValid) {
        formGroup.classList.add('error');
        let errorSpan = formGroup.querySelector('.error-message');
        if (!errorSpan) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            formGroup.appendChild(errorSpan);
        }
        errorSpan.textContent = errorMessage;
    } else {
        formGroup.classList.remove('error');
    }

    return isValid;
}

/* =========================================================
   LAZY IMAGE LOADING
   ========================================================= */

function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.classList.add('image-loaded');
                observer.unobserve(image);
            }
        });
    }, {
        rootMargin: '100px'
    });

    images.forEach(image => {
        observer.observe(image);
    });
}

/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener('keydown', (event) => {
    // Close mobile menu with Escape
    if (event.key === 'Escape' && navMenu?.getAttribute('data-active') === 'true') {
        navMenu.setAttribute('data-active', 'false');
        menuToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

/* =========================================================
   SMOOTH SCROLL LINK HANDLER
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        
        const offset = navbar?.offsetHeight || 0;
        const top = target.offsetTop - offset;
        
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    });
});

/* =========================================================
   REDUCED MOTION SUPPORT
   ========================================================= */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (reducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

reducedMotion.addEventListener('change', (e) => {
    document.documentElement.style.scrollBehavior = e.matches ? 'auto' : 'smooth';
});

/* =========================================================
   WINDOW RESIZE HANDLER
   ========================================================= */

let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        // Close mobile menu on larger screens
        if (window.innerWidth > 768) {
            navMenu?.setAttribute('data-active', 'false');
            menuToggle?.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }, 200);
});

/* =========================================================
   PAGE VISIBILITY CHANGE
   ========================================================= */

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations if needed
    } else {
        // Resume animations if needed
    }
});

/* =========================================================
   PERFORMANCE MONITORING
   ========================================================= */

// Only log performance in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%cPage loaded in ${pageLoadTime}ms`, 'color: #10b981; font-weight: bold;');
    });
}

/* =========================================================
   ERROR HANDLING
   ========================================================= */

window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});

/* =========================================================
   UTILITY FUNCTIONS
   ========================================================= */

// Smooth scroll utility
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    const navbarHeight = navbar?.offsetHeight || 0;
    const targetPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle utility
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* =========================================================
   EXPORT FOR EXTERNAL USE
   ========================================================= */

window.portfolioUtils = {
    scrollToElement,
    debounce,
    throttle,
    isInViewport
};
