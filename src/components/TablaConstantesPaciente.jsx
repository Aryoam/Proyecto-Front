import React from "react";
import { useState, useEffect } from "react";
import Select from "./Select";
import toast, { Toaster } from "react-hot-toast";

const TablaConstantesPaciente = ({ data }) => {
  const [temperatura, setTemperatura] = useState("");
  const [comida, setComida] = useState("");
  const [obHigiene, setObHigiene] = useState({ opcion: "No" });
  const [higiene, setHigiene] = useState(false);
  const [postura, setPostura] = useState("");
  const [cardiaca, setCardiaca] = useState("");
  const [respiratoria, setRespiratoria] = useState("");
  const [oxigeno, setOxigeno] = useState("");
  const [arterial, setArterial] = useState("");
  const [medicacion, setMedicacion] = useState("");
  const [obWc, setObWc] = useState({ opcion: "No" });
  const [wc, setWc] = useState(false);
  const [cuidados, setCuidados] = useState("");
  const [apariencia, setApariencia] = useState("");
  const [actitud, setActitud] = useState(1);
  const [urgente, setUrgente] = useState("");
  const [nota, setNota] = useState("");
  const [existeHistorial, setExisteHistorial] = useState(false);

  const fecha = new Date().toISOString().split("T")[0];

  useEffect(() => {
    obHigiene.opcion === "Si" ? setHigiene(true) : setHigiene(false);
    obWc.opcion === "Si" ? setWc(true) : setWc(false);
  }, [obHigiene, obWc]);

  useEffect(() => {
    try {
      const consultarApi = async () => {
        const url = `http://localhost:4000/api/paciente/buscar-historial/${data._id}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const array = resultado.historial;
        const historia = array.find((historias) => historias.fecha === fecha);

        if (historia) {
          setTemperatura(historia.temperatura);
          setComida(historia.comida);
          setHigiene(historia.higiene);
          setPostura(historia.postura);
          setCardiaca(historia.cardiaca);
          setRespiratoria(historia.respiratoria);
          setOxigeno(historia.oxigeno);
          setArterial(historia.arterial);
          setMedicacion(historia.medicacion);
          setWc(historia.wc);
          setCuidados(historia.cuidados);
          setApariencia(historia.apariencia);
          setActitud(historia.actitud);
          setUrgente(historia.urgente);
          setNota(historia.nota);
          setExisteHistorial(historia._id);
        }
      };
      consultarApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleConstantes = (e) => {
    e.preventDefault();

    if (existeHistorial) {
      try {
        const consultarApi = async () => {
          console.log("primero");
          const url = `http://localhost:4000/api/paciente/editar-historia/${existeHistorial}`;
          const requestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              temperatura,
              comida,
              higiene,
              postura,
              cardiaca,
              respiratoria,
              oxigeno,
              arterial,
              medicacion,
              wc,
              cuidados,
              apariencia,
              actitud,
              urgente,
              nota,
            }),
          };
          const respuesta = await fetch(url, requestOptions);
          const resultado = await respuesta.json();

          toast.success("Actualizado", {
            duration: 2000,
          });
        };

        consultarApi();
      } catch (error) {
        console.log(error);
      }
      return;
    }

    if (!existeHistorial) {
      try {
        const consultarApi = async () => {
          const url = `http://localhost:4000/api/paciente/agregar-historial`;
          const requestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paciente: data._id,
              temperatura,
              comida,
              higiene,
              postura,
              cardiaca,
              respiratoria,
              oxigeno,
              arterial,
              medicacion,
              wc,
              cuidados,
              apariencia,
              actitud,
              urgente,
              nota,
            }),
          };
          const respuesta = await fetch(url, requestOptions);
          const resultado = await respuesta.json();
          toast.success("Actualizado", {
            duration: 2000,
          });

          // const urlPaciente = `http://localhost:4000/api/paciente/editar/${data._id}`;
          // const parametros = {
          //   method: "PUT",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     historial: [...data.historial, resultado.msg._id],
          //   }),
          // };

          // const respuestaPaciente = await fetch(urlPaciente, parametros);
          // const resultadoPaciente = await respuestaPaciente.json();
          // console.log(data);
        };

        consultarApi();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div className="shadowPersonalizado overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Temperatura
                  </label>
                  <input
                    type="text"
                    value={temperatura}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setTemperatura(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Comida
                  </label>
                  <input
                    type="text"
                    value={comida}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setComida(e.target.value)}
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
                    value={postura}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setPostura(e.target.value)}
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
                    value={cardiaca}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setCardiaca(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Frecuencia respiratoria
                  </label>
                  <input
                    type="text"
                    value={respiratoria}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setRespiratoria(e.target.value)}
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
                    value={oxigeno}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setOxigeno(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Presión arterial
                  </label>
                  <input
                    type="text"
                    value={arterial}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setArterial(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Medicación
                  </label>
                  <input
                    type="text"
                    value={medicacion}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-2.5"
                    onChange={(e) => setMedicacion(e.target.value)}
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
                    value={cuidados}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                    onChange={(e) => setCuidados(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Apariencia ¿Como está?
                  </label>
                  <input
                    type="text"
                    value={apariencia}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                    onChange={(e) => setApariencia(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Actitud
                  </label>
                  <input
                    type="text"
                    value={actitud}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                    onChange={(e) => setActitud(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Urgente
                  </label>
                  <input
                    type="text"
                    value={urgente}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px]"
                    onChange={(e) => setUrgente(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Nota del personal sanitario
                  </label>
                  <input
                    type="text"
                    value={nota}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[1px] border-gray-200 rounded-md p-[10px] "
                    onChange={(e) => setNota(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleConstantes}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TablaConstantesPaciente;
