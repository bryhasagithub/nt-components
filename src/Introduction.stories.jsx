import React from 'react'

export default {
  title: 'Introduction',
  parameters: {
    layout: 'padded',
  },
}

export const Welcome = {
  render: () => (
    <div style={{ maxWidth: 640, lineHeight: 1.6 }}>
      <h1 style={{ marginTop: 0 }}>NUTS.GG Component Library</h1>
      <p>
        Storybook for <strong>nuts.gg</strong> UI components and pages, built from the provided HTML and screenshots.
      </p>
      <h2>Sidebar</h2>
      <ul>
        <li><strong>NUTS.GG</strong> – Reusable components (Logo, Button, Header, GameCard, etc.)</li>
        <li><strong>NUTS.GG Pages</strong> – Full page layouts (HomePage, HiLoPage, AffiliatePage) and reference screenshots</li>
      </ul>
      <h2>Components</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <th style={{ textAlign: 'left', padding: '8px 0' }}>Component</th>
            <th style={{ textAlign: 'left', padding: '8px 0' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>Logo</td><td style={{ padding: '8px 0' }}>NUTS.GG acorn icon + text</td></tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>Button</td><td style={{ padding: '8px 0' }}>Primary (green) / secondary</td></tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>BalanceDisplay</td><td style={{ padding: '8px 0' }}>USD + SOL balance</td></tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>Header</td><td style={{ padding: '8px 0' }}>App header with logo, balance, deposit, user</td></tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>GameCard</td><td style={{ padding: '8px 0' }}>Game tile with accent color and optional badge</td></tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>GameGrid</td><td style={{ padding: '8px 0' }}>Responsive grid of game cards</td></tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>NavMenu</td><td style={{ padding: '8px 0' }}>Wallet, Account, Perks, EARN, Hi-Lo, Slots</td></tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '8px 0' }}>ChatButton</td><td style={{ padding: '8px 0' }}>Floating chat FAB</td></tr>
        </tbody>
      </table>
      <h2>Pages</h2>
      <ul>
        <li><strong>HomePage</strong> – Header, nav, game grid</li>
        <li><strong>HiLoPage</strong> – Hi-Lo game (bet, cards, live games)</li>
        <li><strong>AffiliatePage</strong> – Earn / referral section</li>
        <li><strong>Reference Screenshots</strong> – Design refs (homepage, hi-lo, chatbox)</li>
      </ul>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Theme: dark background, green accent #16BD92, purple–pink gradient.
      </p>
    </div>
  ),
}
