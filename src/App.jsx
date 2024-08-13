import { Route,Routes } from "react-router-dom"
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home , Aarohan ,  Events , Tedx , Teams , Alumni } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aarohan" element={<Aarohan />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Tedx" element={<Tedx />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </div>
  );
}


export default App;