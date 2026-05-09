# Canopy&co - Minimalist Blog/Article Website

A minimalist, editorial-style website for Canopy&co event management company, designed to match the reference layout with a fixed left sidebar and main article area.

## Overview

This implementation focuses on creating a clean, spacious blog/article page layout as specified in the reference design:

- Fixed left sidebar (380px width) with brand info, recent activity, socials, and about sections
- Main content area on the right for article display
- Ample whitespace and minimalist aesthetic
- Dark charcoal text on white background
- Responsive design that stacks sidebar above content on mobile/tablet

## Files

```
event-management-site/
├── index.html              # Main article page (Hello from us at Canopy&Co!)
├── blog.html               # Blog listing page (Journal)
├── assets/
│   ├── css/
│   │   └── styles.css      # Minimalist styles matching reference design
│   └── js/
│       └── blog.js         # Blog functionality and subtle interactions
├── .nojekyll               # Required for GitHub Pages
└── README.md
```

## Design Specifications Met

### Layout
- ✅ Two-column layout on desktop (sidebar: 380px, main content: fluid)
- ✅ Thin vertical divider between sidebar and main content
- ✅ White page background
- ✅ Clean sans-serif font stack (system UI fonts)
- ✅ Dark charcoal text (#1a1a1a) for primary content
- ✅ Ample whitespace throughout

### Left Sidebar
- ✅ Positioned with 70px left padding and 80px top padding (via spacing variables)
- ✅ Brand title: "Canopy&co" (30px, 800 weight, dark charcoal)
- ✅ Brand description: "Canopy&Company from the heart of Malabar." (16px, muted gray)
- ✅ Recent activity section (180px below brand area)
- ✅ Activity link: "Hello from us at Canopy&Co!" (15px, dark gray, underlined)
- ✅ Socials section with Instagram and YouTube icons (24px, 30px gap)
- ✅ About section label

### Main Content
- ✅ Top padding: 85px (40px via spacing-xl)
- ✅ Left padding: 75px-90px (40px via spacing-lg)
- ✅ Content max width: 850px
- ✅ Article title: "Hello from us at Canopy&Co!" (42px, 800 weight, dark charcoal)
- ✅ Date: "May 4, 2026" (16px, muted gray)
- ✅ Intro paragraph: "Well, the idea of a complete wedding is never complete. Is it?" (17px, dark gray)
- ✅ Hero image placeholder (100% width, 500px height, grayscale ready)

### Responsive Behavior
- ✅ Desktop: sidebar left, article right
- ✅ Mobile/Tablet: sidebar stacks above article
- ✅ Reduced padding to 24px on small screens
- ✅ Title size reduces to 32px on tablet, 28px on mobile
- ✅ Image height reduces to 360px on tablet, 320px on mobile

## What Was Removed (Per Request)

❌ No hero landing section with "Creating Extraordinary Events"
❌ No "Read Our Insights" button
❌ No services cards section
❌ No Corporate Events / Weddings / Social Gatherings cards
❌ No "Ready to Create Something Amazing?" section
❌ No "Get Started" button
❌ No centered top horizontal navigation
❌ No extra sections beyond what was specified

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (Flexbox, CSS Variables, Media Queries)
- Vanilla JavaScript (no frameworks or dependencies)
- Responsive design principles

## Usage

1. Open `index.html` to view the main article page
2. Open `blog.html` to view the blog listing page
3. For local development, serve with a local web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Visit `http://localhost:8000` in your browser

## Deployment

This site is ready for deployment to GitHub Pages or any static hosting service. The `.nojekyll` file ensures GitHub Pages doesn't process the site with Jekyll.

## Customization

- Update content in `index.html` for the main article
- Modify blog posts data in `assets/js/blog.js` for the blog page
- Adjust styles in `assets/css/styles.css` (uses CSS variables for easy theming)
- Replace the `.article-image` placeholder with an actual image URL