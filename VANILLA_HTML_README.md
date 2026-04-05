# Curl & Bloom - Vanilla HTML/CSS/JavaScript Landing Page

## Overview

This is a **pure vanilla HTML, CSS, and JavaScript** implementation of the Curl & Bloom curly hair product landing page. The entire project is contained in a single `index.html` file with embedded CSS and JavaScript, making it perfect for web development class assignments.

**No frameworks, no build tools, no dependencies** — just clean, professional code that demonstrates GSAP animation expertise.

## File Structure

```
curly-hair-landing-page/
├── index.html              # Complete landing page (HTML + CSS + JS)
├── VANILLA_HTML_README.md  # This file
└── PROJECT_DOCUMENTATION.md # Detailed GSAP implementation guide
```

## How to Use

### Option 1: Open Directly in Browser
Simply double-click `index.html` to open it in your default browser. No server required!

### Option 2: Serve Locally (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then navigate to `http://localhost:8000/index.html` in your browser.

## Project Structure

### HTML Structure
```html
<section class="hero">
  <!-- Hero section with staggered animations -->
</section>

<section class="features">
  <!-- 6 feature cards with scroll-triggered animations -->
</section>

<section class="cta">
  <!-- Call-to-action with gradient background -->
</section>

<footer class="footer">
  <!-- Footer with copyright -->
</footer>
```

### CSS Organization
The CSS is organized into logical sections:
- **Reset & Base Styles** - Browser defaults and global styles
- **Color Palette** - CSS variables for the Warm Botanical Elegance theme
- **Typography** - Font sizing and hierarchy
- **Buttons** - Button styles and states
- **Container & Layout** - Responsive grid and spacing
- **Hero Section** - Hero-specific styles
- **Features Section** - Feature card styles
- **CTA Section** - Call-to-action styles
- **Responsive Design** - Mobile-first media queries

### JavaScript Organization
The JavaScript is organized into clear sections with comments:

```javascript
// HERO SECTION - TIMELINE ANIMATION
// Demonstrates GSAP timeline with staggered animations

// FEATURES SECTION - SCROLL TRIGGER ANIMATION
// Demonstrates ScrollTrigger plugin with scroll-based reveals

// CTA SECTION - SCROLL TRIGGER STAGGER
// Demonstrates ScrollTrigger with staggered animations

// HOVER MICRO-INTERACTIONS
// Demonstrates GSAP for interactive animations

// SCROLL TRIGGER REFRESH
// Handles responsive behavior on window resize
```

## GSAP Implementation Details

### 1. Hero Section Timeline (Lines 290-310)

**Concept**: GSAP timeline sequencing animations with precise timing

```javascript
const heroTimeline = gsap.timeline({
    defaults: { ease: 'power3.out' }
});

// Staggered animations
heroTimeline
    .to('#hero-heading', { opacity: 1, y: 0, duration: 0.8 }, 0)
    .to('#hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, 0.2)
    .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8 }, 0.4);
```

**What it demonstrates**:
- Timeline creation with default easing
- Sequential animation timing (0s, 0.2s, 0.4s)
- Opacity and transform animations
- Power3.out easing for smooth deceleration

### 2. Features Section ScrollTrigger (Lines 312-330)

**Concept**: Triggering animations when elements enter viewport

```javascript
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
        scrub: false
    }
});
```

**What it demonstrates**:
- ScrollTrigger plugin registration
- Viewport-based animation triggering
- Staggered delays across multiple elements
- Responsive trigger points

### 3. CTA Section Scroll Animations (Lines 332-375)

**Concept**: Multiple elements animating in sequence on scroll

```javascript
gsap.to('#cta-heading', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        end: 'top 20%'
    }
});
```

**What it demonstrates**:
- Multiple ScrollTrigger instances
- Coordinated animations across elements
- Back.out easing for subtle bounce effect

### 4. Hover Micro-Interactions (Lines 377-415)

**Concept**: Interactive animations responding to user input

```javascript
button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale: 1.08,
        duration: 0.3,
        ease: 'power2.out'
    });
});
```

**What it demonstrates**:
- Event-driven animations
- Scale transforms for tactile feedback
- Quick duration for responsive feel
- Cleanup on mouseleave

## Design System

### Color Palette (Warm Botanical Elegance)
```css
--terracotta: #C97A5C      /* Primary brand color */
--sage-green: #9BA89B      /* Calming accent */
--golden-honey: #E8B76B    /* Luxury highlight */
--cream: #F5F1E8           /* Primary background */
--charcoal: #3D3D3D        /* Text color */
```

### Typography
- **Display Font**: Playfair Display (serif) - Elegant headings
- **Body Font**: Lato (sans-serif) - Clean, readable body text
- **Font Sizes**: Responsive using `clamp()` for fluid scaling

