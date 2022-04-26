import { Outlet } from "react-router-dom";
import AutenticacionContext from "../context/autenticacionContext";

const LoginLayout = () => {
  return (
    <main className="bg-gradient-to-r from-cyan-100 to-blue-300 h-screen">
      <Outlet />
    </main>
  );
};

export default LoginLayout;
