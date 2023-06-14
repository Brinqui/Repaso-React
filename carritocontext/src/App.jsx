import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CarritoContextProvider } from "./contexts/CarritoContext";
import Navbar from "./componets/Navbar";
import ListaItems from "./componets/ListaItems";
import CarritoCompra from "./componets/CarritoCompra";
function App() {
  return (
    <>
      <CarritoContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ListaItems />} />
            <Route path="/carrito" element={<CarritoCompra />} />
          </Routes>
        </BrowserRouter>
      </CarritoContextProvider>
    </>
  );
}

export default App;
