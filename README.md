# Canopy&Co — Website (static HTML/CSS/JS)

This is a **simple, no-code-build** website. You edit a few files, refresh the browser, and you’re done.

It has:
- **Home page** (`index.html`): a featured article layout.
- **Journal page** (`blog.html`): a list of posts that open in a popup (modal).

No frameworks, no database, no server required.

## Folder map (what each file does)

```
canopy&co/
├── index.html                 # Home page (featured article)
├── blog.html                  # Journal list + modal popup shell
├── assets/
│   ├── css/
│   │   └── styles.css         # All styling (colors, spacing, layout, modal)
│   └── js/
│       └── blog.js            # Post data + journal rendering + modal logic
├── assets/images/             # Put images here (covers, home hero, etc.)
├── .nojekyll                  # Helps GitHub Pages serve files as-is
└── README.md
```

## Prerequisites (what you need installed)

- **A GitHub account** (for hosting + publishing).
- **Any code editor** (Cursor / VS Code recommended).
- **Optional** (recommended for local testing): **Python 3** (already installed on many Macs).

## Run locally (recommended way)

Websites work best when served by a small local server (so scripts load correctly).

1. Open Terminal in this folder.
2. Run:

```bash
python3 -m http.server 8000
```

3. Open `http://localhost:8000` in your browser.
4. Visit:
   - Home: `http://localhost:8000/index.html`
   - Journal: `http://localhost:8000/blog.html`

If you want a “click a button” option, install the VS Code extension **Live Server** and use “Go Live”.

## The only safe edits you usually need

### Change home page text / image

Edit:
- `index.html`

Common edits:
- Change the title/date/intro text.
- Change the `<img src="assets/images/...">` to your image file.

### Add / edit journal posts

Edit:
- `assets/js/blog.js`

Look for:
- `const blogPosts = [...]`

To add a post:
- Copy an existing post object, paste it at the top (to show first), and change:
  - `id` (must be unique number)
  - `title`, `excerpt`, `date`, `author`, `readTime`
  - `coverSrc` / `coverAlt`
  - `content` (paragraphs + images)

Images:
- Put image files in `assets/images/`
- Use paths like `assets/images/your-file.png`

### Change colors, fonts, spacing (site “theme knobs”)

Edit:
- `assets/css/styles.css`

Best place to start:
- The `:root { ... }` section at the top (it controls colors, spacing, widths, font).

## Deploy option A: GitHub Pages (recommended, simplest)

### 1) Put the site on GitHub (first time)

If this repo is already on GitHub, skip to “Enable Pages”.

If not:
- Create a new GitHub repo
- Upload these files (or use “Add file → Upload files”)

### 2) Enable GitHub Pages

In GitHub:
- Open the repository
- Go to **Settings → Pages**
- Under **Build and deployment**:
  - **Source**: “Deploy from a branch”
  - **Branch**: `main` (or `master`) and **folder** `/ (root)`
- Save

After a minute, GitHub will show a public URL like:
- `https://<username>.github.io/<repo>/`

### 3) Keep images working

Because the site uses relative paths like `assets/images/...`, it will work on GitHub Pages as long as files are committed in the repo under that path.

## Deploy option B: Netlify (also very easy)

### Option B1: Drag-and-drop deploy (fastest)

- Go to Netlify
- Create a new site
- Drag the entire folder (or a zip) into the deploy area

### Option B2: Connect to GitHub (best long-term)

- Netlify → “Add new site” → “Import from Git”
- Choose GitHub + this repo
- Build settings:
  - **Build command**: (leave empty)
  - **Publish directory**: `/` (root)
- Deploy

## Repo handoff (transfer ownership on GitHub)

This is the cleanest handover (he becomes the owner).

### What you do (current owner)

In GitHub:
- Repo → **Settings** → **General** → **Danger Zone**
- Click **Transfer ownership**
- Enter:
  - the new owner’s GitHub username
  - the repo name (to confirm)
- Confirm transfer

### What he must do (new owner)

- He must **accept** the transfer request (GitHub will email/notify him).
- After accepting, the repo moves under his account and he becomes the owner.

## Troubleshooting (common issues)

- **Images don’t show**:
  - Make sure the file exists at `assets/images/...`
  - Make sure the filename matches exactly (including `.png` vs `.jpg`, and capitalization).
- **Journal list is blank**:
  - Ensure `blog.html` includes `<script src="assets/js/blog.js"></script>`
  - Ensure there is a `<div id="posts-container"></div>` (the JS needs that exact ID)
- **Popup (modal) won’t open**:
  - Open browser DevTools console and look for errors.

## “Ask AI like this” (copy/paste prompts)

Use prompts that mention the exact file(s).

- **Add a new journal post**:
  - “In `assets/js/blog.js`, add a new item to `blogPosts` with id=7. Use the same structure as the other posts. Add 2 paragraphs and 1 image. Keep escaping safe.”

- **Change home page image**:
  - “In `index.html`, change the home image to `assets/images/new-hero.jpg`. Also update the alt text. Keep the layout the same.”

- **Change site colors**:
  - “In `assets/css/styles.css`, update the `:root` color variables to a warmer palette. Don’t change class names or layout rules.”

- **Make the journal cards show newest first**:
  - “In `assets/js/blog.js`, ensure `renderPostCards` renders posts in newest-first order. If posts are in an array, keep the array order as the source of truth.”