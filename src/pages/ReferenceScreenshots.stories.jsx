/**
 * Reference screenshots from nuts.gg.
 * Copy your screenshots (homepage.png, hi-lo.png, homepage-withchatbox.png) into the `public/` folder
 * so they appear here. Then they will be available at /homepage.png, /hi-lo.png, etc.
 */
import React from 'react'

export default {
  title: 'NUTS.GG Pages/Reference Screenshots',
  parameters: {
    layout: 'padded',
  },
}

const screenshotStyle = {
  maxWidth: '100%',
  width: 800,
  border: '1px solid var(--border-color)',
  borderRadius: 8,
  marginBottom: 24,
}

export const Homepage = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16, color: 'var(--text-secondary)' }}>
        Reference: nuts.gg homepage (game grid). Copy <code>homepage.png</code> into <code>public/</code> to display.
      </p>
      <img src="/homepage.png" alt="Homepage reference" style={screenshotStyle} />
    </div>
  ),
}

export const HiLo = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16, color: 'var(--text-secondary)' }}>
        Reference: Hi-Lo game page. Copy <code>hi-lo.png</code> into <code>public/</code> to display.
      </p>
      <img src="/hi-lo.png" alt="Hi-Lo reference" style={screenshotStyle} />
    </div>
  ),
}

export const HomepageWithChatbox = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16, color: 'var(--text-secondary)' }}>
        Reference: Homepage with chat. Copy <code>homepage-withchatbox.png</code> into <code>public/</code> to display.
      </p>
      <img src="/homepage-withchatbox.png" alt="Homepage with chat reference" style={screenshotStyle} />
    </div>
  ),
}
