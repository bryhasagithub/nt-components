import React, { useState, useMemo } from "react"
import { Header } from "../components/Header/Header"
import { Button } from "../components/Button/Button"
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
const GRID_SIZE = 5
const TOTAL_CELLS = 25
const PLAY_INDEX = 0
const DIE1_INDEX = 11
const DIE2_INDEX = 12
const MULTI_DISPLAY_INDEX = 17
const FIXED_INDICES = [PLAY_INDEX, DIE1_INDEX, DIE2_INDEX, MULTI_DISPLAY_INDEX]
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
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
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
    2: [[8, 8], [16, 16]],
    3: [[8, 8], [12, 12], [16, 16]],
    4: [[8, 8], [16, 8], [8, 16], [16, 16]],
    5: [[8, 8], [16, 8], [12, 12], [8, 16], [16, 16]],
    6: [[8, 8], [16, 8], [8, 12], [16, 12], [8, 16], [16, 16]],
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
  const [mode, setMode] = useState("manual")
  const [amount, setAmount] = useState("0.00")
  const [difficulty, setDifficulty] = useState("medium")
  const [difficultyOpen, setDifficultyOpen] = useState(false)
  const [board, setBoard] = useState([])
  const [currentMultiplier, setCurrentMultiplier] = useState(1.0)
  const [totalNetGain, setTotalNetGain] = useState("0.00")
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [lastRevealedIndex, setLastRevealedIndex] = useState(null)
  const [diceRoll, setDiceRoll] = useState([1, 1])

  const unrevealedIndices = useMemo(
    () => board.map((t, i) => (t.revealed ? -1 : i)).filter((i) => i >= 0),
    [board]
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
      prev.map((t, i) =>
        i === boardIndex ? { ...t, revealed: true } : t
      )
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

  const currentDifficultyLabel =
    DIFFICULTIES.find((d) => d.value === difficulty)?.label ?? "Medium"

  return (
    <div className="nuts-page">
      <Header balanceUsd="$6.03" balanceSol="0.06998309" />
      <main className="nuts-page__main nuts-page__main--game">
        <div className="snakes">
          <div className="snakes__panel snakes__controls">
            <div className="snakes__toggle-wrap">
              <button
                type="button"
                className={`snakes__mode-btn ${mode === "manual" ? "snakes__mode-btn--active" : ""}`}
                onClick={() => setMode("manual")}
              >
                Manual
              </button>
              <button
                type="button"
                className={`snakes__mode-btn ${mode === "auto" ? "snakes__mode-btn--active" : ""}`}
                onClick={() => setMode("auto")}
              >
                Auto
              </button>
            </div>

            <div className="snakes__field">
              <label className="snakes__label">Amount</label>
              <div className="snakes__amount-row">
                <input
                  type="text"
                  className="snakes__input"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  inputMode="decimal"
                />
                <span className="snakes__currency">S</span>
                <button
                  type="button"
                  className="snakes__quick-btn"
                  onClick={handleHalf}
                >
                  ½
                </button>
                <button
                  type="button"
                  className="snakes__quick-btn"
                  onClick={handleDouble}
                >
                  2x
                </button>
              </div>
            </div>

            <div className="snakes__field">
              <label className="snakes__label">Difficulty</label>
              <div className="snakes__select-wrap">
                <button
                  type="button"
                  className="snakes__select"
                  onClick={() => setDifficultyOpen((o) => !o)}
                  aria-expanded={difficultyOpen}
                >
                  {currentDifficultyLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {difficultyOpen && (
                  <div className="snakes__dropdown">
                    {DIFFICULTIES.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        className="snakes__dropdown-item"
                        onClick={() => {
                          setDifficulty(d.value)
                          setDifficultyOpen(false)
                        }}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="snakes__actions">
              <Button
                variant="primary"
                className="snakes__play-btn"
                onClick={handlePlay}
              >
                Play
              </Button>
              <button
                type="button"
                className="snakes__roll-btn"
                onClick={handleRoll}
                disabled={!canRoll}
              >
                Roll
              </button>
            </div>

            <div className="snakes__field">
              <label className="snakes__label">
                Total Net Gain ({currentMultiplier.toFixed(2)}x)
              </label>
              <div className="snakes__gain-row">
                <span className="snakes__gain-value">{totalNetGain}</span>
                <span className="snakes__currency">S</span>
              </div>
            </div>

            <div className="snakes__util-icons">
              <span className="snakes__util-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </span>
              <span className="snakes__util-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </span>
              <span className="snakes__util-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9M13 17V5M8 17v-3" />
                </svg>
              </span>
              <span className="snakes__util-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 13v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6" />
                  <path d="M12 15V3M12 3l4 4M12 3L8 7" />
                </svg>
              </span>
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
