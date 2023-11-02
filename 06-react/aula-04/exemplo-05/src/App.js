
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListTaskPage from './pages/ListTaskPage';
import TaskDetailPage from './pages/TaskDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ListTaskPage/>}/>
            <Route path='/tasks/:taskId' element={<TaskDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
