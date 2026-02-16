import React, { useState, useRef } from "react"
import { Header } from "../components/Header/Header"
import { Button } from "../components/Button/Button"
import {
  BRONZE_I_RANK_ICON,
  SILVER_II_RANK_ICON,
  GOLD_III_RANK_ICON,
  CRYSTAL_I_RANK_ICON,
} from "../lib/rankIcons"
import "./PageLayout.css"
import "./WalletPage.css"

const RANK_ICON_BY_KEY = {
  bronze: BRONZE_I_RANK_ICON,
  silver: SILVER_II_RANK_ICON,
  gold: GOLD_III_RANK_ICON,
  crystal: CRYSTAL_I_RANK_ICON,
}

const WALLET_SECTIONS = [
  { id: "deposit", label: "DEPOSIT", icon: "plus" },
  { id: "withdraw", label: "WITHDRAW", icon: "minus" },
  { id: "vault", label: "VAULT", icon: "vault" },
  { id: "history", label: "HISTORY", icon: "clock" },
  { id: "tips", label: "TIPS", icon: "tips" },
]

const TRANSACTION_TYPES = [
  "Any",
  "Deposits",
  "Withdrawals",
  "Vault Deposits",
  "Vault Withdrawals",
  "Affiliate Claims",
  "Faucet Claims",
  "Rakeback Claims",
  "Giveaway Entries",
  "Tips",
  "Lossback",
]

const SAMPLE_TRANSACTIONS = [
  { type: "AFFILIATE CLAIM", date: "15/02/26", sol: "0.00017292", usd: "0.01" },
  { type: "AFFILIATE CLAIM", date: "15/02/26", sol: "0.00122670", usd: "0.11" },
  { type: "GIVEAWAY REWARD", date: "15/02/26", sol: "0.00027787", usd: "0.02" },
  { type: "RAKEBACK CLAIM", date: "15/02/26", sol: "0.00013502", usd: "0.01" },
  { type: "AFFILIATE CLAIM", date: "15/02/26", sol: "0.00000000", usd: "0.00" },
  { type: "AFFILIATE CLAIM", date: "15/02/26", sol: "0.00025872", usd: "0.02" },
  { type: "DEPOSIT", date: "14/02/26", sol: "0.00500000", usd: "0.45" },
  { type: "RAKEBACK CLAIM", date: "14/02/26", sol: "0.00008921", usd: "0.01" },
  { type: "AFFILIATE CLAIM", date: "14/02/26", sol: "0.00041234", usd: "0.04" },
  { type: "WITHDRAWAL", date: "13/02/26", sol: "0.00200000", usd: "0.18" },
  { type: "GIVEAWAY REWARD", date: "13/02/26", sol: "0.00015678", usd: "0.01" },
  { type: "VAULT DEPOSIT", date: "12/02/26", sol: "0.00100000", usd: "0.09" },
  { type: "AFFILIATE CLAIM", date: "12/02/26", sol: "0.00022341", usd: "0.02" },
  { type: "RAKEBACK CLAIM", date: "11/02/26", sol: "0.00009876", usd: "0.01" },
  { type: "TIP RECEIVED", date: "11/02/26", sol: "0.00050000", usd: "0.05" },
  { type: "AFFILIATE CLAIM", date: "10/02/26", sol: "0.00033456", usd: "0.03" },
  { type: "GIVEAWAY REWARD", date: "10/02/26", sol: "0.00018902", usd: "0.02" },
  { type: "FAUCET CLAIM", date: "09/02/26", sol: "0.00005000", usd: "0.00" },
  { type: "AFFILIATE CLAIM", date: "09/02/26", sol: "0.00044567", usd: "0.04" },
  { type: "RAKEBACK CLAIM", date: "08/02/26", sol: "0.00011234", usd: "0.01" },
]

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const DEPOSIT_ADDRESS = "9ugMUd68qXh6L4oTWSZ5Mr7zqzQA..."

/* Tips view dummy data */
const TIPS_SUMMARY = {
  totalTipsGiven: "$1,240.50",
  totalTipsGivenSol: "6.89",
  totalTipsReceived: "$892.30",
  totalTipsReceivedSol: "4.95",
  totalTipNet: "-$348.20",
  totalTipNetSol: "-1.93",
  tipsGivenCount: 28,
  rainsDropped: 5,
  rainsReceived: 3,
}

