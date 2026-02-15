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

## Tech

- React 18
- Vite
- Storybook 8
- CSS (no UI framework)

Theme follows nuts.gg: dark background, green accent `#16BD92`, purple–pink gradient, SOL balance display.
