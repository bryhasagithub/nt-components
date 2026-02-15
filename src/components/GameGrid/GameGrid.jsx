import React from 'react'
import { GameCard } from '../GameCard/GameCard'
import './GameGrid.css'

const DEFAULT_GAMES = [
  { name: 'Blackjack', href: '/blackjack', badge: 'New', accentColor: '#7dd3fc' },
  { name: 'Chicken', href: '/chicken', accentColor: '#fde047' },
  { name: 'Darts', href: '/darts', accentColor: '#a78bfa' },
  { name: 'Keno', href: '/keno', accentColor: '#86efac' },
  { name: 'Plinko', href: '/plinko', accentColor: '#f472b6' },
  { name: 'Mines', href: '/mines', accentColor: '#7c3aed' },
  { name: 'Dice', href: '/dice', accentColor: '#fb923c' },
  { name: 'Tower', href: '/tower', accentColor: '#ef4444' },
]

/** Base path for game tile images. Place images in public/tiles/ (e.g. blackjack.png, chicken.png). */
const TILES_BASE = '/tiles'

export function GameGrid({ games = DEFAULT_GAMES }) {
  return (
    <div className="nuts-game-grid">
      {games.map((game) => (
        <GameCard
          key={game.name}
          {...game}
          imageUrl={game.imageUrl ?? `${TILES_BASE}/${game.name.toLowerCase()}.png`}
          imageAlt={game.imageAlt ?? game.name}
        />
      ))}
    </div>
  )
}
