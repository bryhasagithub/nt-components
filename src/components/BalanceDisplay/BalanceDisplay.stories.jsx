import { BalanceDisplay } from './BalanceDisplay'

export default {
  title: 'NUTS.GG/BalanceDisplay',
  component: BalanceDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    usd: { control: 'text' },
    sol: { control: 'text' },
  },
}

export const Default = {
  args: {
    usd: '$6.03',
    sol: '0.06998309',
  },
}

export const LargeBalance = {
  args: {
    usd: '$1,234.56',
    sol: '125.5',
  },
}

export const Zero = {
  args: {
    usd: '$0.00',
    sol: '0',
  },
}
