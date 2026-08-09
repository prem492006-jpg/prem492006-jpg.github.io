```javascript
/* =========================================================
   PREM KUMAR PORTFOLIO — MODERN JAVASCRIPT
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


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

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


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    renderSkills();
    renderCertificates();

    setupMobileMenu();
    setupNavigation();
    setupScrollAnimations();

    setupCertificateModal();
    setupBackToTop();

    setupThemeToggle();
    setupMouseGlow();

    setupCardTilt();
    setupContactForm();

    setupLazyLoading();

    updateActiveNavLink();

    console.log(
        "%c✨ Welcome to Prem Kumar's Portfolio",
        "font-size:20px;color:#5a67d8;font-weight:bold;"
    );

    console.log(
        "%cModern Portfolio Loaded 🚀",
        "font-size:14px;color:#00d4ff;"
    );
});


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function setupMobileMenu() {

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        const expanded =
            hamburger.classList.contains('active');

        hamburger.setAttribute(
            'aria-expanded',
            expanded
        );
    });

    const navLinks =
        document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {

        link.addEventListener('click', () => {

            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            hamburger.setAttribute(
                'aria-expanded',
                'false'
            );
        });

    });
}


/* =========================================================
   NAVBAR + ACTIVE SECTION
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

    /* Navbar effect */

    if (scrollY > 50) {

        navbar?.classList.add('scrolled');

    } else {

        navbar?.classList.remove('scrolled');

    }


    /* Back to top */

    if (scrollY > 500) {

        backToTop?.classList.add('show');

    } else {

        backToTop?.classList.remove('show');

    }


    updateActiveNavLink();
}


function updateActiveNavLink() {

    const sections =
        document.querySelectorAll('section[id]');

    const navLinks =
        document.querySelectorAll('.nav-link');

    const scrollPosition =
        window.scrollY + 180;

    let currentSection = '';

    sections.forEach(section => {

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
            scrollPosition >= top &&
            scrollPosition < top + height
        ) {

            currentSection =
                section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        const target =
            link.getAttribute('href');

        if (
            currentSection &&
            target === `#${currentSection}`
        ) {

            link.classList.add('active');

        }

    });
}


/* =========================================================
   RENDER SKILLS
   ========================================================= */

function renderSkills() {

    if (!skillsGrid) return;

    skillsGrid.innerHTML =
        skillsData.map((skill, index) => `

        <div
            class="skill-card scroll-fade"
            style="--delay:${index * 80}ms"
        >

            <div class="skill-icon">
                ${skill.icon}
            </div>

            <h3 class="skill-name">
                ${skill.name}
            </h3>

            <p class="skill-description">
                ${skill.description}
            </p>

        </div>

    `).join('');
}


/* =========================================================
   RENDER CERTIFICATES
   ========================================================= */

function renderCertificates() {

    if (!certificatesGrid) return;

    certificatesGrid.innerHTML =
        certificatesData.map((cert, index) => `

        <article
            class="certificate-card scroll-fade"
            style="--delay:${index * 100}ms"
        >

            <img
                src="${cert.image}"
                alt="${cert.title}"
                class="certificate-image"
                loading="lazy"
                data-certificate="${cert.image}"
                data-title="${cert.title}"
            >

            <div class="certificate-details">

                <h3 class="certificate-title">
                    ${cert.title}
                </h3>

                <p class="certificate-org">
                    ${cert.organization}
                </p>

                <p class="certificate-date">
                    ${cert.date}
                </p>

                <a
                    href="${cert.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-secondary certificate-button"
                >
                    View Certificate
                </a>

            </div>

        </article>

    `).join('');
}


/* =========================================================
   CERTIFICATE MODAL
   ========================================================= */

function setupCertificateModal() {

    if (!certificatesGrid || !certModal) return;

    certificatesGrid.addEventListener(
        'click',
        event => {

            const image =
                event.target.closest(
                    '.certificate-image'
                );

            if (!image) return;

            openCertificateModal(
                image.dataset.certificate,
                image.dataset.title
            );

        }
    );


    modalClose?.addEventListener(
        'click',
        closeModal
    );


    certModal.addEventListener(
        'click',
        event => {

            if (event.target === certModal) {

                closeModal();

            }

        }
    );


    document.addEventListener(
        'keydown',
        event => {

            if (
                event.key === 'Escape' &&
                certModal.classList.contains('active')
            ) {

                closeModal();

            }

        }
    );
}


function openCertificateModal(
    imageSrc,
    title
) {

    if (!certModal || !modalImage) return;

    modalImage.src = imageSrc;
    modalImage.alt = title;

    certModal.classList.add('active');

    document.body.style.overflow = 'hidden';

}


function closeModal() {

    if (!certModal) return;

    certModal.classList.remove('active');

    document.body.style.overflow = '';

}


/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */

function setupScrollAnimations() {

    const elements =
        document.querySelectorAll(
            '.scroll-fade'
        );

    if (!elements.length) return;


    /* Fallback */

    if (!('IntersectionObserver' in window)) {

        elements.forEach(element => {

            element.classList.add('visible');

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const element =
                        entry.target;

                    const delay =
                        element.style
                            .getPropertyValue('--delay');

                    if (delay) {

                        element.style.transitionDelay =
                            delay;

                    }

                    element.classList.add('visible');

                    observer.unobserve(element);

                });

            },
            {
                threshold: 0.12,
                rootMargin:
                    '0px 0px -60px 0px'
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });
}


/* =========================================================
   BACK TO TOP
   ========================================================= */

