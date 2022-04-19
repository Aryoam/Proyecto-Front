import { Outlet } from "react-router-dom";
import AutenticacionContext from "../../context/autenticacionContext";
import { motion } from "framer-motion";

const LoginLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="bg-gradient-to-r from-cyan-100 to-blue-300 h-screen">
        <Outlet />
      </main>
    </motion.div>
  );
};

export default LoginLayout;
