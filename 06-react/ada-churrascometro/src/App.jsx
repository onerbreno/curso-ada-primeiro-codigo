import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { Router } from './router'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
