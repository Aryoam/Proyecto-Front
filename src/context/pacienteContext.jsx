import { useState, useEffect, createContext } from "react";

const PacienteContext = createContext();

const PacienteProvider = ({ children }) => {
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const pacientesAPI = async () => {
      const tokenAlmacenado = localStorage.getItem("token");

      try {
        const consultarApi = async () => {
          const url = "http://localhost:4000/api/paciente";
          const requestOptions = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenAlmacenado}`,
            },
          };

          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setPaciente(resultado);
        };

        consultarApi();
      } catch (error) {
        paciente({});
      }
    };

    pacientesAPI();
  }, []);

  return (
    <PacienteContext.Provider value={{ paciente }}>
      {children}
    </PacienteContext.Provider>
  );
};

export { PacienteProvider };

export default PacienteContext;
