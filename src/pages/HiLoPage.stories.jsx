import { HiLoPage } from './HiLoPage'

export default {
  title: 'NUTS.GG Pages/HiLoPage',
  component: HiLoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => <HiLoPage />,
}
