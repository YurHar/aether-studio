# Aether – Scroll-Driven Cinematic Website

## Live Demo

- **Deployed URL:** `https://your-vercel-url.vercel.app`  
- **Video Walkthrough:** `https://drive.google.com/...`  

(Replace both links after deployment and upload.)

---

## Overview

This project is my interpretation of the **Aether cinematic website**.

The goal was not to copy the original 3D scene one-to-one, but to recreate the **scroll-driven cinematic experience**:

- A strong, focused hero section that feels like a “portal” or stage.
- A narrative flow of sections that unfold as the user scrolls.
- Smooth, responsive transitions that feel like a movie sequence rather than a static landing page.

---

## Technology & Architecture

**Tech stack**

- **Framework:** Next.js (App Router, `app/` directory)
- **Styling:** Tailwind CSS (v4)
- **Animations:** GSAP + ScrollTrigger
- **Build & Deploy:** Vercel

**Architecture (Aether)**

- `app/page.tsx` – minimal route entry, renders the main Aether experience.
- `app/components/aether/AetherExperience.tsx` – root client component that:
  - Provides the global background and layout.
  - Calls the scroll/animation hook (`useAetherScroll`).
  - Composes all sections (hero, showcase, etc.).
- `app/components/aether/HeroSection.tsx` – sticky hero with background video/visual, title, subtitle, and scroll hint.
- `app/components/aether/showcase/Showcase.tsx` – “Selected Works” / projects showcase section.
- `app/components/aether/showcase/ShowcaseProjects.tsx` – data + layout for project cards.
- `app/components/aether/showcase/ProjectCard.tsx` – reusable project card component (image, title, category, hover effects).
- `app/components/aether/useAetherScroll.ts` – encapsulates GSAP + ScrollTrigger setup (hero intro, background animation, section reveals).

This separation keeps:

- **Layout / content** inside presentational components.
- **Scroll / animation logic** isolated in the custom hook.

---

## Cinematic Core (3D Replacement)

Instead of a complex 3D scene, the Aether hero uses a **high-quality looping video or visual background**:

- The video fills the hero background and is constrained to that section.
- A dark gradient overlay keeps the typography readable.
- The hero behaves as a **sticky stage** while the user begins to scroll, echoing the original Aether composition where the main canvas anchors the experience.

This follows the idea of:

> “Cinematic hero with a strong focal visual and scroll-driven story around it”

while staying performant and easier to maintain than a heavy 3D setup.

---

## Scroll-Driven Animations

The core of this Aether build is the **scroll-driven interaction**.

I focused on three main groups of effects:

1. **Hero intro animations**
   - On initial load, hero title, subtitle, and meta elements animate into view with GSAP `from` tweens.
   - This sets the cinematic tone from the first frame.

2. **Background transformation**
   - As the user scrolls through the main sections (hero → showcase → following content), a GSAP + ScrollTrigger tween animates the **background gradient / atmosphere**.
   - Colors and intensity shift with scroll position, making each section feel like a new “scene”.

3. **Section / project reveals**
   - Sections and project cards use GSAP + ScrollTrigger to:
     - Fade and slide in (`autoAlpha` + `y`) as they enter the viewport.
     - Optionally scrub the animation to scroll for tighter sync.
   - On desktop, the layout is more cinematic and spacious; on mobile, everything reflows into a stacked layout while keeping the same reveal feel.

All scroll logic is encapsulated in `useAetherScroll`, which makes it easy to adjust timing, easing or which elements are animated without touching layout components.

---

## Layout, Typography & Atmosphere

**Layout**

- **Hero Section**
  - Full-screen, sticky hero with background video or animated gradient.
  - Top meta bar (logo/label + small text).
  - Centered title/subtitle with cinematic spacing and letter-spacing.
  - Subtle scroll indicator inviting the user to continue.

- **Showcase Section**
  - “Selected Works” grid using `Showcase` + `ProjectCard`.
  - Cards have large imagery, minimal text, and hover interactions.
  - Layout is responsive:
    - Single column on small screens.
    - 2+ columns with staggered offsets on larger screens.

**Typography**

- Uppercase headings with increased letter-spacing to echo movie titles.
- Small, subtle labels (e.g., “Selected Works”) in all caps with tracking.
- Clean sans-serif for body copy, with comfortable line height and max-width to keep text readable.

**Atmosphere**

- Dark, moody base palette with gradients and soft glows.
- Imagery and background effects carry the futuristic / cinematic Aether mood.
- Subtle shadow and blur layers to simulate depth without overcomplicating the DOM.

---

## Performance Considerations

- The background video/visual is limited to the **hero** to avoid excessive GPU cost.
- GSAP + ScrollTrigger are used in a performance-friendly way:
  - Transforms (`translateY`, `scale`) and `autoAlpha` instead of expensive layout changes.
  - Scoped ScrollTriggers bound to specific sections instead of global scroll handlers.
- Layout is fully responsive without duplicating major DOM structures.
- The page remains usable even if animations are disabled; animation is progressive enhancement.

(If needed, I can extend the setup to respect `prefers-reduced-motion` and tone down scroll effects for those users.)

---

## AI Tools Usage

Yes, I used AI assistance for this project:

- **ChatGPT** – as a “frontend mentor” to:
  - Help plan the component architecture for the Aether experience.
  - Refine GSAP + ScrollTrigger usage and debug early setup issues.
  - Explore ideas for the hero, showcase layout, and cinematic typography.

All code was written, reviewed, and integrated by me, then adjusted to match the Aether concept and this project’s requirements.

---

## Possible Improvements (If I had more time)

- Add more nuanced hero scroll states:
  - Slight hero video zoom / blur as the user transitions into the showcase.
  - Smooth fade of hero copy while the next section takes over.
- Introduce a light parallax layer (e.g., particles / HUD lines) tied to scroll.
- Implement `prefers-reduced-motion` handling to automatically simplify animations.
- Fine-tune typography and spacing to more closely mirror the original Aether brand system.
- Add small interactive details to project cards (e.g., tilt / parallax on hover, subtle reflection highlights).
