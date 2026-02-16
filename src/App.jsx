import { HomePage } from './pages/HomePage'
import { WalletPage } from './pages/WalletPage'
import { SnakesPage } from './pages/SnakesPage'

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  if (path.includes('/wallet')) return <WalletPage />
  if (path.includes('/snakes')) return <SnakesPage />
  return <HomePage />
}

export default App
