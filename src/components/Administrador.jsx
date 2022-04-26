import { useState } from "react";
import useAutenticado from "../hooks/useAutenticado";
import usePaciente from "../hooks/usePaciente";
import { RadioGroup } from "@headlessui/react";
import Modal from "./Modal";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Administrador = () => {
  const { autenticado, handleModalPacientesAdmin } = useAutenticado();
  const { paciente } = usePaciente();
  const [selected, setSelected] = useState(paciente[0]);

  return (
    <div className="p-12 containerLayout sm:grid sm:grid-cols-[1fr_2fr] grid-admin xl:px-20">
      <div>
        <div className="relative mt-24 drop-shadow-[-5px_0px_10px_rgba(178,228,255,.4)] bg-white rounded-xl sm:w-96">
          <img
            src={autenticado.foto}
            alt="Foto del enfermero"
            className="rounded-xl absolute -top-24 left-0 right-0 m-auto w-64 shadow-md"
          />
          <div className="pt-44 p-5">
            <div className="flex items-center mb-3 justify-center">
              {/* <BiUser className="mr-2 text-2xl" /> */}
              <p className="m-0 text-xl">{autenticado.nombre}</p>
            </div>
            <div className="flex items-center mb-3">
              <AiFillPhone className="mr-2 text-2xl color-secundario" />
              <p className="m-0">{autenticado.telefono}</p>
            </div>
            <div className="flex items-center mb-3">
              <AiOutlineMail className="mr-2 text-2xl color-secundario" />
              <p className="m-0">{autenticado.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-pacientes">
        <h4>Pacientes</h4>

        <div className="w-full py-1 cont-pacientes-scroll overflow-scroll">
          <div className="w-full  mx-auto">
            <RadioGroup
              onClick={handleModalPacientesAdmin}
              value={selected}
              onChange={setSelected}
            >
              <div className="space-y-2">
                {paciente.map((paciente, key) => (
                  <RadioGroup.Option
                    key={key}
                    value={paciente}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                          : ""
                      }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                  checked ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {paciente.nombre}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? "text-sky-100" : "text-gray-500"
                                }`}
                              >
                                <span>{paciente.telefono}</span>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div className="flex-shrink-0 text-white"></div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <Modal data={selected} />
      <div className="sm:text-4xl text-center">
        <h1>Bienvenido {autenticado.nombre}</h1>
      </div>
    </div>
  );
};

export default Administrador;

// try {
//   const fetchData = async () => {
//     const respuestaCategorias = await fetch(`${API_URL}categorias`);
//     const resultadoCategorias = await respuestaCategorias.json();
//     await setCategorias(resultadoCategorias.data);

//     const respuestaNecesidades = await fetch(`${API_URL}necesidades`);
//     const resultadoNecesidades = await respuestaNecesidades.json();
//     await setNecesidades(resultadoNecesidades.data);

//     const respuestaArticulos = await fetch(`${API_URL}articulos`);
//     const resultadoArticulos = await respuestaArticulos.json();
//     await setArticulos(resultadoArticulos.data);
//   };
//   fetchData();
// } catch (error) {
//   console.log(error);
// }