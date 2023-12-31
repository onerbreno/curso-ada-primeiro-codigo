import { useEffect, useState } from "react";
import { QuantifyPeopleCard } from '../../components/QuantifyPeopleCard'
import { ResultsList } from '../../components/ResultsList'
import './styles.css'

import products from "../../../products.json";
import { Link } from "react-router-dom";


export function Home() {
  const userTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDarkTheme, setIsDarkTheme] = useState(userTheme ?? true);

  const [people, setPeople] = useState({ men: 0, women: 0, kid: 0 })
  const [results, setResults] = useState([])

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleChangePeople = (quantify, category) => {
    setPeople((state) => {
      return { ...state, [category]: quantify }
    })
  }

  const calculateQuantifyProducts = () => {
    const totalPeople = Object.values(people).reduce((acc, curr) => acc + curr, 0)

    const results = products.map(product => {
      // const quantify = product.requiredGroupSize
      //   ? Math.floor(totalPeople / product.requiredGroupSize)
      //   : (people.men * product.quantifyPerMen) + (people.women * product.quantifyPerWomen) + (people.kid * product.quantifyPerKid)

      // return {
      //   name: product.name,
      //   quantify: quantify.toFixed(2).replace('.', ','),
      // }
      if (product.requiredGroupSize) {
        const quantify = Math.floor(totalPeople / product.requiredGroupSize) * product.quantityPerGroup

        return {
          ...product,
          quantify
        }
      }

      const quantify = (people.men * product.quantifyPerMen) + (people.women * product.quantifyPerWomen) + (people.kid * product.quantifyPerKid)
      return {
        ...product,
        quantify: quantify.toFixed(2).replace('.', ','),
      }
    })

    return results
  }

  const handleCalculate = () => {
    setResults(calculateQuantifyProducts())
  }
  console.log("alo")

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

          <div className="row-first">
            <QuantifyPeopleCard
              onChangePeople={handleChangePeople}
              quantify={people.women}
              category="women"
              label="Mulheres"
            />
            <QuantifyPeopleCard
              onChangePeople={handleChangePeople}
              quantify={people.men}
              category="men"
              label="Homens"
            />
            <QuantifyPeopleCard
              onChangePeople={handleChangePeople}
              quantify={people.kid}
              category="kid"
              label="Crianças"
            />

            <Link to="/results">Calcular lista de compras</Link>

            <button
              className="default-button"
              onClick={handleCalculate}
              disabled={!people.kid && !people.women && !people.men}
            >
              Calcular lista de compras
            </button>
          </div>

          <div className="row">

            {results.length > 0 && (
              <ResultsList results={results} />
            )}

          </div>
        </div>
        <div className="theme-container"><label id="label-theme-text" htmlFor="input-theme">Tema Escuro</label>
          <label className="switch">
            <input type="checkbox" id="input-theme" defaultChecked={isDarkTheme} onChange={handleSwitchTheme} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </main>
  )
}