import React from 'react'
import './NavMenu.css'

const defaultItems = [
  { label: 'Wallet', href: '/wallet/deposit' },
  { label: 'Account', href: '/account/settings' },
  { label: 'Perks', href: '/perks/league' },
  { label: 'EARN', href: '/affiliate/earn', highlight: true },
  { label: 'Hi-Lo', href: '/hilo' },
  { label: 'Slots', href: '/slots' },
]

export function NavMenu({ items = defaultItems }) {
  return (
    <nav className="nuts-nav" aria-label="menu">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`nuts-nav__item ${item.highlight ? 'nuts-nav__item--highlight' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
