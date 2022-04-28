import React from "react";
import Select from "./Select";

const TablaConstantesPaciente = ({ data }) => {
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form>
        <div className="shadowPersonalizado overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="ccol-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Temperatura
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Comida
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Higiene
                </label>
                <Select opciones={[{ opcion: "Si" }, { opcion: "No" }]} />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Postura
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Frecuencia cardiaca
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Frecuencia respiratoria
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  Saturación de oxígeno
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Presión arterial
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Medicación
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  WC
                </label>
                <Select opciones={[{ opcion: "Si" }, { opcion: "No" }]} />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Cuidados
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Apariencia ¿Como está?
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Actitud
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Urgente
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px]"
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Nota del personal sanitario
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                />
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
      </form>
    </div>
  );
};

export default TablaConstantesPaciente;
