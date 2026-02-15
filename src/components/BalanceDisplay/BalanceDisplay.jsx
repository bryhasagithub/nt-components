import React from 'react'
import './BalanceDisplay.css'

export function BalanceDisplay({ usd = '$6.03', sol = '0.06998309', title }) {
  const fullTitle = title ?? `${usd} (${sol} SOL)`
  return (
    <div className="nuts-balance" title={fullTitle}>
      <div className="nuts-balance__usd">
        <span>{usd}</span>
      </div>
      <div className="nuts-balance__sol">
        <span>{sol} SOL</span>
      </div>
    </div>
  )
}
