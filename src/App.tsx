import "./App.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarAdmin } from "./components/NavbarAdmin";
import { Route, Routes } from "react-router-dom";
import { AlumnosTable } from "./components/AlumnosTable";
function App() {
  return (
    <div className="App">
      <header>
        <NavbarAdmin />
      </header>
      <main>
        <Routes>
          <Route path="/Alumnos" element={<AlumnosTable />} />
          <Route path="/Cursos" element={<AlumnosTable />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
