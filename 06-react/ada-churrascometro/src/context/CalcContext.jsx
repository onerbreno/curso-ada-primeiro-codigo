import { createContext } from "react";
import PropTypes from "prop-types";

export const CalcContext = createContext({})

export function CalcContextProvider({ children }) {

  const items = ["produto1", "produto2"]

  return (
    <CalcContext.Provider
      value={{items}}
    >
      { children }
    </CalcContext.Provider>
  )
}


CalcContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
