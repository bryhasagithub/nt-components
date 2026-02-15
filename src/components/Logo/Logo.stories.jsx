import { Logo } from './Logo'

export default {
  title: 'NUTS.GG/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    showText: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    href: '/',
    showText: true,
  },
}

export const IconOnly = {
  args: {
    href: '/',
    showText: false,
  },
}

export const NoLink = {
  args: {
    href: '',
    showText: true,
  },
}
