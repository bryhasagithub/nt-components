import React from "react"
import { GameCard } from "../GameCard/GameCard"
import { GAME_TILE_IMAGES } from "../../lib/gameTileImgs"
import "./GameGrid.css"

const DEFAULT_GAMES = [
  {
    name: "Blackjack",
    href: "/nt-components/blackjack",
    badge: "New",
    accentColor: "#7dd3fc",
  },
  { name: "Chicken", href: "/nt-components/chicken", accentColor: "#fde047" },
  { name: "Darts", href: "/nt-components/darts", accentColor: "#a78bfa" },
  { name: "Keno", href: "/nt-components/keno", accentColor: "#86efac" },
  { name: "Plinko", href: "/nt-components/plinko", accentColor: "#f472b6" },
  { name: "Mines", href: "/nt-components/mines", accentColor: "#ff6d57" },
  { name: "Dice", href: "/nt-components/dice", accentColor: "#86efac" },
  { name: "Tower", href: "/nt-components/tower", accentColor: "#ff8f45" },
  { name: "Limbo", href: "/nt-components/limbo", accentColor: "#38bdf8" },
  {
    name: "Roulette",
    href: "/nt-components/roulette",
    accentColor: "#7b95c7",
  },
  { name: "Hilo", href: "/nt-components/hilo", accentColor: "#a78bfa" },
  { name: "Snakes", href: "/nt-components/snakes", accentColor: "#f794e0" },
]

export function GameGrid({ games = DEFAULT_GAMES }) {
  return (
    <div className="nuts-game-grid">
      {games.map((game, i) => {
        if (game.isPlaceholder) {
          return (
            <div
              key={game.key || "empty"}
              className="nuts-game-grid__empty-slot nuts-game-card"
              style={{ "--game-accent": "var(--bg-tertiary)" }}
              aria-hidden="true"
            >
              <div className="nuts-game-card__media">
                <div className="nuts-game-card__placeholder" />
              </div>
              <div className="nuts-game-card__title">&nbsp;</div>
              <div className="nuts-game-card__subtitle">NUTS.GG</div>
            </div>
          )
        }
        const key = game.name?.toLowerCase()
        const imageUrl = game.imageUrl ?? GAME_TILE_IMAGES[key]
        return (
          <GameCard
            key={game.name}
            {...game}
            imageUrl={imageUrl}
            imageAlt={game.imageAlt ?? game.name}
          />
        )
      })}
    </div>
  )
}
