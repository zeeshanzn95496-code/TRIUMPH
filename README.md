# Triumph Vehicle Showroom

A premium motorcycle showroom website built with **React + Vite + Tailwind CSS v4**.

## Project Structure

```
vehicle-showroom/
├── frontend/          # React SPA (Vite)
│   └── src/
│       ├── App.jsx            # Page router (home / models / model / about / contact) + test-ride modal
│       ├── Main.jsx           # Entry point
│       └── components/
│           ├── Navbar.jsx     # Fixed navbar with active-page highlighting
│           ├── Models.jsx     # Amazon-style product card grid
│           ├── ModelDetail.jsx# Full model detail page (specs + equipment)
│           ├── About.jsx      # "Under construction" page
│           ├── Contact.jsx    # Showroom info cards + enquiry form
│           └── images/        # Bike photos & Triumph logo
│   └── public/
│       ├── audio/rocketgt.wav  # Exhaust sound (lazy-loaded, not bundled)
│       ├── favicon.png         # Browser tab icon
│       └── og-image*.jpg       # Social share preview images
└── backend/           # Express + MongoDB (Mongoose) API — scaffold only
```

## Frontend

### Setup

```bash
cd frontend
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run lint     # ESLint
npm run preview  # preview production build
```

### Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** via `@tailwindcss/vite` (no config file needed)
- **GSAP** — installed (currently unused after navbar animation removal)
- **react-snowfall** — fullscreen snowfall canvas overlay
- **lucide-react** — icons

### Pages (state-based routing in `App.jsx`)

| Page      | Trigger                    | Content                                  |
|-----------|----------------------------|------------------------------------------|
| `home`    | Navbar → Home / logo       | Hero (Rocket 3 GT), About, Anatomy specs |
| `about`   | Navbar → About             | "Under construction" animated page       |
| `contact` | Navbar → Contact           | Showroom info cards + enquiry form        |
| `models`  | Navbar → Models            | Product card grid (Speed 400, Scrambler 400X, T4) |
| `model`   | Click a model card         | Full detail page for that model          |
| —         | "Book Test Ride" buttons   | Modal form (name, phone, date, dealer)   |

Page titles update automatically via `document.title` in `App.jsx` (e.g. "Contact — Triumph Motorcycles").

### Key data locations

- `App.jsx` → `FLAGSHIP` object: Rocket 3 GT hero data (colors, specs, pillars, equipment)
- `Models.jsx` → `MODELS` array: product cards (add new bikes here)
- `ModelDetail.jsx` → `DETAIL_SPECS`: full spec tables per model id — **add an entry for every new model** or its detail page will be empty
- Audio: `public/audio/rocketgt.wav` served statically (preload="none"), toggled by the speaker button on the hero image

### SEO & social previews

`index.html` contains meta description, theme-color, favicon, and Open Graph tags (`og:title`, `og:description`, `og:image`, `twitter:card`).

- Share preview image lives in `public/` (currently `og-image*.jpg`)
- **`og:image` must be an absolute URL** (`https://triumph-eight-gold.vercel.app/og-image.jpg`) — social crawlers fetch it directly and can't resolve relative paths
- To change the preview image: replace the file in `public/`, keep it ~1200px wide / <300KB, update the `og:image` URL if the filename changed, then redeploy
- All pages share one preview (SPA — crawlers only read `index.html`)

### Deployment

Connected to **Vercel** via the GitHub repo — every `git push` to `main` auto-builds and deploys. Live at `triumph-eight-gold.vercel.app`.

## Backend

Express API scaffold (CORS, JSON, dotenv, Mongoose installed but not yet wired to models).

```bash
cd backend
npm install
npm run dev      # nodemon server.js  → http://localhost:5000
```
