import { useState } from "react";
import { createContext } from "react";

export const carritoContext = createContext(null);
export const CarritoContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <carritoContext.Provider value={[cart, setCart]}>
      {children}
    </carritoContext.Provider>
  );
};
