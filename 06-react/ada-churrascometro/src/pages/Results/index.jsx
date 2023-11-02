import { useContext } from "react"
import { CalcContext } from "../../context/calcContext"

export function Results() {

  const { items } = useContext(CalcContext)
  return (
    <h3>{items[0]}</h3>
  )
}