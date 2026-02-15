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
  { name: 'Mines', href: '/mines', accentColor: '#e8794a' },
  { name: 'Dice', href: '/dice', accentColor: '#86efac' },
  { name: 'Tower', href: '/tower', accentColor: '#ea580c' },
  { name: 'Limbo', href: '/limbo', accentColor: '#38bdf8' },
  { name: 'Roulette', href: '/roulette', accentColor: '#f97316' },
  { name: 'Hilo', href: '/hilo', accentColor: '#a78bfa' },
  { isPlaceholder: true, key: 'empty' },
]

export function GameGrid({ games = DEFAULT_GAMES }) {
  return (
    <div className="nuts-game-grid">
      {games.map((game, i) => {
        if (game.isPlaceholder) {
          return (
            <div
              key={game.key || 'empty'}
              className="nuts-game-grid__empty-slot nuts-game-card"
              style={{ '--game-accent': '#64748b' }}
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
