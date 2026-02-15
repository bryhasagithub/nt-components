import React from 'react'
import './HomepageContent.css'

const DEFAULT_BLOCKS = [
  {
    title: 'Welcome to Nuts, the Ultimate Online Casino',
    body: 'NUTS.gg is the new online casino offering betting options for games and soon to be implemented, sportsbetting. We pride ourselves in transparency, fairness and simplicity.',
  },
  {
    title: "We're all about fairness, Which is Why Our Games Are Provably Fair.",
    body: 'For our number generation, we use a combination of a server-seed, client-seed and a nonce (a number which increases each time you play a game). You can easily change your client-seed, rotate your server seed and view your nonce in your account settings.',
  },
  {
    title: 'Experience Optimal Transactions',
    body: 'At NUTS.gg, we ensure instant withdrawals with no manual verification. Everything is fully automated, no matter the amount. We hate that anxious period while waiting for deposits, which is why we support Solana. This means blazingly fast deposits for everybody. (see how fast it is yourself!).',
  },
  {
    title: 'Exclusive Crypto Casino Games Await at NUTS.gg',
    body: 'NUTS.gg offers a variety of simple, fun and rewarding in-house games. Our games offer extremely low house edges, so you can get the most out of your wager.',
  },
  {
    title: 'No Crypto? No Worries!',
    body: "At NUTS.gg, we offer an unlimited faucet which can be claimed every 3 minutes. What's the catch you may be asking? Well, there isn't one. All you have to do is verify your email and you can be on your way!",
  },
]

export function HomepageContent({ blocks = DEFAULT_BLOCKS, twoColumns = true }) {
  const leftBlocks = twoColumns ? blocks.slice(0, 2) : []
  const rightBlocks = twoColumns ? blocks.slice(2, 5) : blocks

  if (twoColumns && blocks.length >= 5) {
    return (
      <section className="nuts-homepage-content nuts-homepage-content--two-cols">
        <div className="nuts-homepage-content__col">
          {leftBlocks.map((block) => (
            <article key={block.title} className="nuts-content-block">
              <h2 className="nuts-content-block__title">{block.title}</h2>
              <p className="nuts-content-block__body">{block.body}</p>
            </article>
          ))}
        </div>
        <div className="nuts-homepage-content__col">
          {rightBlocks.map((block) => (
            <article key={block.title} className="nuts-content-block">
              <h2 className="nuts-content-block__title">{block.title}</h2>
              <p className="nuts-content-block__body">{block.body}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="nuts-homepage-content">
      {blocks.map((block) => (
        <article key={block.title} className="nuts-content-block">
          <h2 className="nuts-content-block__title">{block.title}</h2>
          <p className="nuts-content-block__body">{block.body}</p>
        </article>
      ))}
    </section>
  )
}
