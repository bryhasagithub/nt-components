import React, { useState } from 'react'
import './GameCard.css'

const GAME_COLORS = {
  blackjack: '#7dd3fc',
  chicken: '#facc15',
  darts: '#a78bfa',
  keno: '#84cc16',
  plinko: '#ec4899',
  mines: '#6d28d9',
  dice: '#f97316',
  tower: '#ea580c',
  default: '#64748b',
}

export function GameCard({
  name,
  href = '#',
  imageUrl,
  imageAlt,
  badge,
  accentColor,
  ...props
}) {
  const [imgError, setImgError] = useState(false)
  const showImg = imageUrl && !imgError
  const color = accentColor || GAME_COLORS[name?.toLowerCase()] || GAME_COLORS.default
  return (
    <a
      href={href}
      className="nuts-game-card"
      aria-label={name}
      style={{ '--game-accent': color }}
      {...props}
    >
      {badge && <span className="nuts-game-card__badge">{badge}</span>}
      <div className="nuts-game-card__media">
        {showImg ? (
          <img
            src={imageUrl}
            alt={imageAlt || name}
            className="nuts-game-card__img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="nuts-game-card__placeholder">{name?.slice(0, 2) || '??'}</div>
        )}
      </div>
      <div className="nuts-game-card__title">{name || 'Game'}</div>
      <div className="nuts-game-card__subtitle">NUTS.GG</div>
    </a>
  )
}
