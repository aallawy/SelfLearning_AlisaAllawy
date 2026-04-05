// ========================================
// GSAP ANIMATIONS FOR CURL & BLOOM
// ========================================
// This file contains all GSAP animations for the landing page
// Including timeline sequencing, ScrollTrigger, and hover effects

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
