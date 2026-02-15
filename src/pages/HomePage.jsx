import React from 'react'
import { Header } from '../components/Header/Header'
import { GameGrid } from '../components/GameGrid/GameGrid'
import { PromoCards } from '../components/PromoCards/PromoCards'
import { LiveGamesList } from '../components/LiveGamesList/LiveGamesList'
import { HomepageContent } from '../components/HomepageContent/HomepageContent'
import { WalletBar } from '../components/WalletBar/WalletBar'
import { Footer } from '../components/Footer/Footer'
import './PageLayout.css'

export function HomePage() {
  return (
    <div className="nuts-page">
      <Header />
      <main className="nuts-page__main">
        <div className="nuts-page__content">
          <GameGrid />
          <PromoCards />
          <LiveGamesList />
          <footer className="nuts-page__footer">
            <WalletBar />
            <HomepageContent twoColumns />
            <Footer />
          </footer>
        </div>
      </main>
    </div>
  )
}
