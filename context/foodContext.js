import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const FoodContext = ({ lang, children }) => {
  return <Provider value={{ lang }}>{children}</Provider>;
};

export default FoodContext;
