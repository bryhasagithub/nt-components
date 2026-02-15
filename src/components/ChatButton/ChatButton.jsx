import React from 'react'
import './ChatButton.css'

export function ChatButton({ onClick, ...props }) {
  return (
    <button
      type="button"
      className="nuts-chat-button"
      aria-label="Open chat"
      onClick={onClick}
      {...props}
    >
      <svg width="22" height="22" viewBox="0 0 118 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 20C0 8.954 8.954 0 20 0h78c11.046 0 20 8.954 20 20v47c0 11.046-8.954 20-20 20H20C8.954 87 0 78.046 0 67z"
          fill="currentColor"
        />
        <path
          d="M69.703 76.57c-2.794-1.994-2.794-6.146 0-8.14l40.392-28.827c3.31-2.362 7.905.004 7.905 4.07v57.654c0 4.066-4.595 6.432-7.905 4.07z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
