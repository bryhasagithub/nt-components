import React from 'react'
import { Header } from '../components/Header/Header'
import { NavMenu } from '../components/NavMenu/NavMenu'
import { GameGrid } from '../components/GameGrid/GameGrid'
import { ChatButton } from '../components/ChatButton/ChatButton'
import './PageLayout.css'

export function HomePage() {
  return (
    <div className="nuts-page">
      <Header />
      <div className="nuts-page__nav-wrap">
        <NavMenu />
      </div>
      <main className="nuts-page__main">
        <div className="nuts-page__content">
          <GameGrid />
        </div>
      </main>
      <ChatButton />
    </div>
  )
}
