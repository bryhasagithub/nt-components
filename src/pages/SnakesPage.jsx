import React, { useState, useMemo } from "react"
import { Header } from "../components/Header/Header"
import { GameBoard } from "../components/GameBoard/GameBoard"
import "./PageLayout.css"
import "./SnakesPage.css"

const DIFFICULTIES = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
  { value: "expert", label: "Expert" },
  { value: "master", label: "Master" },
]

/* 5x5 grid: center = 2 dice + 1 current-multi tile; multiplier/snake tiles wrap around */

const OUTER_INDICES = [1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24]
const INNER_INDICES = [6, 7, 8, 13, 16, 18]
const TILE_GRID_INDICES = [...OUTER_INDICES, ...INNER_INDICES]
const MULT_COUNT = 8

const MULTIPLIER_POOL = [
  1.0, 1.11, 1.25, 1.4, 1.6, 2.0, 2.5, 3.0, 4.0, 5.0, 7.5, 10.0,
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildBoard() {
  const mults = shuffle([...MULTIPLIER_POOL]).slice(0, MULT_COUNT)
  const multIndices = shuffle([...OUTER_INDICES]).slice(0, MULT_COUNT)
  const gridIndexToMult = new Map(multIndices.map((idx, i) => [idx, mults[i]]))
  return TILE_GRID_INDICES.map((gridIndex, i) => {
    const value = gridIndexToMult.get(gridIndex)
    return {
      id: i,
      gridIndex,
      type: value != null ? "multiplier" : "snake",
      value: value ?? null,
      revealed: false,
    }
  })
}

function SnakeIcon() {
  return (
    <svg
      className="snakes-tile__snake-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c-2 0-4 1.5-4 4v2c0 1.5 1 2.5 2 3l-1 2h6l-1-2c1-.5 2-1.5 2-3V6c0-2.5-2-4-4-4z" />
      <circle cx="9" cy="7" r="1" fill="currentColor" />
      <circle cx="15" cy="7" r="1" fill="currentColor" />
      <path d="M10 12v3M14 12v3" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg
      className="snakes-tile__play-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  )
}

/** Single die showing 1–6 pips */
function Die({ value = 1 }) {
  const v = Math.min(6, Math.max(1, value))
  const size = 24
  const r = 2.2
  const positions = {
    1: [[12, 12]],
    2: [
      [8, 8],
      [16, 16],
    ],
    3: [
      [8, 8],
      [12, 12],
      [16, 16],
    ],
    4: [
      [8, 8],
      [16, 8],
      [8, 16],
      [16, 16],
    ],
    5: [
      [8, 8],
      [16, 8],
      [12, 12],
      [8, 16],
      [16, 16],
    ],
    6: [
      [8, 8],
      [16, 8],
      [8, 12],
      [16, 12],
      [8, 16],
      [16, 16],
    ],
  }
  const dots = positions[v] || positions[1]
  return (
    <svg
      className="snakes-die"
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" />
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
      ))}
    </svg>
  )
}

