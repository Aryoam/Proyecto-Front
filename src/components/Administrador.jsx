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

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const diasSemana = [
    "Domingo",
    "Lunes",
    "martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const newDate = new Date();
  const hoy =
    diasSemana[newDate.getDay()] +
    ", " +
    newDate.getDate() +
    " de " +
    meses[newDate.getMonth()] +
    " de " +
    newDate.getUTCFullYear();

  console.log(hoy);

  return (
    <>
      {paciente.length ? (
        <div className=" p-3 sm:p-12 containerLayout sm:grid sm:grid-cols-[1fr_2fr] grid-admin sm:gap-x-10 xl:px-20">
          <div className="col-span-2">
            <div className="relative mt-24 shadowPersonalizado bg-white rounded-xl sm:min-w-96 boxAdmin">
              <img
                src={autenticado.foto}
                alt="Foto del enfermero"
                className="rounded-xl absolute -top-24 sm:-top-[68px] left-0 sm:left-auto sm:mr-3
                 right-0 m-auto w-64 max-h-64 shadowPersonalizado"
              />
              <div className="pt-44 sm:pt-5  p-5">
                <div className="flex items-center mb-3">
                  <p className="m-0 text-lg">{hoy}</p>
                </div>
                <div className="text-lg sm:text-3xl">
                  <p className="text-sky-400">
                    Bienvenido Dr.{" "}
                    <span className="text-blue-700">{autenticado.nombre}</span>
                  </p>
                </div>
                <div className="">
                  <p className="">
                    Tienes{" "}
                    <span className="text-blue-700 font-bold">
                      {paciente.length}
                    </span>{" "}
                    asignados para hoy
                  </p>
                </div>
                {/* <div className="flex items-center mb-3">
                  <AiFillPhone className="mr-2 text-2xl color-secundario" />
                  <p className="m-0">{autenticado.telefono}</p>
                </div>
                <div className="flex items-center mb-3">
                  <AiOutlineMail className="mr-2 text-2xl color-secundario" />
                  <p className="m-0">{autenticado.email}</p>
                </div> */}
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
                          `
                  ${checked ? "bg-sky-400 text-white" : "bg-white"}
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex `
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
          <div className="row-[2/3]">
            <div className="grid grid-cols-2 gap-2.5 mt-[56px] gridAdministrador">
              <div className="shadowPersonalizado bg-white rounded-xl p-2.5 max-h-[149px]">
                1
              </div>
              <div className="shadowPersonalizado bg-white rounded-xl p-2.5 max-h-[149px]">
                2
              </div>
              <div className="shadowPersonalizado bg-white rounded-xl p-2.5 max-h-[149px]">
                3
              </div>
              <div className="shadowPersonalizado bg-white rounded-xl p-2.5 max-h-[149px]">
                4
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>hidnidbnfcv</h1>
      )}
    </>
  );
};

export default Administrador;
