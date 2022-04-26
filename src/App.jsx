import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./components/Login";
import { AutenticadoProvider } from "./context/autenticacionContext";
import { EnfermeroProvider } from "./context/enfermeroContext";
import useAutenticado from "./hooks/useAutenticado";
import PrivateLayout from "./layouts/PrivateLayout";
import Administrador from "./components/Administrador";
import Enfermero from "./components/Enfermero";
import Pacientes from "./components/Pacientes";
import { PacienteProvider } from "./context/pacienteContext";

function App() {
  return (
    <BrowserRouter>
      <AutenticadoProvider>
        <PacienteProvider>
          <EnfermeroProvider>
            <Routes>
              <Route path="/login" element={<LoginLayout />}>
                <Route index element={<Login />} />
              </Route>

              <Route path="/" element={<PrivateLayout />}>
                <Route index element={<Administrador />} />
                <Route path="/enfermero" element={<Enfermero />} />
                <Route path="/pacientes" element={<Pacientes />} />
              </Route>
            </Routes>
          </EnfermeroProvider>
        </PacienteProvider>
      </AutenticadoProvider>
    </BrowserRouter>
  );
}

export default App;
