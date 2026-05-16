/* =============================================
   MODERN PORTFOLIO - JAVASCRIPT
   Clean, Minimal Interactivity
   ============================================= */

// Theme Management Workflow
class ThemeManager {
    constructor() {
        this.toggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        const saved = localStorage.getItem('theme') || 'light';
        this.setTheme(saved);

        if (this.toggle) {
            this.toggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = current === 'dark' ? 'light' : 'dark';
                this.setTheme(newTheme);
            });
            this.toggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const current = document.documentElement.getAttribute('data-theme') || 'light';
                    const newTheme = current === 'dark' ? 'light' : 'dark';
                    this.setTheme(newTheme);
                }
            });
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateIcon(theme);
    }

    updateIcon(theme) {
        if (this.toggle) {
            const icon = this.toggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }
}

// Mobile Responsive Drawer Menu Navigation
class MobileNav {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.menu = document.getElementById('navMenu');
        this.links = this.menu?.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        if (!this.hamburger) return;

        this.hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });

        this.links?.forEach(link => {
            link.addEventListener('click', () => {
                this.close();
            });
        });

        document.addEventListener('click', (e) => {
            if (this.menu?.classList.contains('active') && !e.target.closest('.navbar')) {
                this.close();
            }
        });
    }

    toggle() {
        const isOpen = this.menu?.classList.contains('active');
        this.menu?.classList.toggle('active');
        this.hamburger?.classList.toggle('active');
        this.hamburger?.setAttribute('aria-expanded', !isOpen);
    }

    close() {
        this.menu?.classList.remove('active');
        this.hamburger?.classList.remove('active');
        this.hamburger?.setAttribute('aria-expanded', 'false');
    }
}

// Smooth Page Anchoring Offsets
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.navbar = document.getElementById('navbar');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = this.navbar ? this.navbar.offsetHeight : 70;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Active Link Highlight on Scroll Tracker
class NavActiveState {
    constructor() {
        this.links = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.navbar = document.getElementById('navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateActive());
        this.updateActive();
    }

    updateActive() {
        const scrollPosition = window.scrollY + (this.navbar ? this.navbar.offsetHeight + 100 : 150);

        this.sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                this.links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Progress Bar Loader Engine
class SkillProgress {
    constructor() {
        this.bars = document.querySelectorAll('.skill-progress');
        this.init();
    }

    init() {
        if (!('IntersectionObserver' in window)) {
            this.animateAll();
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.parentElement.previousElementSibling?.querySelector('span:last-child')?.textContent || '80%';
                    bar.style.width = width;
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.15 });

        this.bars.forEach(bar => {
            bar.style.width = '0%';
            observer.observe(bar);
        });
    }

    animateAll() {
        this.bars.forEach(bar => {
            const width = bar.parentElement.previousElementSibling?.querySelector('span:last-child')?.textContent || '80%';
            bar.style.width = width;
        });
    }
}

// Contact Submission Callback Layer
class FormHandler {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submit();
        });
    }

    submit() {
        const button = this.form.querySelector('.form-submit');
        if (!button) return;
        
        const originalText = button.innerHTML;
        button.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = '<span>✓ Message Sent!</span>';
            this.form.reset();
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2500);
        }, 1200);
    }
}

// Global Orchestrator Init
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new MobileNav();
    new SmoothScroll();
    new NavActiveState();
    new SkillProgress();
    new FormHandler();
});