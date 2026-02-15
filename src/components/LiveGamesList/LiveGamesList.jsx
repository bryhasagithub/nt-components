import React, { useState } from 'react'
import { GAME_TILE_IMAGES } from '../../lib/gameTileImgs'
import './LiveGamesList.css'

const DEFAULT_LIVE_GAMES = [
  { game: 'Dice', player: 'Hidden', time: '12:01:15 PM', multiplier: 'x28.29', result: '-$0.00', win: false },
  { game: 'Keno', player: 'gazon4ik', time: '12:01:15 PM', multiplier: 'x0.00', result: '-$0.07', win: false },
  { game: 'Chicken', player: 'Notobp', time: '12:01:15 PM', multiplier: 'x1.01', result: '$0.00', win: true },
  { game: 'Darts', player: 'Hidden', time: '12:01:14 PM', multiplier: 'x1.02', result: '$0.00', win: true },
  { game: 'Dice', player: 'Hidden', time: '12:01:14 PM', multiplier: 'x1.96', result: '$0.00', win: true },
  { game: 'Mines', player: 'Hidden', time: '12:01:13 PM', multiplier: 'x50.00', result: '$0.00', win: true },
]

export function LiveGamesList({ liveGames = DEFAULT_LIVE_GAMES, myGames = [], totalGames = '794,298,946' }) {
  const [activeTab, setActiveTab] = useState('live')
  const list = activeTab === 'live' ? liveGames : myGames
  const displayList = list.length ? list : (activeTab === 'live' ? liveGames : [])

  return (
    <section className="nuts-live-games">
      <div className="nuts-live-games__tabs">
        <button
          type="button"
          className={`nuts-live-games__tab ${activeTab === 'live' ? 'nuts-live-games__tab--active' : ''}`}
          onClick={() => setActiveTab('live')}
        >
          LIVE GAMES
        </button>
        <button
          type="button"
          className={`nuts-live-games__tab ${activeTab === 'my' ? 'nuts-live-games__tab--active' : ''}`}
          onClick={() => setActiveTab('my')}
        >
          MY GAMES
        </button>
      </div>
      <div className="nuts-live-games__list-wrap">
        <ul className="nuts-live-games__list">
          {displayList.length === 0 && activeTab === 'my' ? (
            <li className="nuts-live-games__empty">No games yet. Play to see your history here.</li>
          ) : displayList.map((row, i) => {
            const gameKey = row.game?.toLowerCase()
            const iconUrl = GAME_TILE_IMAGES[gameKey]
            const resultStr = String(row.result ?? '')
            const isPositive = resultStr.trimStart().startsWith('$') && !resultStr.trimStart().startsWith('-$')
            return (
              <li key={`${row.game}-${row.player}-${i}`} className="nuts-live-games__row">
                <div className="nuts-live-games__game">
                  {iconUrl ? (
                    <img src={iconUrl} alt="" className="nuts-live-games__icon" width={24} height={24} />
                  ) : (
                    <span className="nuts-live-games__icon-placeholder">{row.game?.slice(0, 1) || '?'}</span>
                  )}
                  <span className="nuts-live-games__game-name">{row.game}</span>
                </div>
                <span className="nuts-live-games__player">{row.player}</span>
                <span className="nuts-live-games__time">{row.time}</span>
                <span className="nuts-live-games__multiplier">{row.multiplier}</span>
                <span className={`nuts-live-games__result ${isPositive ? 'nuts-live-games__result--win' : ''}`}>
                  {row.result}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      {totalGames != null && (
        <div className="nuts-live-games__total">
          TOTAL GAMES {totalGames}
        </div>
      )}
    </section>
  )
}
