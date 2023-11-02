import './App.css';
import CalculatorPage from './pages/CalculatorPage';
import GuestPage from './pages/GuestPage';
import ResultPage from './pages/ResultPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="tdoo-app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CalculatorPage/>}>
              <Route index element={<GuestPage />} />
              <Route path="resultado" element={<ResultPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
