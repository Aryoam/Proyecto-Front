import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAutenticado from "../hooks/useAutenticado";
import Logo from "../img/logonursegear.png";
import { BiLogOut } from "react-icons/bi";
import { BsFillPeopleFill, BsFillCalendar2WeekFill } from "react-icons/bs";
import MenuMovil from "../components/MenuMovil";

const PrivateLayout = () => {
  const { autenticado, loading } = useAutenticado();

  const navigate = useNavigate();

  if (loading) return "Cargando";

  const handlePacientes = () => {
    return navigate("/enfermero");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/login");
  };

  return (
    <>
      {autenticado._id ? (
        <div className="bg-gradient-to-r from-Slate to-Slate-50">
          <header className="shadow-md text-3xl p-2 flex justify-between w-full items-center color-secundario md:hidden bg-white mb-2 ">
            <img
              src={Logo}
              alt="Logo"
              className="w-9"
              onClick={() => navigate("/")}
            />
            <MenuMovil className="sm:hidden" />
          </header>
          <div className="md:grid gap-x-2.5 grid-cols-[100px_minmax(900px,_1fr)] sm:h-screen">
            <div className="md:flex md:flex-col md:justify-between hidden bg-white rounded-r-3xl shadowPersonalizado p-3 ">
              <img
                className="w-14 mx-auto hover:cursor-pointer"
                src={Logo}
                alt="Logo"
                onClick={() => navigate("/")}
              />
              {/* <BsFillCalendar2WeekFill
                className="text-5xl mx-auto hover:cursor-pointer pb-1.5 text-sky-500"
                onClick={handlePacientes}
              /> */}
              <BiLogOut
                className="text-5xl mx-auto hover:cursor-pointer pb-1.5 text-sky-500"
                onClick={handleLogout}
              />
            </div>
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateLayout;
