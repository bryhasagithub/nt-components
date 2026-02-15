import { GameGrid } from './GameGrid'

export default {
  title: 'NUTS.GG/GameGrid',
  component: GameGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}

export const FewGames = {
  args: {
    games: [
      { name: 'Blackjack', href: '/blackjack', badge: 'New', accentColor: '#7dd3fc' },
      { name: 'Dice', href: '/dice', accentColor: '#fb923c' },
    ],
  },
}
