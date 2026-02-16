import React, { useState, useEffect, useRef } from "react"
import { Logo } from "../Logo/Logo"
import { BalanceDisplay } from "../BalanceDisplay/BalanceDisplay"
import { Button } from "../Button/Button"
import { DEFAULT_RANK_ICON } from "../../lib/rankIcons"
import "./Header.css"

const menuItems = [
  { label: "WALLET", href: "wallet", icon: "wallet" },
  { label: "ACCOUNT", href: "account", icon: "account" },
  { label: "PERKS", href: "perks", icon: "perks" },
  {
    label: "AFFILIATE",
    href: "affiliate",
    icon: "affiliate",
    highlight: true,
    cta: "EARN",
  },
  { label: "PROVABLY FAIR", href: "provably-fair", icon: "provably" },
  { label: "GAME LOG", href: "game-log", icon: "gamelog" },
  { label: "SUPPORT", href: "support", icon: "support" },
]

function MenuIcon({ name }) {
  const size = 20
  const stroke = "currentColor"
  const strokeWidth = 1.5
  const common = {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    fill: "none",
    stroke,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }
  switch (name) {
    case "wallet":
      return (
        <svg {...common}>
          <rect x="1" y="4" width="18" height="12" rx="2" />
          <path d="M1 8h18" />
          <circle cx="14" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    case "account":
      return (
        <svg {...common}>
          <circle cx="10" cy="6" r="3" />
          <path d="M3 18c0-3.5 3.1-6 7-6s7 2.5 7 6" />
        </svg>
      )
    case "perks":
      return (
        <svg {...common}>
          <path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5L10 2z" />
        </svg>
      )
    case "affiliate":
      return (
        <svg {...common}>
          <circle cx="10" cy="5" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="15" cy="12" r="2" />
          <path d="M10 7v2M7 11l2-2M13 11l-2-2" />
        </svg>
      )
    case "provably":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="6" height="6" />
          <rect x="11" y="3" width="6" height="6" />
          <rect x="3" y="11" width="6" height="6" />
          <rect x="11" y="11" width="6" height="6" />
        </svg>
      )
    case "gamelog":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="6" />
          <path d="M14 14l4 4" />
        </svg>
      )
    case "support":
      return (
        <svg {...common}>
          <path d="M3 9v4a2 2 0 002 2h1v-8H5a2 2 0 00-2 2z" />
          <path d="M13 9v4a2 2 0 01-2 2h-1v-8h1a2 2 0 012 2z" />
          <path d="M10 6v6" />
          <path d="M7 8c0 .5.5 1 1.5 1h2c1 0 1.5-.5 1.5-1V7c0-.5-.5-1-1.5-1h-2C7.5 6 7 6.5 7 7v1z" />
        </svg>
      )
    default:
      return null
  }
}

export function Header({
  username = "breee",
  balanceUsd = "$6.03",
  balanceSol = "0.06998309",
  showDeposit = true,
  rankIconUrl = DEFAULT_RANK_ICON,
}) {
  const [rankIconError, setRankIconError] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const showRankImg = rankIconUrl && !rankIconError

  useEffect(() => {
    if (!menuOpen) return
    const handleEscape = (e) => e.key === "Escape" && setMenuOpen(false)
    const handleClickOutside = (e) => {
      const inDropdown = e.target.closest(".nuts-header__dropdown-panel")
      const onMenuBtn = e.target.closest(".nuts-header__menu-btn")
      if (!inDropdown && !onMenuBtn) setMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  return (
    <header className="nuts-header">
      <div className="nuts-header__inner">
        <Logo href="/nt-components/" />
        <div className="nuts-header__center">
          <BalanceDisplay usd={balanceUsd} sol={balanceSol} />
          {showDeposit && (
            <Button as="a" href="wallet/deposit" variant="primary">
              DEPOSIT
            </Button>
          )}
        </div>
        <div className="nuts-header__user">
          <a href="account/settings" className="nuts-header__username">
            {username}
          </a>
          <div className="nuts-header__league" title="Rank">
            {showRankImg ? (
              <img
                src={rankIconUrl}
                alt=""
                className="nuts-header__rank-icon"
                width={40}
                height={40}
                onError={() => setRankIconError(true)}
              />
            ) : (
              <span
                className="nuts-header__league-placeholder"
                title="League"
              />
            )}
          </div>
          <div className="nuts-header__progress-wrap" title="Level progress">
            <div className="nuts-header__progress-bar">
              <div
                className="nuts-header__progress-fill"
                style={{ height: "35%" }}
              />
            </div>
          </div>
          <button
            type="button"
            className="nuts-header__menu-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Dropdown panel */}
      <div
        className={`nuts-header__dropdown ${menuOpen ? "nuts-header__dropdown--open" : ""}`}
        role="dialog"
        aria-label="User menu"
      >
        <div
          className="nuts-header__dropdown-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
        <div className="nuts-header__dropdown-panel" ref={menuRef}>
          <div className="nuts-header__dropdown-header">
            <span className="nuts-header__dropdown-username">{username}</span>
            <div className="nuts-header__dropdown-rank">
              {showRankImg ? (
                <img
                  src={rankIconUrl}
                  alt=""
                  width={32}
                  height={32}
                  onError={() => setRankIconError(true)}
                />
              ) : (
                <span
                  className="nuts-header__league-placeholder"
                  style={{ width: 32, height: 32 }}
                />
              )}
            </div>
            <button
              type="button"
              className="nuts-header__dropdown-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 4L4 12M4 4l8 8" />
              </svg>
            </button>
          </div>
          <nav className="nuts-header__dropdown-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nuts-header__dropdown-item ${item.highlight ? "nuts-header__dropdown-item--highlight" : ""}`}
              >
                <span className="nuts-header__dropdown-icon">
                  <MenuIcon name={item.icon} />
                </span>
                <span className="nuts-header__dropdown-label">
                  {item.label}
                </span>
                {item.cta && (
                  <span className="nuts-header__dropdown-cta">{item.cta}</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
