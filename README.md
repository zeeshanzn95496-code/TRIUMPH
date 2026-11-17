# Triumph Vehicle Showroom

A premium motorcycle showroom website built with **React + Vite + Tailwind CSS v4**.

## Project Structure

```
vehicle-showroom/
├── frontend/          # React SPA (Vite)
│   └── src/
│       ├── App.jsx            # Page router (home / models / model / about) + test-ride modal
│       ├── Main.jsx           # Entry point, Lenis smooth scroll
│       └── components/
│           ├── Navbar.jsx     # Fixed navbar with active-page highlighting
│           ├── Models.jsx     # Amazon-style product card grid
│           ├── ModelDetail.jsx# Full model detail page (specs + equipment)
│           ├── About.jsx      # "Under construction" page
│           ├── images/        # Bike photos & Triumph logo
│           └── audio/         # Exhaust sound effect (rocketgt.wav)
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
- **Lenis** — smooth scrolling
- **GSAP** — installed (currently unused after navbar animation removal)
- **falling-leaves** — fullscreen leaf particle overlay
- **lucide-react** — icons

### Pages (state-based routing in `App.jsx`)

| Page      | Trigger                    | Content                                  |
|-----------|----------------------------|------------------------------------------|
| `home`    | Navbar → Home / logo       | Hero (Rocket 3 GT), About, Anatomy specs |
| `about`   | Navbar → About             | "Under construction" animated page       |
| `models`  | Navbar → Models            | Product card grid (Speed 400, Scrambler) |
| `model`   | Click a model card         | Full detail page for that model          |
| —         | "Book Test Ride" buttons   | Modal form (name, phone, date, dealer)   |

### Key data locations

- `App.jsx` → `FLAGSHIP` object: Rocket 3 GT hero data (colors, specs, pillars, equipment)
- `Models.jsx` → `MODELS` array: product cards (add new bikes here)
- `ModelDetail.jsx` → `DETAIL_SPECS`: full spec tables per model id — **add an entry for every new model** or its detail page will be empty
- Audio: `src/components/audio/rocketgt.wav` toggled by the speaker button on the hero image

## Backend

Express API scaffold (CORS, JSON, dotenv, Mongoose installed but not yet wired to models).

```bash
cd backend
npm install
npm run dev      # nodemon server.js  → http://localhost:5000
```