### Spacing & Layout
- **Container Max Width**: 1280px
- **Grid Gaps**: 2rem (features section)
- **Padding**: Responsive (1.5rem to 2rem)
- **Border Radius**: 0.5rem to 2rem for organic feel

## Browser Compatibility

✅ **Fully Compatible With**:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

✅ **Features Used**:
- CSS Grid and Flexbox
- CSS Variables (Custom Properties)
- CSS Gradients
- SVG Inline Data URLs
- ES6 JavaScript (Arrow functions, const/let, Template literals)
- GSAP 3.14.2 (from CDN)

## Performance Optimizations

1. **GPU Acceleration**: Uses `transform` and `opacity` for smooth animations
2. **Passive Event Listeners**: ScrollTrigger uses passive listeners for scroll performance
3. **RequestAnimationFrame**: GSAP internally uses RAF for optimal timing
4. **No Layout Thrashing**: Animations avoid triggering layout recalculations
5. **Minimal JavaScript**: Only ~400 lines of JS for entire page

## Responsive Design

The page is fully responsive with breakpoints at:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (3-column grid)

Key responsive adjustments:
- Hero visual hidden on mobile
- Buttons stack vertically on mobile
- Feature grid adapts to available space
- Font sizes scale fluidly with `clamp()`

## How to Modify

### Change Colors
Edit the CSS variables at the top of the `<style>` section:
```css
:root {
    --terracotta: #C97A5C;  /* Change this */
    --sage-green: #9BA89B;  /* And this */
    /* ... */
}
```

### Change Animation Timing
Modify the `duration` and `delay` values in the JavaScript section:
```javascript
.to('#hero-heading', {
    duration: 1.2,  /* Increase for slower animation */
    /* ... */
})
```

### Add New Sections
1. Add HTML markup in the appropriate location
2. Add CSS styles in the `<style>` section
3. Add GSAP animations in the `<script>` section

### Change Copy
Simply edit the text content in the HTML markup. All text is clearly labeled with comments.

## GSAP Concepts Demonstrated

✅ **Timeline Sequencing** - Coordinating multiple animations
✅ **ScrollTrigger Plugin** - Scroll-based animation triggering
✅ **Easing Functions** - Smooth motion with power3.out, power2.out, back.out
✅ **Transform Animations** - Scale, Y-position, opacity
✅ **Event-Driven Animations** - Hover interactions
✅ **Staggered Animations** - Sequential delays across elements
✅ **Responsive Triggers** - Animations adapt to viewport

## Common GSAP Methods Used

| Method | Purpose | Example |
|--------|---------|---------|
| `gsap.timeline()` | Create animation sequence | `gsap.timeline({ defaults: { ease: 'power3.out' } })` |
| `gsap.to()` | Animate to target values | `gsap.to(element, { opacity: 1, duration: 0.8 })` |
| `gsap.set()` | Set initial state instantly | `gsap.set(element, { opacity: 0, y: 30 })` |
| `gsap.registerPlugin()` | Enable plugins | `gsap.registerPlugin(ScrollTrigger)` |
| `.to()` | Timeline method to add animation | `timeline.to(element, {...}, 0.2)` |
| `ScrollTrigger` | Trigger animations on scroll | `scrollTrigger: { trigger: element, start: 'top 80%' }` |

## Troubleshooting

### Animations not playing?
1. Check browser console for errors (F12)
2. Ensure GSAP CDN link is working
3. Verify element IDs match in HTML and JavaScript

### Scroll animations not triggering?
1. Make sure ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
2. Check trigger element exists in DOM
3. Verify start/end values are correct

### Styling issues?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check CSS variable values
3. Verify media queries for your screen size

## Learning Resources

- **GSAP Documentation**: https://greensock.com/docs/
- **ScrollTrigger Guide**: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- **GSAP Easing Visualizer**: https://greensock.com/ease-visualizer/
- **MDN Web Docs**: https://developer.mozilla.org/

## Assignment Checklist

✅ Single-page animated landing page
✅ HTML, CSS, and JavaScript only (no frameworks)
✅ GSAP timeline for hero section staggered animations
✅ ScrollTrigger plugin for scroll-based animations
✅ Hover micro-interactions on buttons and cards
✅ Professional design with botanical color palette
✅ Fully responsive and mobile-friendly
✅ Clean, well-commented code
✅ No external dependencies (GSAP from CDN)
✅ Works in all modern browsers

## Summary

This vanilla HTML/CSS/JavaScript landing page demonstrates professional GSAP implementation suitable for a web development class assignment. The code is clean, well-documented, and easy to understand while showcasing advanced animation techniques including timeline sequencing, scroll triggers, and micro-interactions.

Perfect for submission as a final project! 🎉
