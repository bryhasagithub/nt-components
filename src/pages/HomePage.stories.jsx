import { HomePage } from './HomePage'

export default {
  title: 'NUTS.GG Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => <HomePage />,
}
