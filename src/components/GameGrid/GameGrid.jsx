import React from 'react'
import { GameCard } from '../GameCard/GameCard'
import { GAME_TILE_IMAGES } from '../../lib/gameTileImgs'
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

export function GameGrid({ games = DEFAULT_GAMES }) {
  return (
    <div className="nuts-game-grid">
      {games.map((game) => {
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
