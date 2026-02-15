import { Button } from './Button'

export default {
  title: 'NUTS.GG/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
}

export const Primary = {
  args: {
    children: 'deposit',
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
  },
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
}

export const Disabled = {
  args: {
    children: 'deposit',
    variant: 'primary',
    disabled: true,
  },
}