function setupBackToTop() {

    if (!backToTop) return;

    backToTop.addEventListener(
        'click',
        () => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        }
    );
}


/* =========================================================
   DARK / LIGHT THEME
   ========================================================= */

function setupThemeToggle() {

    /* Create theme button */

    const themeButton =
        document.createElement('button');

    themeButton.className =
        'theme-toggle';

    themeButton.type = 'button';

    themeButton.setAttribute(
        'aria-label',
        'Toggle theme'
    );

    themeButton.innerHTML = '☀️';


    /* Add button to navigation */

    const navContainer =
        document.querySelector(
            '.nav-container'
        );

    if (navContainer) {

        navContainer.insertBefore(
            themeButton,
            hamburger
        );

    }


    /* Load saved theme */

    const savedTheme =
        localStorage.getItem(
            'portfolio-theme'
        );


    if (savedTheme === 'light') {

        document.body.classList.add(
            'light-theme'
        );

        themeButton.innerHTML = '🌙';

    } else {

        themeButton.innerHTML = '☀️';

    }


    /* Toggle theme */

    themeButton.addEventListener(
        'click',
        () => {

            document.body.classList.toggle(
                'light-theme'
            );

            const isLight =
                document.body.classList.contains(
                    'light-theme'
                );


            localStorage.setItem(
                'portfolio-theme',
                isLight
                    ? 'light'
                    : 'dark'
            );


            themeButton.innerHTML =
                isLight
                    ? '🌙'
                    : '☀️';


            /* Small animation */

            themeButton.classList.add(
                'theme-changing'
            );

            setTimeout(() => {

                themeButton.classList.remove(
                    'theme-changing'
                );

            }, 400);

        }
    );
}


/* =========================================================
   MOUSE FOLLOW GLOW
   ========================================================= */

function setupMouseGlow() {

    /* Disable on touch devices */

    if (
        window.matchMedia(
            '(hover: none)'
        ).matches
    ) return;


    const glow =
        document.createElement('div');

    glow.className =
        'mouse-glow';

    document.body.appendChild(glow);


    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;


    document.addEventListener(
        'mousemove',
        event => {

            mouseX = event.clientX;
            mouseY = event.clientY;

        }
    );


    function animateGlow() {

        glowX +=
            (mouseX - glowX) * 0.08;

        glowY +=
            (mouseY - glowY) * 0.08;


        glow.style.transform =
            `translate3d(${glowX}px, ${glowY}px, 0)`;


        requestAnimationFrame(
            animateGlow
        );

    }


    animateGlow();
}


/* =========================================================
   3D CARD HOVER EFFECT
   ========================================================= */

function setupCardTilt() {

    if (
        window.matchMedia(
            '(hover: none)'
        ).matches
    ) return;


    const cards =
        document.querySelectorAll(
            '.skill-card, .certificate-card'
        );


    cards.forEach(card => {

        card.addEventListener(
            'mousemove',
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -4;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 4;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            'mouseleave',
            () => {

                card.style.transform = '';

            }
        );

    });
}


/* =========================================================
   CONTACT FORM
   ========================================================= */

function setupContactForm() {

    if (!contactForm) return;


    contactForm.addEventListener(
        'submit',
        event => {

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            if (!submitButton) return;


            submitButton.disabled = true;

            const originalText =
                submitButton.innerHTML;


            submitButton.innerHTML =
                'Sending...';


            /*
             * Formspree will still handle
             * the actual submission.
             */

            setTimeout(() => {

                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalText;

            }, 3000);

        }
    );
}


/* =========================================================
   LAZY IMAGE LOADING
   ========================================================= */

function setupLazyLoading() {

    const images =
        document.querySelectorAll(
            'img[loading="lazy"]'
        );


    if (
        !('IntersectionObserver' in window)
    ) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const image =
                            entry.target;

                        image.classList.add(
                            'image-loaded'
                        );

                        observer.unobserve(
                            image
                        );

                    }

                });

            },
            {
                rootMargin:
                    '100px'
            }
        );


    images.forEach(image => {

        observer.observe(image);

    });
}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function smoothScroll(target) {

    const element =
        document.querySelector(target);

    if (!element) return;


    const navbarHeight =
        navbar
            ? navbar.offsetHeight
            : 0;


    const targetPosition =
        element.offsetTop -
        navbarHeight;


    window.scrollTo({

        top: targetPosition,

        behavior: 'smooth'

    });
}


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener(
    'keydown',
    event => {

        /* Close mobile menu with Escape */

        if (
            event.key === 'Escape' &&
            navMenu?.classList.contains(
                'active'
            )
        ) {

            hamburger?.classList.remove(
                'active'
            );

            navMenu.classList.remove(
                'active'
            );

        }

    }
);


/* =========================================================
   REDUCED MOTION SUPPORT
   ========================================================= */

const reducedMotion =
    window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    );


if (reducedMotion.matches) {

    document.documentElement.style
        .scrollBehavior = 'auto';

}


/* =========================================================
   RESIZE HANDLER
   ========================================================= */

let resizeTimer;

window.addEventListener(
    'resize',
    () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            /* Close mobile menu */

            if (
                window.innerWidth > 768
            ) {

                hamburger?.classList.remove(
                    'active'
                );

                navMenu?.classList.remove(
                    'active'
                );

            }

        }, 200);

    }
);


/* =========================================================
   PAGE LOADED
   ========================================================= */

window.addEventListener(
    'load',
    () => {

        document.body.classList.add(
            'page-loaded'
        );

    }
);
```
