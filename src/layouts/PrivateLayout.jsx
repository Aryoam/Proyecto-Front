import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AutenticacionContext from "../../context/autenticacionContext";
import Logo from "../img/file.png";
import SlideOver from "../components/SlideOver";
import { BiLogOut } from "react-icons/bi";

const PrivateLayout = () => {
  const { autenticado, loading } = useContext(AutenticacionContext);

  const navigate = useNavigate();

  const redireccion = () => {
    return <Navigate to="/login" />;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/login");
  };

  if (loading) return;

  return (
    <>
      {autenticado._id ? (
        <>
          <header className="shadow-md p-2 flex justify-between w-full items-center color-secundario md:hidden bg-white mb-2">
            <img src={Logo} alt="Logo" className="w-10" />
            <SlideOver placement={"end"} name={"end"} />
          </header>
          <div className="md:grid gap-x-2.5 grid-cols-[130px_minmax(900px,_1fr)]  h-screen">
            <div className="md:flex md:flex-col md:justify-between hidden bg-white rounded-r-3xl drop-shadow-[-5px_0px_20px_rgba(178,228,255,1)] p-3 ">
              <img className="w-16 mx-auto" src={Logo} alt="Logo" />
              <BiLogOut
                className="text-4xl mx-auto hover:cursor-pointer"
                onClick={handleLogout}
              />
            </div>
            <Outlet />
          </div>
        </>
      ) : (
        redireccion()
      )}
    </>
  );
};

export default PrivateLayout;
