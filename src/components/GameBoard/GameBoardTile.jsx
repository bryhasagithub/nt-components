import React from "react"
import "./GameBoardTile.css"

/** Minimal B&W nuts (acorn) icon for non-multiplier tiles – matches Logo branding */
const NutIconMinimal = () => (
  <svg
    className="game-board-tile__nut-icon"
    viewBox="0 0 552 552"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M293.251 103.5C291.942 103.501 290.65 103.205 289.473 102.633C288.296 102.061 287.264 101.228 286.456 100.199C285.649 99.169 285.086 97.9689 284.81 96.6894C284.535 95.4099 284.555 94.0845 284.867 92.8137C289.314 74.2106 291.991 55.2287 292.863 36.1216L261.036 41.4259C265.343 58.9132 267.472 76.8656 267.376 94.8751C267.376 97.1625 266.467 99.3563 264.85 100.974C263.232 102.591 261.038 103.5 258.751 103.5C256.463 103.5 254.27 102.591 252.652 100.974C251.035 99.3563 250.126 97.1625 250.126 94.8751C250.305 75.3077 247.528 55.8255 241.889 37.0876C241.522 35.9114 241.412 34.6703 241.565 33.4478C241.718 32.2254 242.131 31.0499 242.777 30.0006C243.423 28.9513 244.286 28.0525 245.308 27.3646C246.33 26.6768 247.488 26.2159 248.703 26.0131L300.453 17.3881C301.704 17.1785 302.985 17.2474 304.207 17.5899C305.428 17.9323 306.558 18.5399 307.518 19.3693C308.478 20.1987 309.242 21.2296 309.758 22.3883C310.274 23.5471 310.527 24.8054 310.501 26.0734C310.117 49.9461 307.141 73.7065 301.626 96.9364C301.165 98.8094 300.089 100.474 298.571 101.664C297.053 102.853 295.18 103.5 293.251 103.5Z"
      fill="currentColor"
    />
    <path
      d="M431.25 258.75H120.75C109.317 258.736 98.3557 254.188 90.2711 246.104C82.1866 238.019 77.6387 227.058 77.625 215.625C77.6547 190.472 87.6599 166.357 105.446 148.571C123.232 130.785 147.347 120.78 172.5 120.75H379.5C404.653 120.78 428.768 130.785 446.554 148.571C464.34 166.357 474.345 190.472 474.375 215.625C474.361 227.058 469.813 238.019 461.729 246.104C453.644 254.188 442.683 258.736 431.25 258.75ZM172.5 138C151.92 138.025 226.037 123.448 211.485 138C196.933 152.552 206.68 127.991 206.655 148.571C206.655 155.434 415.012 201.178 419.865 206.03C424.718 210.883 113.888 241.5 120.75 241.5L437.805 193.2C444.667 193.2 441.701 201.848 446.554 196.995C451.406 192.142 437.805 229.387 437.805 222.525C437.782 201.945 176.013 207.753 161.46 193.2C146.907 178.647 367.77 131.445 385.02 138.345L272.205 185.265L172.5 138Z"
      fill="currentColor"
    />
    <path
      d="M135 283H415L436 307L431.5 386.5L415 438.5L275.5 526L135 437L118.5 384.5V325.5V292L135 283Z"
      fill="currentColor"
    />
  </svg>
)

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
      {type === "trophy" && <NutIconMinimal />}
    </div>
  )
}
