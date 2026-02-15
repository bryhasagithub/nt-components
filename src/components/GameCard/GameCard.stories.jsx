import { GameCard } from './GameCard'

export default {
  title: 'NUTS.GG/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    href: { control: 'text' },
    badge: { control: 'text' },
    accentColor: { control: 'color' },
  },
}

export const Blackjack = {
  args: {
    name: 'Blackjack',
    href: '/blackjack',
    badge: 'New',
    accentColor: '#7dd3fc',
  },
}

export const Chicken = {
  args: {
    name: 'Chicken',
    href: '/chicken',
    accentColor: '#fde047',
  },
}

export const WithImage = {
  args: {
    name: 'Dice',
    href: '/dice',
    imageUrl: 'https://placehold.co/170x170/333/fff?text=DICE',
    accentColor: '#fb923c',
  },
}

export const NoBadge = {
  args: {
    name: 'Plinko',
    href: '/plinko',
    accentColor: '#f472b6',
  },
}
