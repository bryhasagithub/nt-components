import React from "react"
import { Header } from "../components/Header/Header"
import { ChatButton } from "../components/ChatButton/ChatButton"
import { Button } from "../components/Button/Button"
import "./PageLayout.css"
import "./HiLoPage.css"

export function HiLoPage() {
  return (
    <div className="nuts-page">
      <Header balanceUsd="$6.04" balanceSol="0.06998309" />
      <div className="nuts-page__nav-wrap"></div>
      <main className="nuts-page__main nuts-page__main--game">
        <div className="nuts-hilo">
          <div className="nuts-hilo__panel nuts-hilo__controls">
            <div className="nuts-hilo__cashout">
              <div className="nuts-hilo__cashout-label">CASHOUT</div>
              <div className="nuts-hilo__cashout-value">$0.59</div>
              <div className="nuts-hilo__cashout-sol">0.00688128 SOL</div>
            </div>
            <div className="nuts-hilo__bet">
              <button type="button" className="nuts-hilo__bet-btn">
                MIN
              </button>
              <button type="button" className="nuts-hilo__bet-btn">
                −
              </button>
              <div className="nuts-hilo__bet-input">
                <span>$0.28</span>
                <span className="nuts-hilo__bet-sol">0.00327680 SOL</span>
              </div>
              <button type="button" className="nuts-hilo__bet-btn">
                +
              </button>
              <button type="button" className="nuts-hilo__bet-btn">
                MAX
              </button>
            </div>
          </div>
          <div className="nuts-hilo__panel nuts-hilo__game">
            <div className="nuts-hilo__tabs">
              <button
                type="button"
                className="nuts-hilo__tab nuts-hilo__tab--active"
              >
                PAYOUT
              </button>
              <button type="button" className="nuts-hilo__tab">
                CHANCE
              </button>
            </div>
            <div className="nuts-hilo__cards">
              <div className="nuts-hilo__choice nuts-hilo__choice--higher">
                <span className="nuts-hilo__choice-arrow">↑</span>
                <span>HIGHER OR SAME</span>
                <span className="nuts-hilo__multiplier">x4.55</span>
              </div>
              <div className="nuts-hilo__current-card">
                <div className="nuts-hilo__card-face">8♠</div>
                <div className="nuts-hilo__card-deck" />
              </div>
              <div className="nuts-hilo__choice nuts-hilo__choice--lower">
                <span className="nuts-hilo__choice-arrow">↓</span>
                <span>LOWER OR SAME</span>
                <span className="nuts-hilo__multiplier">x3.41</span>
              </div>
            </div>
            <div className="nuts-hilo__previous">
              <div className="nuts-hilo__prev-cards">
                <span className="nuts-hilo__mini-card">8♣</span>
                <span className="nuts-hilo__mini-card">8♠</span>
              </div>
              <Button variant="primary" className="nuts-hilo__start">
                start
              </Button>
              <span className="nuts-hilo__multiplier">x2.10</span>
            </div>
          </div>
        </div>
        <div className="nuts-hilo__live">
          <div className="nuts-hilo__tabs">
            <button
              type="button"
              className="nuts-hilo__tab nuts-hilo__tab--active"
            >
              LIVE GAMES
            </button>
            <button type="button" className="nuts-hilo__tab">
              MY GAMES
            </button>
          </div>
          <ul className="nuts-hilo__list">
            <li>
              <span className="nuts-hilo__list-icon">◆</span> Mines · DOP3Y ·
              10:08:13 AM · x4368252.00 · -$0.00
            </li>
            <li>
              <span className="nuts-hilo__list-icon">◆</span> Dice · Lugarge ·
              10:08:12 AM · x2.48 · -$0.00
            </li>
          </ul>
        </div>
      </main>
      <ChatButton />
    </div>
  )
}
