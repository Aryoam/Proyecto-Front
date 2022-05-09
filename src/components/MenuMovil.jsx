import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { BsMenuButton, BsFillPersonPlusFill } from "react-icons/bs";
import useAutenticado from "../hooks/useAutenticado";
import RegistrarPaciente from "./RegistrarPaciente";

export default function MenuMovil() {
  const [open, setOpen] = useState(false);
  const { handleModalRegistrarPaciente } = useAutenticado();

  return (
    <>
      <BsMenuButton className="text-3xl" onClick={() => setOpen(true)} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Volver</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Administración
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* ///// */}
                        <div className="grid  gap-2.5 mt-[56px] ">
                          <div
                            className="shadowPersonalizado bg-white rounded-xl p-2.5 max-h-[149px] flex items-center hover:cursor-pointer z-50"
                            onClick={handleModalRegistrarPaciente}
                          >
                            <BsFillPersonPlusFill className="text-sky-500 text-5xl mr-5" />
                            Registrar Paciente
                            <RegistrarPaciente />
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
                        {/* /////// */}
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <div
                            className="h-full border-2 border-dashed border-gray-200"
                            aria-hidden="true"
                          />
                        </div>
                        sdfsdfd
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
