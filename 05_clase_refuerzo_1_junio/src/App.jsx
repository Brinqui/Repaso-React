import { createContext, useState } from "react";
import "./App.css";
import Hijo from "./components/Hijo";
import Hijo2 from "./components/Hijo2";
export const usuarioContext = createContext();
function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (e) => {
    if (user) {
      setUser(null);
      e.target.innerHTML = "Log In";
    } else {
      setUser({ nombre: "Álvaro", correo: "arincon2709@gmail.com" });
      e.target.innerHTML = "Log Out";
    }
  };
  return (
    <>
      <usuarioContext.Provider value={{user,setUser}}>
        <div>Estoy en App</div>
        <button onClick={(e) => handleLogin(e)}>Cambiar Login</button>
        <Hijo />
        <Hijo2/>
      </usuarioContext.Provider>
    </>
  );
}

export default App;
