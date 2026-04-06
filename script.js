// ========================================
// GSAP ANIMATIONS FOR CURL & BLOOM
// ========================================
// This file contains all GSAP animations for the landing page
// Including timeline sequencing, ScrollTrigger, and hover effects

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // ========================================
    // HERO SECTION - TIMELINE ANIMATION
    // ========================================
// Demonstrates GSAP timeline with staggered animations
// Elements fade in and slide up from bottom in sequence

const heroTimeline = gsap.timeline({
    defaults: { ease: 'power3.out' }
});

// Set initial state - elements hidden and below viewport
gsap.set(['#hero-heading', '#hero-subtitle', '.hero-buttons'], {
    opacity: 0,
    y: 30
});

// Staggered animations using timeline
heroTimeline
    .to('#hero-heading', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, 0)
    .to('#hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, 0.2)
    .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, 0.4);

// ========================================
// FEATURES SECTION - SCROLL TRIGGER ANIMATION
// ========================================
// Demonstrates ScrollTrigger plugin
// Cards animate in as user scrolls into view

const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card, index) => {
    // Set initial state
    gsap.set(card, {
        opacity: 0,
        y: 50
    });

    // Animate on scroll
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false
        }
    });
});

// ========================================
// CTA SECTION - SCROLL TRIGGER STAGGER
// ========================================
// Demonstrates ScrollTrigger with staggered animations

gsap.to('#cta-heading', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false
    }
});

gsap.set('#cta-heading', { opacity: 0, y: 30 });

gsap.to('#cta-text', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.2,
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false
    }
});

gsap.set('#cta-text', { opacity: 0, y: 30 });

gsap.to('#cta-btn', {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'back.out',
    delay: 0.4,
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false
    }
});

gsap.set('#cta-btn', { opacity: 0, scale: 0.9 });

// ========================================
// HOVER MICRO-INTERACTIONS
// ========================================
// Demonstrates GSAP for interactive animations

// Button hover effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.08,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Feature card hover effects (enhanced with GSAP)
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(201, 122, 92, 0.15)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// SCROLL TRIGGER REFRESH
// ========================================
// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Initial refresh
ScrollTrigger.refresh();

// ========================================
// ENHANCED ANIMATIONS - ADDITIONAL EFFECTS
// ========================================

// Hero image animations removed - static display only

// Enhanced feature card animations with flip effect
featureCards.forEach((card, index) => {
    // Add flip effect on hover
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            rotationY: 5,
            duration: 0.4,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationY: 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    });

    // Animate icons with rotation on card hover
    const icon = card.querySelector('.feature-icon');
    if (icon) {
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                rotation: 360,
                duration: 0.6,
                ease: 'back.out'
            });
        });
    }
});

// Animated trust badges with staggered entrance
const trustBadges = document.querySelectorAll('.trust-badge');
trustBadges.forEach((badge, index) => {
    gsap.set(badge, { opacity: 0, scale: 0 });
    
    gsap.to(badge, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out',
        delay: 0.6 + index * 0.15,
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false
        }
    });
});

// Add bounce animation to buttons on page load
buttons.forEach((button, index) => {
    gsap.set(button, { opacity: 0, scale: 0.8 });
    gsap.to(button, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out',
        delay: 0.8 + index * 0.2
    });
});

// Add wave effect to feature cards entrance with enhanced shadow
featureCards.forEach((card, index) => {
    gsap.to(card, {
        boxShadow: '0 10px 30px rgba(201, 122, 92, 0.1)',
        duration: 0.4,
        ease: 'power2.out',
        delay: index * 0.1 + 0.3,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 15%',
            scrub: false,
            markers: false
        }
    });
});

// Animated text reveal for section headings
const headings = document.querySelectorAll('h2');
headings.forEach((heading) => {
    if (heading.id !== 'hero-heading' && heading.id !== 'cta-heading') {
        gsap.set(heading, { opacity: 0, y: 20 });
        gsap.to(heading, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                end: 'top 20%',
                scrub: false,
                markers: false
            }
        });
    }
});

// Smooth scroll animations for all paragraphs
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((para, index) => {
    if (para.id !== 'hero-subtitle' && para.id !== 'cta-text') {
        gsap.set(para, { opacity: 0, y: 15 });
        gsap.to(para, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.05,
            scrollTrigger: {
                trigger: para,
                start: 'top 85%',
                end: 'top 15%',
                scrub: false,
                markers: false
            }
        });
    }
});


// ========================================
// PRODUCTS SECTION - SCROLL TRIGGER ANIMATION
// ========================================
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    gsap.set(card, { opacity: 0, y: 40 });
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 15%',
            scrub: false,
            markers: false
        }
    });
});

// Product card hover effects
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(201, 122, 92, 0.2)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// REVIEWS SECTION - SCROLL TRIGGER ANIMATION
// ========================================
const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach((card, index) => {
    gsap.set(card, { opacity: 0, x: index % 2 === 0 ? -40 : 40 });
    gsap.to(card, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 15%',
            scrub: false,
            markers: false
        }
    });
});

// Review card hover effects
reviewCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.03,
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// BLOG SECTION - SCROLL TRIGGER ANIMATION
// ========================================
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card, index) => {
    gsap.set(card, { opacity: 0, y: 40, rotation: -2 });
    gsap.to(card, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 15%',
            scrub: false,
            markers: false
        }
    });
});

// Blog card hover effects
blogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// CONTACT SECTION - SCROLL TRIGGER ANIMATION
// ========================================
const contactForm = document.querySelector('.contact-form');
const contactInfo = document.querySelector('.contact-info');

if (contactForm) {
    gsap.set(contactForm, { opacity: 0, x: -40 });
    gsap.to(contactForm, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false
        }
    });
}

if (contactInfo) {
    gsap.set(contactInfo, { opacity: 0, x: 40 });
    gsap.to(contactInfo, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false
        }
    });
}

// Form input focus animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            boxShadow: '0 0 0 3px rgba(201, 122, 92, 0.2)',
            duration: 0.2,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', () => {
        gsap.to(input, {
            boxShadow: '0 0 0 0px rgba(201, 122, 92, 0)',
            duration: 0.2,
            ease: 'power2.out'
        });
    });
});

// Animate info items with stagger
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach((item, index) => {
    gsap.set(item, { opacity: 0, y: 20 });
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.4 + index * 0.1,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false
        }
    });
});

});
