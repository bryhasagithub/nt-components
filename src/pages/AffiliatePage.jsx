import React from 'react'
import { Header } from '../components/Header/Header'
import { NavMenu } from '../components/NavMenu/NavMenu'
import { Button } from '../components/Button/Button'
import { ChatButton } from '../components/ChatButton/ChatButton'
import './PageLayout.css'
import './AffiliatePage.css'

export function AffiliatePage() {
  return (
    <div className="nuts-page">
      <Header />
      <div className="nuts-page__nav-wrap">
        <NavMenu />
      </div>
      <main className="nuts-page__main">
        <div className="nuts-affiliate">
          <div className="nuts-affiliate__hero">
            <h1 className="nuts-affiliate__title">Earn with NUTS.GG</h1>
            <p className="nuts-affiliate__subtitle">
              Refer players and earn a share of the house edge. Track your referrals and commissions in one place.
            </p>
            <Button variant="primary" size="large">Get referral link</Button>
          </div>
          <div className="nuts-affiliate__cards">
            <div className="nuts-affiliate__card">
              <h3>Commission rate</h3>
              <p className="nuts-affiliate__stat">Up to 30%</p>
              <p className="nuts-affiliate__muted">Based on your league tier</p>
            </div>
            <div className="nuts-affiliate__card">
              <h3>Lifetime revenue</h3>
              <p className="nuts-affiliate__stat">From referred players</p>
              <p className="nuts-affiliate__muted">No cap on earnings</p>
            </div>
            <div className="nuts-affiliate__card">
              <h3>Real-time stats</h3>
              <p className="nuts-affiliate__stat">Dashboard</p>
              <p className="nuts-affiliate__muted">Clicks, signups, and revenue</p>
            </div>
          </div>
        </div>
      </main>
      <ChatButton />
    </div>
  )
}
