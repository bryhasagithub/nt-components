import { WalletPage } from './WalletPage'

export default {
  title: 'NUTS.GG Pages/WalletPage',
  component: WalletPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => <WalletPage />,
}
