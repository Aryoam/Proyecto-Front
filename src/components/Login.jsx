import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import useAutenticado from "../hooks/useAutenticado";
import Logo from "../img/logonursegear.svg";
import Error from "./Error";

const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { setAutenticado, autenticado, loading, setLoading } = useAutenticado();

  const redireccion = () => {
    navigateTo("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      return;
    }

    try {
      const consultarApi = async () => {
        const url = "http://localhost:4000/api/administrador/login";
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        };

        const respuesta = await fetch(url, requestOptions);
        const resultado = await respuesta.json();
        if (respuesta.status >= 400) {
          return setError(resultado.msg);
        }
        localStorage.setItem("token", resultado.token);
        setAutenticado(resultado);
        redireccion();
      };

      consultarApi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto w-28" src={Logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Bienvenido
            </h2>
          </div>
          {error ? <Error msg={error} /> : null}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Usuario
                </label>
                <input
                  value={email}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-purple-white shadow rounded border-0 p-3 w-full mb-3"
                  placeholder="Usuario"
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={() => setError(false)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-purple-white shadow rounded border-0 p-3 w-full"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  onClick={() => setError(false)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white botones"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Iniciar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
