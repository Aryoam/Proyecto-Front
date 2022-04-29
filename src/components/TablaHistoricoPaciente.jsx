import { useState, useEffect } from "react";
import Select from "./Select";
import Spinner from "./Spinner";

const TablaHistoricoPaciente = ({ data }) => {
  const [obHigiene, setObHigiene] = useState({ opcion: "No" });
  const [obWc, setObWc] = useState({ opcion: "No" });
  const [historial, setHistorial] = useState({});
  const [fecha, setFecha] = useState("");

  const fechaMax = new Date().toISOString().split("T")[0];

  useEffect(() => {
    setFecha(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    try {
      const consultarApi = async () => {
        const url = `http://localhost:4000/api/paciente/buscar-historial/${data._id}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const array = resultado.historial;
        const historia = array.find((historias) => historias.fecha === fecha);

        historia ? setHistorial(historia) : setHistorial(null);
      };
      consultarApi();
    } catch (error) {
      console.log(error);
    }
  }, [fecha]);

  return (
    <>
      {!historial ? (
        <Spinner />
      ) : (
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="shadowPersonalizado overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="containerFechaHistorico">
                  <input
                    type="date"
                    min={data.fechaEntrada}
                    max={fechaMax}
                    value={fecha}
                    className="relative p-2.5 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Temperatura
                    </label>
                    <input
                      type="text"
                      value={historial.temperatura}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Comida
                    </label>
                    <input
                      type="text"
                      value={historial.comida}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Higiene
                    </label>
                    <Select
                      opciones={[{ opcion: "Si" }, { opcion: "No" }]}
                      selected={obHigiene}
                      setSelected={setObHigiene}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Postura
                    </label>
                    <input
                      type="text"
                      value={historial.postura}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
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
                      value={historial.cardiaca}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Frecuencia respiratoria
                    </label>
                    <input
                      type="text"
                      value={historial.respiratoria}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
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
                      value={historial.oxigeno}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Presión arterial
                    </label>
                    <input
                      type="text"
                      value={historial.arterial}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Medicación
                    </label>
                    <input
                      type="text"
                      value={historial.medicacion}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                      disabled
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      WC
                    </label>
                    <Select
                      opciones={[{ opcion: "Si" }, { opcion: "No" }]}
                      selected={obWc}
                      setSelected={setObWc}
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Cuidados
                    </label>
                    <input
                      type="text"
                      value={historial.cuidados}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                      disabled
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Apariencia ¿Como está?
                    </label>
                    <input
                      type="text"
                      value={historial.apariencia}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                      disabled
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Actitud
                    </label>
                    <input
                      type="text"
                      value={historial.actitud}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                      disabled
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Urgente
                    </label>
                    <input
                      type="text"
                      value={historial.urgente}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px]"
                      disabled
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Nota del personal sanitario
                    </label>
                    <input
                      type="text"
                      value={historial.nota}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TablaHistoricoPaciente;
