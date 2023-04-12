// Imports
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/tasks/Tasks";

const initialStateTareas = [];

function App() {

  const [tarea, setTarea] = useState(initialStateTareas);

  return (
    <>
      <Nav />
      <div className="App">
        <NewTask setTarea={setTarea} tarea={tarea}/>
        <Tasks tarea={tarea}/>
      </div>
      <Footer tarea={tarea}/>
    </>
  );
}

export default App;
