import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AutenticacionContext = createContext();

const AutenticadoProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalPacientesAdmin, setModalPacientesAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const autenticarAdministrador = async () => {
      const tokenAlmacenado = localStorage.getItem("token");

      if (!tokenAlmacenado) return setLoading(false);

      try {
        const consultarApi = async () => {
          const url = "http://localhost:4000/api/administrador/perfil";
          const requestOptions = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenAlmacenado}`,
            },
          };

          const respuesta = await fetch(url, requestOptions);
          const resultado = await respuesta.json();
          setAutenticado(resultado);
          navigate("/");
        };

        consultarApi();
      } catch (error) {
        setAutenticado({});
      }
      setLoading(false);
    };

    autenticarAdministrador();
  }, []);

  const handleModalPacientesAdmin = () => {
    setModalPacientesAdmin(!modalPacientesAdmin);
  };

  return (
    <AutenticacionContext.Provider
      value={{
        autenticado,
        setAutenticado,
        loading,
        handleModalPacientesAdmin,
        modalPacientesAdmin,
      }}
    >
      {children}
    </AutenticacionContext.Provider>
  );
};

export { AutenticadoProvider };

export default AutenticacionContext;
