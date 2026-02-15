import { Header } from './Header'

export default {
  title: 'NUTS.GG/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'nuts (black)' },
  },
  tags: ['autodocs'],
  argTypes: {
    username: { control: 'text' },
    balanceUsd: { control: 'text' },
    balanceSol: { control: 'text' },
    showDeposit: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    username: 'breee',
    balanceUsd: '$6.03',
    balanceSol: '0.06998309',
    showDeposit: true,
  },
}

export const NoDeposit = {
  args: {
    username: 'player1',
    balanceUsd: '$100.00',
    balanceSol: '1.5',
    showDeposit: false,
  },
}
