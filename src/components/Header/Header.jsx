import React, { useState } from "react"
import { Logo } from "../Logo/Logo"
import { BalanceDisplay } from "../BalanceDisplay/BalanceDisplay"
import { Button } from "../Button/Button"
import { DEFAULT_RANK_ICON } from "../../lib/rankIcons"
import "./Header.css"

export function Header({
  username = "breee",
  balanceUsd = "$6.03",
  balanceSol = "0.06998309",
  showDeposit = true,
  rankIconUrl = DEFAULT_RANK_ICON,
}) {
  const [rankIconError, setRankIconError] = useState(false)
  const showRankImg = rankIconUrl && !rankIconError

  return (
    <header className="nuts-header">
      <div className="nuts-header__inner">
        <Logo href="/" />
        <div className="nuts-header__center">
          <BalanceDisplay usd={balanceUsd} sol={balanceSol} />
          {showDeposit && (
            <Button as="a" href="/wallet/deposit" variant="primary">
              Deposit
            </Button>
          )}
        </div>
        <div className="nuts-header__user">
          <a href="/account/settings" className="nuts-header__username">
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
          <button
            type="button"
            className="nuts-header__menu-btn"
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
