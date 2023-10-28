import { useEffect, useState } from 'react';
import './App.css'
import { QuantifyPeopleCard } from './components/QuantifyPeopleCard'

function App() {
  const userTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [people, setPeople] = useState({men: 0, women: 0, kid: 0})

  const [isDarkTheme, setIsDarkTheme] = useState(userTheme ?? true);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('light-theme', !isDarkTheme);
    
    // if (!isDarkTheme) {
    //   body.classList.add('light-theme');
    // } else {
    //   body.classList.remove('light-theme');
    // }
  }, [isDarkTheme]);

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleCalculate = () => {
    console.log(people)
  }

  const handleChangePeople = (quantify, category) => {

    console.log(quantify)
    setPeople((state) => {
      return {...state, [category]: quantify}
    })
  }

  // function handleSwitchTheme() {
  //   document.body.classList.toggle('light-theme')

  //   const allElements = document.querySelectorAll("*")
  //   allElements.forEach((element) => {
  //     element.classList.toggle('light-theme')
  //   })
  // }

  return (
    <main>
      <div className="container">
        <h1>Churrascômetro</h1>
        <div className="calculator">

          <h3>
            Precisa de uma ajudinha com o churrasco? :)
            <br />
            <br />
            <span>Quantas pessoas vão participar?</span>
          </h3>

          <h3>Teste</h3>
          <div className="row-first">
            <QuantifyPeopleCard onChangePeople={handleChangePeople} category="women" title="Mulheres"/>
            <QuantifyPeopleCard onChangePeople={handleChangePeople} category="men" title="Homens"/>
            <QuantifyPeopleCard onChangePeople={handleChangePeople} category="kid" title="Crianças"/>
          </div>

          <div className="row">
            <div>
              <p id="invalid-input" style={{ visibility: "hidden" }}>Por favor, insira somente números!</p>
              <p id="no-input" style={{ visibility: "hidden" }}>Por favor, selecione a quantidade de pessoas!</p>

              <a className="default-button" onClick={handleCalculate}>Calcular</a>
            </div>
          </div>
        </div>
        <div className="theme-container"><label id="label-theme-text" htmlFor="input-theme">Tema Escuro</label>
          <label className="switch">
            <input type="checkbox" id="input-theme" defaultChecked={isDarkTheme} onChange={handleSwitchTheme}/>
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </main>
  )
}

export default App
