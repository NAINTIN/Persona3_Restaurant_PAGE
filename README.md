# Persona 3 Reload × Wendy's Collaboration

A fan-made concept website celebrating a (fictional) crossover between **Persona 3 Reload** and **Wendy's Japan**. Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

---

## About

Every HTML project I've made in The Odin Project has, without fail, ended up Persona 3 Reload themed. So when it came time to build the restaurant project, I honestly had no idea how to design it — until I came across the most-liked community solution, inspired by a **Persona 5 collab cafe website**. That project gave me the direction I needed to get started.

Once again, thank you very much to [**pret3nti0u5**](https://github.com/pret3nti0u5) for the inspiration!

---

## Features

- Landing page with a hero header and collaboration intro
- Persona-themed body section with character cards
- Quote section featuring in-character dialogue
- Full menu grid with themed food items
- About and Contact pages
- Custom page-transition animation between routes
- Optimized, compressed image assets for fast load times

---

## Tech Stack

| Tool | Purpose |
|---|---|
| HTML / CSS / JavaScript | Core structure, styling, and interactivity |
| Webpack | Module bundling and dev server |
| `image-minimizer-webpack-plugin` + `sharp` | Automatic image compression on production build |
| Google Fonts (Anton, Antic Slab) | Typography |

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm start
```

### Build for production

```bash
npm run build
```

Production builds are automatically optimized and image-compressed — no extra flags needed.

---

## Project Structure

```
src/
├── images/           # Image assets (compressed on production build)
├── home.js           # Home page content
├── about.js           # About page content
├── menu.js            # Menu page content
├── contact.js         # Contact page content
├── style.css           # Global styles
├── template.html       # HTML template
└── index.js            # Entry point / page routing
```

---

## Credits

- Design inspiration: [pret3nti0u5](https://github.com/pret3nti0u5)'s Persona 5 collab cafe website
- Character art & collaboration concept: Persona 3 Reload (Atlus) × Wendy's Japan (fan concept, not affiliated with either brand)
- Fonts: [Anton](https://fonts.google.com/specimen/Anton) & [Antic Slab](https://fonts.google.com/specimen/Antic+Slab) via Google Fonts

---

## Disclaimer

This is a non-commercial fan project made for learning purposes as part of The Odin Project curriculum. Persona 3 Reload and all related characters are property of Atlus. Wendy's is a registered trademark of The Wendy's Company. No affiliation with either brand is claimed or implied.
