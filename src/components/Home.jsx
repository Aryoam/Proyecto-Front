import { useContext } from "react";
import AutenticacionContext from "../../context/autenticacionContext";

const Home = () => {
  const { autenticado } = useContext(AutenticacionContext);
  return <div>Perfiles de Enfermeros</div>;
};

export default Home;
