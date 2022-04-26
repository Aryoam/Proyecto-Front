import { useContext } from "react";
import EnfermeroContext from "../context/enfermeroContext";

const useEnfermero = () => {
  return useContext(EnfermeroContext);
};

export default useEnfermero;
