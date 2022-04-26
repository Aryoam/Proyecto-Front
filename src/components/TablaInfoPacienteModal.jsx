import { PaperClipIcon } from "@heroicons/react/solid";
import SelectEnfermero from "./SelectEnfermero";

const TablaInfoPacienteModal = ({ data }) => {
  return (
    <div className="bg-white shadowPersonalizado overflow-hidden sm:rounded-lg h-full">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Información del paciente
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Datos Personales</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 items-center">
            <dt className="text-sm font-medium text-gray-500">
              Enfermero Asignado
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <SelectEnfermero data={data} />
            </dd>
          </div>
          <div className="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Edad</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.edad}
            </dd>
          </div>
          <div className="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Peso</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.peso}
            </dd>
          </div>
          <div className="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Habitación</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.habitacion}
            </dd>
          </div>
          <div className="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Patologia</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.patologia}
            </dd>
          </div>{" "}
          <div className="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">
              Fecha de Ingreso
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.fechaEntrada}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TablaInfoPacienteModal;
