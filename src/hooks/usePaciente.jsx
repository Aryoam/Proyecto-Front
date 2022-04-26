import { useContext } from "react";
import PacienteContext from "../context/pacienteContext";

const usePaciente = () => {
  return useContext(PacienteContext);
};

export default usePaciente;
