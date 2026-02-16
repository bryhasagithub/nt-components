# NUTS.GG Components – Storybook

A Storybook of UI components and pages based on [nuts.gg](https://nuts.gg), built from the provided HTML and screenshots.

## Requirements

- **Node.js 18+** (for Storybook 8). Use `nvm use` with your latest Node.

## Setup

```bash
nvm use          # or nvm use 20 / nvm use 22
npm install
```

## Run Storybook

```bash
npm run storybook
```

Opens at **http://localhost:6006**.

## What’s included

### Components (NUTS.GG/*)

- **Logo** – NUTS.GG logo (icon + text)
- **Button** – Primary (green) and secondary
- **BalanceDisplay** – USD + SOL balance
- **Header** – Logo, balance, deposit button, user menu
- **GameCard** – Game tile (name, accent color, optional badge)
- **GameGrid** – Responsive grid of game cards
- **NavMenu** – Wallet, Account, Perks, EARN, Hi-Lo, Slots
- **ChatButton** – Floating chat FAB

### Pages (NUTS.GG Pages/*)

- **HomePage** – Header, nav, game grid, chat button
- **HiLoPage** – Hi-Lo game layout (bet controls, cards, live games)
- **AffiliatePage** – Earn / referral section
- **Reference Screenshots** – Design refs (homepage, hi-lo, with chatbox) when images are in `public/`

## Reference screenshots

Place (or keep) these in `public/` so they show in the “Reference Screenshots” stories:

- `homepage.png`
- `hi-lo.png`
- `homepage-withchatbox.png`

## Homepage tiles and rank icons

To match the reference screenshots, add your assets as follows:

- **Game tiles** – Put one image per game in `public/tiles/` with lowercase filenames:
  - `blackjack.png`, `chicken.png`, `darts.png`, `keno.png`, `plinko.png`, `mines.png`, `dice.png`, `tower.png`
  - The homepage grid will use these automatically; if a file is missing, the card shows a placeholder.
- **User rank icon** – Put your rank icon at `public/rank-icon.png`. It appears in the header next to the username (e.g. the purple diamond in the reference). You can also pass a custom `rankIconUrl` to the `Header` component.

## Tech

- React 18
- Vite
- Storybook 8
- CSS (no UI framework)

Theme follows nuts.gg: dark background, green accent `#16BD92`, purple–pink gradient, SOL balance display.

## Deploy to GitHub Pages

The app is configured to run at `https://<username>.github.io/nt-components/` (project page). If your repo name is different, set the same value in `vite.config.js` as `base`.

1. **Push the repo to GitHub** (if you haven’t already).
2. **Turn on GitHub Pages**: repo **Settings → Pages → Build and deployment → Source** = **GitHub Actions**.
3. **Deploy**:
   - **From CI**: Push to `main` or `master`; the workflow builds and deploys to GitHub Pages.
   - **From your machine**: run `npm run deploy` (builds and pushes the `dist` folder to the `gh-pages` branch). If you use this, set **Pages → Source** to **Deploy from a branch**, branch **gh-pages**, folder **/ (root)**.

After deployment, the app is at **https://\<username\>.github.io/nt-components/** (home) and **https://\<username\>.github.io/nt-components/wallet** (wallet).
