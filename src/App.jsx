import { HomePage } from './pages/HomePage'
import { WalletPage } from './pages/WalletPage'

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  if (path.includes('/wallet')) return <WalletPage />
  return <HomePage />
}

export default App
