import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { Router } from './router'
import { CalcContextProvider } from './context/calcContext'

export function App() {
  return (
    <CalcContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CalcContextProvider>
  )
}
