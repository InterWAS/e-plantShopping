# 🌿 Paradise Nursery — e-Plant Shopping

An e-commerce web application for browsing and purchasing plants online. Built with **React**, **Redux Toolkit**, and **Vite**, Paradise Nursery offers a curated catalog of plants organized by category, a responsive shopping cart, and a clean, nature-themed UI.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Plant Categories](#plant-categories)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Available Scripts](#available-scripts)
- [State Management](#state-management)
- [License](#license)

---

## About the Project

**Paradise Nursery** is a React-based plant shopping application where users can explore a variety of plant categories, add plants to a cart, adjust quantities, and review their order before checkout.

> "Where Green Meets Serenity"

The application was built as a front-end capstone project to demonstrate React component architecture, Redux state management, and modern JavaScript tooling with Vite.

---

## Features

- 🏡 **Landing page** with an animated welcome screen and "Get Started" call-to-action
- 🌱 **Product catalog** displaying plants grouped by category with images, descriptions, and prices
- 🛒 **Shopping cart** with the ability to:
  - Add items from the product list
  - Increment / decrement item quantities
  - Remove individual items
  - View a running total cost
- 🔄 **Redux-powered state** — cart state is managed globally with Redux Toolkit
- 📱 **Responsive navigation** between the landing page, product list, and cart views
- ℹ️ **About Us section** describing the nursery's mission and values

---

## Plant Categories

The catalog contains **30 plants** across five categories:

| Category | Example Plants |
|---|---|
| **Air Purifying Plants** | Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera |
| **Aromatic Fragrant Plants** | Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Hyacinth |
| **Insect Repellent Plants** | Oregano, Marigold, Geraniums, Basil, Lavender, Catnip |
| **Medicinal Plants** | Aloe Vera, Echinacea, Peppermint, Lemon Balm, Chamomile, Calendula |
| **Low Maintenance Plants** | ZZ Plant, Pothos, Snake Plant, Cast Iron Plant, Succulents, Aglaonema |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI component library |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management (cart) |
| [React-Redux](https://react-redux.js.org/) | React bindings for Redux |
| [Vite 5](https://vitejs.dev/) | Development server and build tool |
| [ESLint](https://eslint.org/) | Code linting |
| [gh-pages](https://github.com/tschaub/gh-pages) | GitHub Pages deployment |

---

## Project Structure

```
e-plantShopping/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and static resources
│   ├── AboutUs.jsx          # About Us component
│   ├── AboutUs.css
│   ├── App.jsx              # Root component — manages landing/product views
│   ├── App.css
│   ├── CartItem.jsx         # Shopping cart component
│   ├── CartItem.css
│   ├── CartSlice.jsx        # Redux slice — cart state (add, remove, updateQuantity)
│   ├── ProductList.jsx      # Product catalog with navigation and add-to-cart logic
│   ├── ProductList.css
│   ├── store.js             # Redux store configuration
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── package.json
└── .eslintrc.cjs            # ESLint configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/InterWAS/e-plantShopping.git
cd e-plantShopping
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Build and serve the production preview |
| `npm run lint` | Run ESLint across all JS/JSX files |

---

## State Management

Cart state is managed with **Redux Toolkit** via `CartSlice.jsx`. The slice exposes three reducers:

- `addItem(plant)` — Adds a plant to the cart, or increments its quantity if already present
- `removeItem(plant)` — Removes a plant from the cart entirely
- `updateQuantity({ name, quantity })` — Sets an item's quantity directly; removes the item if quantity reaches 0

The Redux store is configured in `store.js` and provided to the entire app via `<Provider>` in `main.jsx`.

---

## License

This project is licensed under the terms of the [LICENSE](./LICENSE) file included in the repository.