const TIPS_BY_PERSON = [
  {
    username: "ElmoTheDad",
    tipsGiven: "$386.20",
    tipsReceived: "$120.00",
    net: "-$266.20",
    rank: "gold",
  },
  {
    username: "Brandondoan1",
    tipsGiven: "$210.50",
    tipsReceived: "$95.00",
    net: "-$115.50",
    rank: "silver",
  },
  {
    username: "CryptoKing",
    tipsGiven: "$85.00",
    tipsReceived: "$312.40",
    net: "$227.40",
    rank: "crystal",
  },
  {
    username: "SolanaFan",
    tipsGiven: "$45.20",
    tipsReceived: "$0.00",
    net: "-$45.20",
    rank: "bronze",
  },
  {
    username: "RainMaker",
    tipsGiven: "$0.00",
    tipsReceived: "$180.90",
    net: "$180.90",
    rank: "gold",
  },
  {
    username: "ChipStack",
    tipsGiven: "$520.60",
    tipsReceived: "$184.00",
    net: "-$336.60",
    rank: "silver",
  },
  {
    username: "klop",
    tipsGiven: "$89.40",
    tipsReceived: "$0.00",
    net: "-$89.40",
    rank: "bronze",
  },
  {
    username: "HighRoller99",
    tipsGiven: "$1,020.00",
    tipsReceived: "$44.50",
    net: "-$975.50",
    rank: "crystal",
  },
  {
    username: "LuckyDice",
    tipsGiven: "$12.30",
    tipsReceived: "$88.00",
    net: "$75.70",
    rank: "silver",
  },
  {
    username: "SolWhale",
    tipsGiven: "$2,150.00",
    tipsReceived: "$0.00",
    net: "-$2,150.00",
    rank: "gold",
  },
  {
    username: "TipBot",
    tipsGiven: "$0.00",
    tipsReceived: "$520.00",
    net: "$520.00",
    rank: "crystal",
  },
  {
    username: "DegenPlays",
    tipsGiven: "$156.80",
    tipsReceived: "$203.20",
    net: "$46.40",
    rank: "bronze",
  },
  {
    username: "MoonBound",
    tipsGiven: "$33.00",
    tipsReceived: "$33.00",
    net: "$0.00",
    rank: "silver",
  },
  {
    username: "AceOfSpades",
    tipsGiven: "$445.00",
    tipsReceived: "$112.00",
    net: "-$333.00",
    rank: "gold",
  },
  {
    username: "BettyWins",
    tipsGiven: "$78.90",
    tipsReceived: "$0.00",
    net: "-$78.90",
    rank: "bronze",
  },
  {
    username: "VaultKeeper",
    tipsGiven: "$0.00",
    tipsReceived: "$89.25",
    net: "$89.25",
    rank: "crystal",
  },
  {
    username: "RNGesus",
    tipsGiven: "$22.50",
    tipsReceived: "$156.75",
    net: "$134.25",
    rank: "gold",
  },
  {
    username: "AllInAndy",
    tipsGiven: "$890.40",
    tipsReceived: "$67.00",
    net: "-$823.40",
    rank: "silver",
  },
]

