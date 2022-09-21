import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarAdmin } from "./components/NavbarAdmin";
import { Navigate, Route, Routes } from "react-router-dom";
import { AlumnosTable } from "./components/AlumnosTable";
import { CursosTable } from "./components/CursosTable";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Inicio } from "./components/Inicio";

function App() {
  const { authState } = useContext(AuthContext);
  return (
    <AppState>
      <div className="App">
        <header>
          <NavbarAdmin />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route
              path="/Cursos"
              element={
                authState ? <CursosTable /> : <Navigate replace to={"/"} />
              }
            />
            <Route path="/Alumnos" element={<AlumnosTable />} />
          </Routes>
        </main>
      </div>
    </AppState>
  );
}
const AppState = ({ children }: { children: JSX.Element }) => {
  //su tipo seria  {children: JSX.Element[]}si hubieran mas de un hijo
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
