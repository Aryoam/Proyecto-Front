import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useAutenticado from "../hooks/useAutenticado";
import SelectEnfermero from "./SelectEnfermero";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import OpcionesPaciente from "./OpcionesPaciente";
import TablaInfoPacienteModal from "./TablaInfoPacienteModal";

export default function Modal({ data }) {
  const { handleModalPacientesAdmin, modalPacientesAdmin, autenticado } =
    useAutenticado();

  return (
    <>
      {data ? (
        <Transition appear show={modalPacientesAdmin} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={handleModalPacientesAdmin}
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
                  <div className="sm:grid sm:grid-cols-[1fr_2fr] gap-2.5">
                    <div className="relative mt-24 shadowPersonalizado bg-white rounded-xl sm:w-96">
                      <img
                        src={data.foto}
                        alt="Foto del enfermero"
                        className="rounded-xl absolute -top-24 left-0 right-0 m-auto w-64 shadow-md max-h-64 "
                      />
                      <div className="pt-44 p-5">
                        <div className="flex items-center mb-3 justify-center">
                          {/* <BiUser className="mr-2 text-2xl" /> */}
                          <p className="m-0 text-xl">{data.nombre}</p>
                        </div>
                        <div className="flex items-center mb-3">
                          <AiFillPhone className="mr-2 text-2xl color-secundario" />
                          <p className="m-0">{data.telefono}</p>
                        </div>
                        <div className="flex items-center mb-3">
                          <AiOutlineMail className="mr-2 text-2xl color-secundario" />
                          <p className="m-0">{autenticado.email}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {data.nombre ? (
                        <TablaInfoPacienteModal data={data} />
                      ) : (
                        <h1>holsa</h1>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <OpcionesPaciente data={data} />
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={handleModalPacientesAdmin}
                    >
                      Finalizar
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      ) : null}
    </>
  );
}