/* Per-user tip transaction history (dummy): date, amount, sender, receiver */
const CURRENT_USER_NAME = "You"
const TIPS_TRANSACTIONS_BY_USER = {
  ElmoTheDad: [
    { date: "14/02/26", amount: "$120.00", sender: "ElmoTheDad", receiver: CURRENT_USER_NAME },
    { date: "12/02/26", amount: "$186.20", sender: CURRENT_USER_NAME, receiver: "ElmoTheDad" },
    { date: "10/02/26", amount: "$200.00", sender: CURRENT_USER_NAME, receiver: "ElmoTheDad" },
  ],
  Brandondoan1: [
    { date: "15/02/26", amount: "$95.00", sender: "Brandondoan1", receiver: CURRENT_USER_NAME },
    { date: "11/02/26", amount: "$210.50", sender: CURRENT_USER_NAME, receiver: "Brandondoan1" },
  ],
  CryptoKing: [
    { date: "13/02/26", amount: "$312.40", sender: "CryptoKing", receiver: CURRENT_USER_NAME },
    { date: "09/02/26", amount: "$85.00", sender: CURRENT_USER_NAME, receiver: "CryptoKing" },
  ],
  SolanaFan: [
    { date: "08/02/26", amount: "$45.20", sender: CURRENT_USER_NAME, receiver: "SolanaFan" },
  ],
  RainMaker: [
    { date: "14/02/26", amount: "$180.90", sender: "RainMaker", receiver: CURRENT_USER_NAME },
  ],
  ChipStack: [
    { date: "12/02/26", amount: "$184.00", sender: "ChipStack", receiver: CURRENT_USER_NAME },
    { date: "10/02/26", amount: "$336.60", sender: CURRENT_USER_NAME, receiver: "ChipStack" },
  ],
  klop: [
    { date: "07/02/26", amount: "$89.40", sender: CURRENT_USER_NAME, receiver: "klop" },
  ],
}

function getTransactionsForUser(username) {
  return TIPS_TRANSACTIONS_BY_USER[username] || []
}

function WalletNav({ active, onSelect }) {
  return (
    <nav className="wallet-nav">
      {WALLET_SECTIONS.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          className={`wallet-nav__item ${active === id ? "wallet-nav__item--active" : ""}`}
          onClick={() => onSelect(id)}
        >
          <span className="wallet-nav__icon">
            {icon === "plus" && <PlusIcon />}
            {icon === "minus" && <MinusIcon />}
            {icon === "vault" && <VaultIcon />}
            {icon === "clock" && <ClockIcon />}
            {icon === "tips" && <TipsIcon />}
          </span>
          <span className="wallet-nav__label">{label}</span>
        </button>
      ))}
    </nav>
  )
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <rect x="3" y="3" width="14" height="14" rx="2" />
      <path d="M10 7v6M7 10h6" />
    </svg>
  )
}
function MinusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <rect x="3" y="3" width="14" height="14" rx="2" />
      <path d="M7 10h6" />
    </svg>
  )
}
function VaultIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <rect x="3" y="4" width="14" height="12" rx="1" />
      <path d="M4 8h12M4 11h12" />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l2.5 2.5" />
    </svg>
  )
}

function TipsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M10 4v12M6 8l4-4 4 4M6 12l4 4 4-4" />
    </svg>
  )
}

