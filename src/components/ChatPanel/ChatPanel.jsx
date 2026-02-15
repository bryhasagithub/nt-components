import React, { useState } from 'react'
import { Button } from '../Button/Button'
import './ChatPanel.css'

const DEFAULT_MESSAGES = [
  { user: 'Jakeyypoo233', message: "The one's that are getting tip", time: '12:01 PM', tip: null },
  { user: 'BOT', message: '@JohnLon007 Just Tipped @BialaMewa', time: '12:01 PM', tip: '$0.51' },
  { user: 'Ahmedwael22', message: '@JohnLon007 man this chat on fire 😂🔥', time: '12:01 PM', tip: null },
  { user: 'Maria880', message: '🐸', time: '12:01 PM', tip: null },
  { user: 'Kvitkadoli', message: '@JohnLon007 🌶️🌶️', time: '12:01 PM', tip: null },
]

export function ChatPanel({
  title = 'CHAT',
  giveawayLabel = 'GIVEAWAY: 28M 44S',
  messages = DEFAULT_MESSAGES,
  placeholder = 'type message',
  onSend,
}) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && onSend) onSend(input.trim())
    setInput('')
  }

  return (
    <aside className="nuts-chat-panel">
      <div className="nuts-chat-panel__header">
        <span className="nuts-chat-panel__title">{title}</span>
        {giveawayLabel && <span className="nuts-chat-panel__giveaway">{giveawayLabel}</span>}
      </div>
      <div className="nuts-chat-panel__messages">
        {messages.map((m, i) => (
          <div key={`${m.user}-${i}`} className="nuts-chat-panel__message">
            <div className="nuts-chat-panel__message-head">
              <span className="nuts-chat-panel__username">{m.user}</span>
              {m.tip && <span className="nuts-chat-panel__tip">{m.tip}</span>}
            </div>
            <p className="nuts-chat-panel__message-body">{m.message}</p>
            <span className="nuts-chat-panel__time">{m.time}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="nuts-chat-panel__form">
        <input
          type="text"
          className="nuts-chat-panel__input"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Chat message"
        />
        <button type="button" className="nuts-chat-panel__attach" aria-label="Attach image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </button>
        <Button type="submit" variant="primary" className="nuts-chat-panel__send">
          SEND
        </Button>
      </form>
    </aside>
  )
}
