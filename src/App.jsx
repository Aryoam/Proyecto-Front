import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./components/Login";
import AutenticacionContext from "../context/autenticacionContext";
import PrivateLayout from "./layouts/PrivateLayout";
import Home from "./components/Home";
import "../styles/app.css";

function App() {
  const [autenticado, setAutenticado] = useState({});
  const [loading, setLoading] = useState(true);
  const [saveToken, setSaveToken] = useState(false);
  console.log(autenticado);

  useEffect(() => {
    const autenticarEnfermero = async () => {
      const tokenAlmacenado = localStorage.getItem("token");

      if (!tokenAlmacenado) {
        setLoading(false);
        console.log("SIN TOKEN");
        return;
      }

      try {
        const consultarApi = async () => {
          const url = "http://localhost:4000/api/administradores/home";
          const requestOptions = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenAlmacenado}`,
            },
          };

          const respuesta = await fetch(url, requestOptions);
          const resultado = await respuesta.json();

          setAutenticado(resultado);
          setLoading(false);
          setSaveToken(true);
        };
        consultarApi();
      } catch (error) {}
    };

    autenticarEnfermero();
  }, []);

  return (
    <BrowserRouter>
      <AutenticacionContext.Provider
        value={{
          autenticado,
          setAutenticado,
          loading,
          setLoading,
          saveToken,
          setSaveToken,
        }}
      >
        <Routes>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="/" element={<PrivateLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AutenticacionContext.Provider>
    </BrowserRouter>
  );
}

export default App;
