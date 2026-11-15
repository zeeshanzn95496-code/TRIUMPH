# Frontend — Triumph Vehicle Showroom

React 19 + Vite 8 + Tailwind CSS v4 SPA.

## Commands

```bash
npm run dev       # dev server (default http://localhost:5173)
npm run build     # production build → dist/
npm run lint      # ESLint
npm run preview   # serve production build
```

## Structure

- `index.html` — entry HTML
- `src/Main.jsx` — React root + Lenis smooth-scroll setup
- `src/App.jsx` — page state router (`home` / `about` / `models` / `model`), FLAGSHIP data, test-ride modal
- `src/App.css` — Tailwind import + global styles + gold shimmer utilities
- `src/components/` — Navbar, Models (cards), ModelDetail, About

## Conventions

- Styling: Tailwind utility classes; dedicated `.css` file per component for complex sections
- Images/audio live in `src/components/images|audio` and are imported (Vite bundles them)
- New models: add to `MODELS` in `Models.jsx` **and** `DETAIL_SPECS` in `ModelDetail.jsx`
