import React from 'react'
import arcadeImg from '../../lib/imgs/arcade.png'
import bagImg from '../../lib/imgs/bag.png'
import './PromoCards.css'

const DEFAULT_CARDS = [
  {
    title: 'Play Games. Earn Crypto',
    description: 'Nuts.gg is your newest favourite crypto casino. Start playing now with your free solana faucet.',
    imageUrl: arcadeImg,
    imageAlt: 'Arcade machine',
  },
  {
    title: 'Easy Cashout and Deposit',
    description: 'Forget about waiting. Your deposits and withdrawals are credited instantly. No manual verification. No fees.',
    imageUrl: bagImg,
    imageAlt: 'Money bag',
  },
]

export function PromoCards({ cards = DEFAULT_CARDS }) {
  return (
    <div className="nuts-promo-cards">
      {cards.map((card) => (
        <a key={card.title} href="." className="nuts-promo-card">
          <div className="nuts-promo-card__media">
            <img src={card.imageUrl} alt={card.imageAlt} className="nuts-promo-card__img" />
          </div>
          <div className="nuts-promo-card__body">
            <h2 className="nuts-promo-card__title">{card.title}</h2>
            <p className="nuts-promo-card__description">{card.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
