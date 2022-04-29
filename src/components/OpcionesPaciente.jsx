import { useState } from "react";
import { Tab } from "@headlessui/react";
import TablaConstantesPaciente from "./TablaConstantesPaciente";
import TablaHistoricoPaciente from "./TablaHistoricoPaciente";
import Grafico from "./Grafico";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OpcionesPaciente({ data }) {
  let [categories] = useState({
    Constantes: [
      {
        componente: <TablaConstantesPaciente data={data} />,
      },
    ],
    Historial: [
      {
        componente: <TablaHistoricoPaciente data={data} />,
      },
    ],
    Estadisticas: [
      {
        componente: <Grafico />,
      },
    ],
  });

  return (
    <div className="w-full px-2 py-5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-sky-400 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none  ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-50 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl py-3",
                "focus:outline-none  ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul>
                {posts.map((post, idx) => (
                  <div key={idx}>{post.componente}</div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