export function SnakesPage() {
  const [amount, setAmount] = useState("0.00")
  const [difficulty, setDifficulty] = useState("medium")
  const [board, setBoard] = useState([])
  const [currentMultiplier, setCurrentMultiplier] = useState(1.0)
  const [totalNetGain, setTotalNetGain] = useState("0.00")
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [lastRevealedIndex, setLastRevealedIndex] = useState(null)
  const [diceRoll, setDiceRoll] = useState([1, 1])

  const unrevealedIndices = useMemo(
    () => board.map((t, i) => (t.revealed ? -1 : i)).filter((i) => i >= 0),
    [board],
  )

  const canRoll = gameStarted && !gameOver && unrevealedIndices.length > 0

  const handlePlay = () => {
    const bet = parseFloat(amount) || 0
    if (bet <= 0) return
    setBoard(buildBoard())
    setCurrentMultiplier(1.0)
    setTotalNetGain("0.00")
    setGameStarted(true)
    setGameOver(false)
    setLastRevealedIndex(null)
    setDiceRoll([1, 1])
  }

  const handleRoll = () => {
    if (!canRoll || unrevealedIndices.length === 0) return
    const die1 = Math.floor(Math.random() * 6) + 1
    const die2 = Math.floor(Math.random() * 6) + 1
    setDiceRoll([die1, die2])
    const boardIndex =
      unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)]
    const tile = board[boardIndex]
    setBoard((prev) =>
      prev.map((t, i) => (i === boardIndex ? { ...t, revealed: true } : t)),
    )
    setLastRevealedIndex(tile.gridIndex)
    if (tile.type === "snake") {
      setGameOver(true)
      const bet = parseFloat(amount) || 0
      setTotalNetGain((-bet).toFixed(2))
    } else {
      const mult = tile.value ?? 1
      setCurrentMultiplier(mult)
      const bet = parseFloat(amount) || 0
      setTotalNetGain((bet * (mult - 1)).toFixed(2))
    }
  }

  const handleHalf = () => {
    const n = parseFloat(amount) || 0
    setAmount((n / 2).toFixed(2))
  }
  const handleDouble = () => {
    const n = parseFloat(amount) || 0
    setAmount((n * 2).toFixed(2))
  }

  const difficultyIndex = DIFFICULTIES.findIndex((d) => d.value === difficulty)
  const currentDifficultyLabel =
    DIFFICULTIES.find((d) => d.value === difficulty)?.label ?? "Medium"

  return (
    <div className="nuts-page">
      <Header balanceUsd="$6.03" balanceSol="0.06998309" />
      <main className="nuts-page__main nuts-page__main--game">
        <div className="snakes">
          <h2
            className="snakes__title snakes__title--mobile"
            aria-hidden="true"
          >
            SNAKES
          </h2>
          <div className="snakes__panel snakes__controls">
            <h2 className="snakes__title">SNAKES</h2>

            <div className="snakes__slider-wrap">
              <label className="snakes__slider-label" htmlFor="snakes-difficulty">
                Difficulty
              </label>
              <input
                type="range"
                id="snakes-difficulty"
                className="snakes__slider snakes__slider--range"
                min={0}
                max={DIFFICULTIES.length - 1}
                step={1}
                value={difficultyIndex >= 0 ? difficultyIndex : 1}
                onChange={(e) =>
                  setDifficulty(DIFFICULTIES[Number(e.target.value)]?.value ?? "medium")
                }
                aria-valuemin={0}
                aria-valuemax={DIFFICULTIES.length - 1}
                aria-valuenow={difficultyIndex}
                aria-valuetext={currentDifficultyLabel}
              />
              <span className="snakes__slider-value" aria-hidden="true">
                {currentDifficultyLabel}
              </span>
            </div>

            <button
              type="button"
              className="snakes__play-btn"
              onClick={handlePlay}
            >
              <span className="snakes__play-btn-text">PLAY</span>
              <span className="snakes__play-btn-icon" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l2 2" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <button
              type="button"
              className="snakes__roll-btn"
              onClick={handleRoll}
              disabled={!canRoll}
            >
              ROLL
            </button>

            <div className="snakes__amount-block">
              <div className="snakes__amount-controls snakes__amount-controls--left">
                <button
                  type="button"
                  className="snakes__amount-btn"
                  onClick={() =>
                    setAmount((n) =>
                      Math.max(0, (parseFloat(n) || 0) - 0.01).toFixed(2),
                    )
                  }
                >
                  −
                </button>
                <button
                  type="button"
                  className="snakes__amount-btn snakes__amount-btn--minmax"
                  onClick={() => setAmount("0.01")}
                >
                  MIN
                </button>
              </div>
              <div className="snakes__amount-display">
                <span className="snakes__amount-usd">${amount}</span>
                <span className="snakes__amount-sol">0.00000010 SOL</span>
              </div>
              <div className="snakes__amount-controls snakes__amount-controls--right">
                <button
                  type="button"
                  className="snakes__amount-btn"
                  onClick={() =>
                    setAmount((n) => ((parseFloat(n) || 0) + 0.01).toFixed(2))
                  }
                >
                  +
                </button>
                <button
                  type="button"
                  className="snakes__amount-btn snakes__amount-btn--minmax"
                  onClick={() => setAmount("100.00")}
                >
                  MAX
                </button>
              </div>
            </div>

            <div className="snakes__field">
              <label className="snakes__label">
                Total Net Gain ({currentMultiplier.toFixed(2)}x)
              </label>
              <div className="snakes__gain-row">
                <span className="snakes__gain-value">{totalNetGain}</span>
              </div>
            </div>
          </div>

          <div className="snakes__panel snakes__board-wrap">
            <GameBoard />
          </div>
        </div>
      </main>
    </div>
  )
}
