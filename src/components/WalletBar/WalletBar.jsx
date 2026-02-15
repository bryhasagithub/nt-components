import React from 'react'
import './WalletBar.css'

export function WalletBar() {
  return (
    <div className="nuts-wallet-bar">
      <span className="nuts-wallet-bar__logo">SOLANA</span>
      <span className="nuts-wallet-bar__divider" aria-hidden="true" />
      <div className="nuts-wallet-bar__icons" aria-hidden="true">
        <span className="nuts-wallet-bar__icon" title="Ethereum" />
        <span className="nuts-wallet-bar__icon" title="MetaMask" />
        <span className="nuts-wallet-bar__icon" title="Solana" />
        <span className="nuts-wallet-bar__icon" title="Wallet" />
      </div>
      <span className="nuts-wallet-bar__divider" aria-hidden="true" />
      <span className="nuts-wallet-bar__text">All wallets and exchanges supported</span>
    </div>
  )
}
