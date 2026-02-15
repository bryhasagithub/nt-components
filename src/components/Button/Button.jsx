import React from 'react'
import './Button.css'

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={`nuts-button nuts-button--${variant} nuts-button--${size}`}
      disabled={disabled}
      {...props}
    >
      <span className="nuts-button__label">{children}</span>
    </Component>
  )
}
