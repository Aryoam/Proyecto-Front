import { useState, useEffect, createContext } from "react";

const PacienteContext = createContext();

const PacienteProvider = ({ children }) => {
  const [paciente, setPaciente] = useState({});
  const [nuevoPaciente, setNuevoPaciente] = useState(false);

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
          console.log(resultado);
        };

        consultarApi();
      } catch (error) {
        paciente({});
      }
    };

    pacientesAPI();
  }, [nuevoPaciente]);

  const handleNuevoPaciente = () => {
    setNuevoPaciente(!nuevoPaciente);
  };

  return (
    <PacienteContext.Provider value={{ paciente, handleNuevoPaciente }}>
      {children}
    </PacienteContext.Provider>
  );
};

export { PacienteProvider };

export default PacienteContext;
