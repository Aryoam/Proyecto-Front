import { useState, useEffect, createContext } from "react";

const EnfermeroContext = createContext();

const EnfermeroProvider = ({ children }) => {
  const [enfermero, setEnfermero] = useState({});

  console.log(enfermero);

  useEffect(() => {
    const autenticarEnfermero = async () => {
      const tokenAlmacenado = localStorage.getItem("token");

      try {
        const consultarApi = async () => {
          const url = "http://localhost:4000/api/enfermero/lista";
          const requestOptions = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenAlmacenado}`,
            },
          };

          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setEnfermero(resultado);
        };

        consultarApi();
      } catch (error) {
        setEnfermero({});
      }
    };

    autenticarEnfermero();
  }, []);

  return (
    <EnfermeroContext.Provider value={{ enfermero, setEnfermero }}>
      {children}
    </EnfermeroContext.Provider>
  );
};

export { EnfermeroProvider };

export default EnfermeroContext;
