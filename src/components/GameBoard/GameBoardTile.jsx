import React from "react"
import "./GameBoardTile.css"

/**
 * Reusable game board tile for the dark 4x4 board.
 * @param { "multiplier" | "play" | "trophy" | "active" } type
 * @param { string } [value] - e.g. "4.00x", "1.11x"
 */
export function GameBoardTile({ type, value }) {
  if (type === "active") {
    return (
      <div className="game-board-tile game-board-tile--active" role="gridcell">
        <div className="game-board-tile__active-inner">
          <div className="game-board-tile__dice-row">
            <div className="game-board-tile__dice" aria-hidden="true">
              <span className="game-board-tile__dice-dot" />
            </div>
            <div className="game-board-tile__dice" aria-hidden="true">
              <span className="game-board-tile__dice-dot" />
            </div>
          </div>
          <div className="game-board-tile__active-value">
            {value ?? "1.00x"}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`game-board-tile game-board-tile--${type}`}
      role="gridcell"
      data-value={value}
    >
      {type === "multiplier" && (
        <span className="game-board-tile__text">{value}</span>
      )}
      {type === "play" && (
        <span className="game-board-tile__play-icon" aria-hidden="true" />
      )}
      {type === "trophy" && (
        <span className="game-board-tile__trophy-icon" aria-hidden="true" />
      )}
    </div>
  )
}
