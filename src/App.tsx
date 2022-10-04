import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarAdmin } from "./components/NavbarAdmin";
import { Route, Routes } from "react-router-dom";
import { CursosTable } from "./components/CursosTable";
import { useContext } from "react";
import { Inicio } from "./components/Inicio";
import { RegisterForm } from "./components/forms/RegisterForm";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { AlumnosPage } from "./components/AlumnosPage";

export const App = () => {
  const { authState } = useContext(AuthContext);
  console.log(authState);

  return (
    <div className="App">
      <header>
        <NavbarAdmin />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/Cursos"
            element={authState.isLogged ? <CursosTable /> : <Inicio />}
          />
          <Route
            path="/Alumnos"
            element={authState.isLogged ? <AlumnosPage /> : <Inicio />}
          />
          <Route
            path="/Login"
            element={authState.isLogged ? <Inicio /> : <RegisterForm />}
          />
          <Route
            path="/RegisterAccount"
            element={authState.isLogged ? <RegisterForm /> : <Inicio />}
          />
        </Routes>
      </main>
    </div>
  );
};
export const AppState = ({ children }: { children: JSX.Element }) => {
  //su tipo seria  {children: JSX.Element[]}si hubieran mas de un hijo
  return <AuthProvider>{children}</AuthProvider>;
};
