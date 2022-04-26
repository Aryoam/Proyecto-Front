import { useContext } from "react";
import AutenticacionContext from "../context/autenticacionContext";

const useAutenticado = () => {
  return useContext(AutenticacionContext);
};

export default useAutenticado;