function DepositPanel({ balanceSol, balanceUsd }) {
  const [copied, setCopied] = useState(false)
  const copyAddress = () => {
    navigator.clipboard?.writeText(DEPOSIT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="wallet-panel">
      <h2 className="wallet-panel__heading">YOUR BALANCE</h2>
      <p className="wallet-panel__balance-sol">{balanceSol} SOL</p>
      <div className="wallet-panel__field">
        <input
          type="text"
          readOnly
          value={balanceUsd}
          className="wallet-panel__input"
        />
      </div>
      <h2 className="wallet-panel__heading">YOUR DEPOSIT ADDRESS</h2>
      <div className="wallet-panel__field wallet-panel__field--with-action">
        <input
          type="text"
          readOnly
          value={`${DEPOSIT_ADDRESS.slice(0, 20)}...`}
          className="wallet-panel__input"
        />
        <button
          type="button"
          className="wallet-panel__copy"
          onClick={copyAddress}
          aria-label="Copy address"
        >
          <CopyIcon />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="wallet-panel__qr">
        <div className="wallet-panel__qr-placeholder" aria-hidden />
      </div>
      <Button
        as="a"
        href="support/deposit"
        variant="primary"
        className="wallet-panel__missing-deposit"
      >
        MISSING DEPOSIT?
      </Button>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="5" y="5" width="9" height="9" rx="1" />
      <path d="M3 11V3a1 1 0 011-1h7" />
    </svg>
  )
}

function WithdrawPanel({ balanceSol, balanceUsd }) {
  return (
    <div className="wallet-panel">
      <h2 className="wallet-panel__heading">YOUR BALANCE</h2>
      <p className="wallet-panel__balance-sol">{balanceSol} SOL</p>
      <div className="wallet-panel__field">
        <input
          type="text"
          defaultValue={balanceUsd}
          className="wallet-panel__input"
          readOnly
        />
      </div>
      <h2 className="wallet-panel__heading">SOL ADDRESS</h2>
      <div className="wallet-panel__field">
        <input
          type="text"
          placeholder="Your SOL address"
          className="wallet-panel__input"
        />
      </div>
      <h2 className="wallet-panel__heading">USD AMOUNT</h2>
      <p className="wallet-panel__balance-sol">0.00100000 SOL</p>
      <div className="wallet-panel__field wallet-panel__field--with-buttons">
        <input
          type="text"
          defaultValue="0.09"
          className="wallet-panel__input"
        />
        <div className="wallet-panel__minmax">
          <button type="button" className="wallet-panel__minmax-btn">
            MIN
          </button>
          <button type="button" className="wallet-panel__minmax-btn">
            MAX
          </button>
        </div>
      </div>
      <Button
        className="wallet-panel__submit wallet-panel__submit--gradient"
        as="button"
      >
        WITHDRAW
      </Button>
    </div>
  )
}

function VaultPanel({ balanceSol, balanceUsd, vaultSol, vaultUsd }) {
  const [vaultTab, setVaultTab] = useState("deposit")
  return (
    <div className="wallet-panel">
      <div className="wallet-panel__tabs">
        <button
          type="button"
          className={`wallet-panel__tab ${vaultTab === "deposit" ? "wallet-panel__tab--active" : ""}`}
          onClick={() => setVaultTab("deposit")}
        >
          DEPOSIT
        </button>
        <button
          type="button"
          className={`wallet-panel__tab ${vaultTab === "withdraw" ? "wallet-panel__tab--active" : ""}`}
          onClick={() => setVaultTab("withdraw")}
        >
          WITHDRAW
        </button>
      </div>
      <h2 className="wallet-panel__heading">YOUR BALANCE</h2>
      <p className="wallet-panel__balance-sol">{balanceSol} SOL</p>
      <div className="wallet-panel__field">
        <input
          type="text"
          readOnly
          value={balanceUsd}
          className="wallet-panel__input"
        />
      </div>
      <h2 className="wallet-panel__heading">YOUR VAULT BALANCE</h2>
      <p className="wallet-panel__balance-sol">{vaultSol} SOL</p>
      <div className="wallet-panel__field">
        <input
          type="text"
          readOnly
          value={vaultUsd}
          className="wallet-panel__input"
        />
      </div>
      <h2 className="wallet-panel__heading">
        {vaultTab === "deposit"
          ? "USD AMOUNT TO DEPOSIT"
          : "USD AMOUNT TO WITHDRAW"}
      </h2>
      <p className="wallet-panel__balance-sol">0.00000000 SOL</p>
      <div className="wallet-panel__field wallet-panel__field--with-buttons">
        <input
          type="text"
          defaultValue="0.00"
          className="wallet-panel__input"
        />
        <button type="button" className="wallet-panel__max">
          MAX
        </button>
      </div>
      <Button
        className="wallet-panel__submit wallet-panel__submit--gradient"
        as="button"
      >
        {vaultTab === "deposit" ? "DEPOSIT TO VAULT" : "WITHDRAW FROM VAULT"}
      </Button>
    </div>
  )
}

const SELECT_DATE = "__select__"

function HistoryPanel() {
  const [txType, setTxType] = useState("Any")
  const [startDate, setStartDate] = useState("Any")
  const [endDate, setEndDate] = useState("Any")
  const [datePickerFor, setDatePickerFor] = useState(null)
  const [calendarMonth, setCalendarMonth] = useState({ year: 2026, month: 1 })
  const [selectedDate, setSelectedDate] = useState(null)
  const [showCopyToast, setShowCopyToast] = useState(false)
  const copyToastTimeoutRef = useRef(null)

  const monthName = new Date(
    calendarMonth.year,
    calendarMonth.month,
  ).toLocaleString("en", { month: "long", year: "numeric" })
  const firstDay = new Date(calendarMonth.year, calendarMonth.month, 1).getDay()
  const daysInMonth = new Date(
    calendarMonth.year,
    calendarMonth.month + 1,
    0,
  ).getDate()
  const leadingBlanks = Array(firstDay).fill(null)
  const days = [
    ...leadingBlanks,
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const showCalendar = datePickerFor !== null

  const handleDateSelect = (day) => {
    if (day === null) return
    const d = new Date(calendarMonth.year, calendarMonth.month, day)
    const formatted = `${String(day).padStart(2, "0")}/${String(calendarMonth.month + 1).padStart(2, "0")}/${String(calendarMonth.year).slice(-2)}`
    if (datePickerFor === "start") {
      setStartDate(formatted)
    } else {
      setEndDate(formatted)
    }
    setSelectedDate({
      year: calendarMonth.year,
      month: calendarMonth.month,
      day,
    })
    setDatePickerFor(null)
  }

  const handleStartDateChange = (e) => {
    const v = e.target.value
    setStartDate(v)
    setDatePickerFor(v === SELECT_DATE ? "start" : null)
  }
  const handleEndDateChange = (e) => {
    const v = e.target.value
    setEndDate(v)
    setDatePickerFor(v === SELECT_DATE ? "end" : null)
  }

  return (
    <div className="wallet-panel wallet-panel--wide">
      <div className="wallet-history__filters">
        <div className="wallet-history__filter">
          <div className="wallet-panel__heading">TRANSACTION TYPE</div>
          <select
            className="wallet-panel__select"
            value={txType}
            onChange={(e) => setTxType(e.target.value)}
          >
            {TRANSACTION_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="wallet-history__filter-row">
          <div className="wallet-history__filter">
            <div className="wallet-panel__heading">START DATE</div>
            <select
              className="wallet-panel__select"
              value={startDate}
              onChange={handleStartDateChange}
            >
              <option value="Any">Any</option>
              <option value={SELECT_DATE}>Select date...</option>
              {startDate !== "Any" && startDate !== SELECT_DATE ? (
                <option value={startDate}>{startDate}</option>
              ) : null}
            </select>
          </div>
          <div className="wallet-history__filter">
            <label className="wallet-panel__heading">END DATE</label>
            <select
              className="wallet-panel__select"
              value={endDate}
              onChange={handleEndDateChange}
            >
              <option value="Any">Any</option>
              <option value={SELECT_DATE}>Select date...</option>
              {endDate !== "Any" && endDate !== SELECT_DATE ? (
                <option value={endDate}>{endDate}</option>
              ) : null}
            </select>
          </div>
        </div>
      </div>
      {showCalendar && (
        <div className="wallet-history__calendar">
          <div className="wallet-history__calendar-header">
            <button
              type="button"
              className="wallet-history__calendar-nav"
              onClick={() =>
                setCalendarMonth((m) => ({ ...m, month: m.month - 1 }))
              }
            >
              ←
            </button>
            <span className="wallet-history__calendar-title">{monthName}</span>
            <button
              type="button"
              className="wallet-history__calendar-nav"
              onClick={() =>
                setCalendarMonth((m) => ({ ...m, month: m.month + 1 }))
              }
            >
              →
            </button>
          </div>
          <div className="wallet-history__calendar-dow">
            {DAYS.map((d) => (
              <span key={d} className="wallet-history__calendar-dow-cell">
                {d}
              </span>
            ))}
          </div>
          <div className="wallet-history__calendar-grid">
            {days.map((d, i) => {
              const isSelected =
                selectedDate &&
                d === selectedDate.day &&
                calendarMonth.month === selectedDate.month &&
                calendarMonth.year === selectedDate.year
              return (
                <button
                  key={i}
                  type="button"
                  className={`wallet-history__calendar-day ${isSelected ? "wallet-history__calendar-day--selected" : ""} ${d === null ? "wallet-history__calendar-day--blank" : ""}`}
                  disabled={d === null}
                  onClick={() => handleDateSelect(d)}
                >
                  {d ?? ""}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {showCopyToast && (
        <div className="wallet-history__toast" role="status">
          Copied to clipboard
        </div>
      )}

      <div className="wallet-history__list-wrap">
        <div className="wallet-history__list">
          {SAMPLE_TRANSACTIONS.map((tx, i) => {
            const copyTransaction = () => {
              const text = `${tx.type} ${tx.date} ${tx.sol} SOL $${tx.usd}`
              navigator.clipboard?.writeText(text)
              if (copyToastTimeoutRef.current)
                clearTimeout(copyToastTimeoutRef.current)
              setShowCopyToast(true)
              copyToastTimeoutRef.current = setTimeout(
                () => setShowCopyToast(false),
                2000,
              )
            }
            return (
              <button
                key={i}
                type="button"
                className="wallet-history__row"
                onClick={copyTransaction}
              >
                <span className="wallet-history__row-type">{tx.type}</span>
                <span className="wallet-history__row-date">{tx.date}</span>
                <span className="wallet-history__row-sol">{tx.sol} SOL</span>
                <span className="wallet-history__row-usd">${tx.usd}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function parseCurrency(str) {
  const cleaned = String(str).replace(/[$,]/g, "").trim()
  return parseFloat(cleaned) || 0
}

function TipsPanel() {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState(null)
  const [sortDir, setSortDir] = useState("asc")
  const [selectedUser, setSelectedUser] = useState(null)
  const summary = TIPS_SUMMARY

  const filtered = TIPS_BY_PERSON.filter(
    (p) =>
      !search.trim() ||
      p.username.toLowerCase().includes(search.trim().toLowerCase()),
  )

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortBy(key)
      setSortDir("asc")
    }
  }

  const list = [...filtered].sort((a, b) => {
    if (!sortBy) return 0
    let cmp = 0
    if (sortBy === "name") {
      cmp = a.username.localeCompare(b.username, undefined, { sensitivity: "base" })
    } else if (sortBy === "tipsGiven") {
      cmp = parseCurrency(a.tipsGiven) - parseCurrency(b.tipsGiven)
    } else if (sortBy === "tipsReceived") {
      cmp = parseCurrency(a.tipsReceived) - parseCurrency(b.tipsReceived)
    } else if (sortBy === "net") {
      cmp = parseCurrency(a.net) - parseCurrency(b.net)
    }
    return sortDir === "asc" ? cmp : -cmp
  })

  return (
    <div className="wallet-panel wallet-panel--wide wallet-panel--tips">
      <h2 className="wallet-panel__heading wallet-panel__heading--title">
        TIPS
      </h2>

      <div className="wallet-tips__summary">
        <div className="wallet-tips__tile">
          <span className="wallet-tips__tile-label">Total tips given</span>
          <span className="wallet-tips__tile-value wallet-tips__tile-value--currency">
            {summary.totalTipsGiven}
          </span>
          <span className="wallet-tips__tile-sol">{summary.totalTipsGivenSol} SOL</span>
        </div>
        <div className="wallet-tips__tile">
          <span className="wallet-tips__tile-label">Total tips received</span>
          <span className="wallet-tips__tile-value wallet-tips__tile-value--currency">
            {summary.totalTipsReceived}
          </span>
          <span className="wallet-tips__tile-sol">{summary.totalTipsReceivedSol} SOL</span>
        </div>
        <div className="wallet-tips__tile">
          <span className="wallet-tips__tile-label">Total tip net value</span>
          <span className="wallet-tips__tile-value wallet-tips__tile-value--currency">
            {summary.totalTipNet}
          </span>
          <span className="wallet-tips__tile-sol">{summary.totalTipNetSol} SOL</span>
        </div>
        <div className="wallet-tips__tile">
          <span className="wallet-tips__tile-label">Tips given</span>
          <span className="wallet-tips__tile-value">
            {summary.tipsGivenCount}
          </span>
        </div>
        <div className="wallet-tips__tile">
          <span className="wallet-tips__tile-label">Rains dropped</span>
          <span className="wallet-tips__tile-value">
            {summary.rainsDropped}
          </span>
        </div>
        <div className="wallet-tips__tile">
          <span className="wallet-tips__tile-label">Rains received</span>
          <span className="wallet-tips__tile-value">
            {summary.rainsReceived}
          </span>
        </div>
      </div>

      <div className="wallet-tips__find">
        <div className="wallet-panel__heading">FIND USER</div>
        <div className="wallet-tips__search-wrap">
          <input
            type="text"
            placeholder="Type username"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="wallet-panel__input wallet-tips__search"
          />
          <span className="wallet-tips__search-icon" aria-hidden>
            <SearchIcon />
          </span>
        </div>
      </div>

      <div className="wallet-tips__list-section">
        <div className="wallet-panel__heading">TIPS BY USER</div>
        <div className="wallet-tips__list-wrap">
          <div className="wallet-tips__list-header">
            <span className="wallet-tips__list-header-cell" />
            <button
              type="button"
              className={`wallet-tips__list-header-cell wallet-tips__list-header-cell--name wallet-tips__list-header-cell--sortable ${sortBy === "name" ? "wallet-tips__list-header-cell--sorted" : ""}`}
              onClick={() => handleSort("name")}
            >
              Name {sortBy === "name" && (sortDir === "asc" ? "↑" : "↓")}
            </button>
            <button
              type="button"
              className={`wallet-tips__list-header-cell wallet-tips__list-header-cell--sortable ${sortBy === "tipsGiven" ? "wallet-tips__list-header-cell--sorted" : ""}`}
              onClick={() => handleSort("tipsGiven")}
            >
              Tips given {sortBy === "tipsGiven" && (sortDir === "asc" ? "↑" : "↓")}
            </button>
            <button
              type="button"
              className={`wallet-tips__list-header-cell wallet-tips__list-header-cell--sortable ${sortBy === "tipsReceived" ? "wallet-tips__list-header-cell--sorted" : ""}`}
              onClick={() => handleSort("tipsReceived")}
            >
              Tips received {sortBy === "tipsReceived" && (sortDir === "asc" ? "↑" : "↓")}
            </button>
            <button
              type="button"
              className={`wallet-tips__list-header-cell wallet-tips__list-header-cell--sortable ${sortBy === "net" ? "wallet-tips__list-header-cell--sorted" : ""}`}
              onClick={() => handleSort("net")}
            >
              Net {sortBy === "net" && (sortDir === "asc" ? "↑" : "↓")}
            </button>
            <span className="wallet-tips__list-header-cell" />
          </div>
          <div className="wallet-tips__list">
            {list.map((person) => (
              <button
                key={person.username}
                type="button"
                className="wallet-tips__row"
                onClick={() => setSelectedUser(person)}
              >
                <span className="wallet-tips__row-rank">
                  <RankIcon rankKey={person.rank} />
                </span>
                <span className="wallet-tips__row-name">{person.username}</span>
                <div className="wallet-tips__row-amounts">
                  <span className="wallet-tips__row-given">
                    {person.tipsGiven}
                  </span>
                  <span className="wallet-tips__row-received">
                    {person.tipsReceived}
                  </span>
                  <span
                    className={`wallet-tips__row-net ${person.net.startsWith("-") ? "wallet-tips__row-net--negative" : "wallet-tips__row-net--positive"}`}
                  >
                    {person.net}
                  </span>
                </div>
                <span className="wallet-tips__row-arrow">
                  <ArrowIcon />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedUser && (
        <UserTipModal
          user={selectedUser}
          transactions={getTransactionsForUser(selectedUser.username)}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  )
}

function UserTipModal({ user, transactions, onClose }) {
  const [copyToast, setCopyToast] = useState(false)

  const copyTransaction = (tx) => {
    const text = `${tx.date} | ${tx.sender} sent ${tx.amount} to ${tx.receiver}`
    navigator.clipboard?.writeText(text).then(() => {
      setCopyToast(true)
      setTimeout(() => setCopyToast(false), 2000)
    })
  }

  return (
    <div className="wallet-tips-modal" role="dialog" aria-modal="true" aria-labelledby="wallet-tips-modal-title">
      <div className="wallet-tips-modal__backdrop" onClick={onClose} aria-hidden />
      <div className="wallet-tips-modal__panel">
        <div className="wallet-tips-modal__header">
          <h2 id="wallet-tips-modal-title" className="wallet-tips-modal__title">
            Tips with {user.username}
          </h2>
          <button
            type="button"
            className="wallet-tips-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4L4 12M4 4l8 8" />
            </svg>
          </button>
        </div>

        <div className="wallet-tips-modal__summary">
          <div className="wallet-tips-modal__tile">
            <span className="wallet-tips-modal__tile-label">Total given</span>
            <span className="wallet-tips-modal__tile-value wallet-tips-modal__tile-value--currency">{user.tipsGiven}</span>
          </div>
          <div className="wallet-tips-modal__tile">
            <span className="wallet-tips-modal__tile-label">Total received</span>
            <span className="wallet-tips-modal__tile-value wallet-tips-modal__tile-value--currency">{user.tipsReceived}</span>
          </div>
          <div className="wallet-tips-modal__tile">
            <span className="wallet-tips-modal__tile-label"># of transactions</span>
            <span className="wallet-tips-modal__tile-value">{transactions.length}</span>
          </div>
        </div>

        <div className="wallet-panel__heading wallet-tips-modal__list-heading">All tips</div>
        <div className="wallet-tips-modal__list-wrap">
          <div className="wallet-tips-modal__list-header">
            <span className="wallet-tips-modal__list-header-cell">Date</span>
            <span className="wallet-tips-modal__list-header-cell">Amount</span>
            <span className="wallet-tips-modal__list-header-cell">Sender</span>
            <span className="wallet-tips-modal__list-header-cell">Receiver</span>
          </div>
          <div className="wallet-tips-modal__list">
            {transactions.length === 0 ? (
              <p className="wallet-tips-modal__empty">No tip history with this user.</p>
            ) : (
              transactions.map((tx, i) => (
                <button
                  key={i}
                  type="button"
                  className="wallet-tips-modal__row"
                  onClick={() => copyTransaction(tx)}
                >
                  <span className="wallet-tips-modal__row-cell">{tx.date}</span>
                  <span className="wallet-tips-modal__row-cell wallet-tips-modal__row-cell--amount">{tx.amount}</span>
                  <span className="wallet-tips-modal__row-cell">{tx.sender}</span>
                  <span className="wallet-tips-modal__row-cell">{tx.receiver}</span>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
      {copyToast && (
        <div className="wallet-tips-modal__toast" role="status">
          Copied to clipboard
        </div>
      )}
    </div>
  )
}

function RankIcon({ rankKey }) {
  const [imgError, setImgError] = useState(false)
  const src = RANK_ICON_BY_KEY[rankKey]
  if (!src || imgError) {
    return (
      <span
        className="wallet-tips__rank-placeholder"
        title="Rank"
        aria-hidden
      />
    )
  }
  return (
    <img
      src={src}
      alt=""
      className="wallet-tips__rank-img"
      width={28}
      height={28}
      onError={() => setImgError(true)}
    />
  )
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="7" cy="7" r="4" />
      <path d="M10 10l3 3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 3l4 4-4 4" />
    </svg>
  )
}

export function WalletPage() {
  const [section, setSection] = useState("deposit")
  const balanceSol = "0.00235853"
  const balanceUsd = "$0.20"
  const vaultSol = "0.00000000"
  const vaultUsd = "$0.00"

  const renderPanel = () => {
    switch (section) {
      case "deposit":
        return <DepositPanel balanceSol={balanceSol} balanceUsd={balanceUsd} />
      case "withdraw":
        return <WithdrawPanel balanceSol={balanceSol} balanceUsd={balanceUsd} />
      case "vault":
        return (
          <VaultPanel
            balanceSol={balanceSol}
            balanceUsd={balanceUsd}
            vaultSol={vaultSol}
            vaultUsd={vaultUsd}
          />
        )
      case "history":
        return <HistoryPanel />
      case "tips":
        return <TipsPanel />
      default:
        return <DepositPanel balanceSol={balanceSol} balanceUsd={balanceUsd} />
    }
  }

  return (
    <div className="nuts-page">
      <Header balanceUsd={balanceUsd} balanceSol={balanceSol} showDeposit />
      <main className="nuts-page__main nuts-page__main--wallet">
        <div className="wallet-layout">
          <aside className="wallet-layout__nav" aria-label="Wallet sections">
            <WalletNav active={section} onSelect={setSection} />
          </aside>
          <div className="wallet-layout__nav-top" aria-label="Wallet sections">
            <WalletNav active={section} onSelect={setSection} />
          </div>
          <div className="wallet-layout__content">{renderPanel()}</div>
        </div>
      </main>
    </div>
  )
}
