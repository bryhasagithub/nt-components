import React from "react"
import { GameBoardTile } from "./GameBoardTile"
import "./GameBoard.css"

/* 4x4 layout; center 2x2 is one active tile. */
const BOARD_LAYOUT = [
  { type: "play", gridColumn: 1, gridRow: 1 },
  { type: "multiplier", value: "4.00x", gridColumn: 2, gridRow: 1 },
  { type: "multiplier", value: "2.50x", gridColumn: 3, gridRow: 1 },
  { type: "multiplier", value: "1.40x", gridColumn: 4, gridRow: 1 },
  { type: "multiplier", value: "4.00x", gridColumn: 1, gridRow: 2 },
  { type: "active", value: "1.00x", gridColumn: "2 / 4", gridRow: "2 / 4" },
  { type: "multiplier", value: "1.11x", gridColumn: 4, gridRow: 2 },
  { type: "multiplier", value: "2.50x", gridColumn: 1, gridRow: 3 },
  { type: "trophy", gridColumn: 4, gridRow: 3 },
  { type: "multiplier", value: "1.40x", gridColumn: 1, gridRow: 4 },
  { type: "multiplier", value: "1.11x", gridColumn: 2, gridRow: 4 },
  { type: "trophy", gridColumn: 3, gridRow: 4 },
  { type: "trophy", gridColumn: 4, gridRow: 4 },
]

export function GameBoard() {
  return (
    <div className="game-board">
      <div className="game-board__grid" role="grid" aria-label="Game board">
        {BOARD_LAYOUT.map((cell, i) => (
          <div
            key={i}
            className="game-board__cell"
            style={{
              gridColumn: cell.gridColumn,
              gridRow: cell.gridRow,
            }}
          >
            <GameBoardTile type={cell.type} value={cell.value} />
          </div>
        ))}
      </div>
      <div className="game-board__pagination" aria-hidden="true">
        <span className="game-board__dot game-board__dot--active" />
        <span className="game-board__dot" />
        <span className="game-board__dot" />
        <span className="game-board__dot" />
        <span className="game-board__dot" />
      </div>
    </div>
  )
}
