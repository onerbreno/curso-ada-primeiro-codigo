
import './App.css';
import Header from './componentes/Header';
import HeroImage from './componentes/HeroImage';
import TodoList from './componentes/TodoList';

function App() {
  return (
      <div className="todo-app">
          <Header/>
          <HeroImage/>
          <TodoList/>
      </div>
  );
}

export default App;
