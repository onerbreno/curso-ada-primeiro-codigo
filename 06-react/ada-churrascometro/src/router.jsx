import { Routes, Route } from 'react-router-dom'
import { Layout } from './layouts'
import { Home } from './pages/Home'
import { Results } from './pages/Results'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Route>
    </Routes>
  )
}