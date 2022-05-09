import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useAutenticado from "../hooks/useAutenticado";
import SelectEnfermero from "./SelectEnfermero";
import toast, { Toaster } from "react-hot-toast";
import FileUploader from "./SubirImagen";

export default function RegistrarPaciente({ data }) {
  const { handleModalRegistrarPaciente, modalRegistrarPaciente, autenticado } =
    useAutenticado();

  const [nombre, setNombre] = useState(null);
  const [edad, setEdad] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [peso, setPeso] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [habitacion, setHabitacion] = useState(null);
  const [foto, setFoto] = useState(null);
  const [patologia, setPatologia] = useState(null);
  const [enfermero, setEnfermero] = useState(null);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAgregarPaciente = async (e) => {
    e.preventDefault();
    const url = `http://localhost:4000/api/paciente/registro`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        peso: peso,
        telefono: telefono,
        habitacion: habitacion,
        foto: foto,
        patologia: patologia,
        enfermero: enfermero,
      }),
    };

    const respuesta = await fetch(url, requestOptions);
    const resultado = await respuesta.json();
    console.log(resultado);
  };

  return (
    <>
      <Transition appear show={modalRegistrarPaciente} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={handleModalRegistrarPaciente}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/[0.7]" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-6xl  p-2 sm:p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl alturaModal overflow-scroll">
                <div>
                  <Toaster position="top-center" reverseOrder={false} />
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form>
                      <div className="shadowPersonalizado overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Nombre
                              </label>
                              <input
                                type="text"
                                value={nombre}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setNombre(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Edad
                              </label>
                              <input
                                type="text"
                                value={edad}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setEdad(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Sexo
                              </label>
                              <input
                                type="text"
                                value={sexo}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setSexo(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Peso
                              </label>
                              <input
                                type="text"
                                value={peso}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setPeso(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Telefono
                              </label>
                              <input
                                type="text"
                                value={telefono}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setTelefono(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Habitación
                              </label>
                              <input
                                type="text"
                                value={habitacion}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setHabitacion(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Foto
                              </label>
                              <input
                                type="text"
                                value={foto}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setFoto(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Patologia
                              </label>
                              <input
                                type="text"
                                value={patologia}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                                onChange={(e) => setPatologia(e.target.value)}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Enfermero
                              </label>
                              <SelectEnfermero data={data} />
                              24
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Foto
                              </label>
                              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                  <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <div className="flex text-sm text-gray-600">
                                    <label
                                      htmlFor="file-upload"
                                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                      <span>Cargar la foto</span>
                                      <FileUploader
                                        onFileSelectSuccess={(file) =>
                                          setSelectedFile(file)
                                        }
                                        onFileSelectError={({ error }) =>
                                          alert(error)
                                        }
                                      />
                                    </label>
                                    <p className="pl-1">
                                      Arrastra la foto y suelta aqui
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Guardar
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleAgregarPaciente}
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
