import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const data = [
  { tipo: "Temperatura", db: "temperatura" },
  { tipo: "Frecuencia cardiaca", db: "cardiaca" },
  { tipo: "Frecuencia respiratoria", db: "respiratoria" },
  { tipo: "Saturación de oxígeno", db: "oxigeno" },
  { tipo: "Presión arterial", db: "arterial" },
  { tipo: "Actitud", db: "actitud" },
  { tipo: "Comparar", db: "comparar" },
];

export default function SelectGraficos({ selected, setSelected }) {
  return (
    <div className="alinearSelectGrafico">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 max-w-xs">
          <Listbox.Button className="focus:outline-none relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm z-[999999] ">
            <span className="block truncate">{selected.tipo}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="text-left focus:outline-none absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm z-[99]">
              {data.map((datos, datosIdx) => (
                <Listbox.Option
                  key={datosIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "text-gray-700 bg-cyan-100" : "text-gray-900"
                    }`
                  }
                  value={datos}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {datos.tipo}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
