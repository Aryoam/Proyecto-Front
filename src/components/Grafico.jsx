import { useEffect, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SelectGraficos from "./SelectGraficos";

const Grafico = ({ data }) => {
  const [valores, setValores] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [busqueda, setBusqueda] = useState({
    tipo: "Temperatura",
    db: "temperatura",
  });
  const options = {
    title: {
      text: `Historico de ${data.nombre}`,
    },

    subtitle: {
      text: "Temperatura",
    },
    series: [
      {
        name: "Día",
        data: valores,
      },
    ],
    xAxis: {
      categories: fecha,
    },
    yAxis: {
      title: {
        text: "Temperatura (°C)",
      },
      min: 35,
      max: 40,
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
  };

  useEffect(() => {
    try {
      const consultarApi = async () => {
        const url = `http://localhost:4000/api/paciente/buscar-historial/${data._id}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        const array = resultado.historial;
        const consulta = busqueda.db;

        const datos = array.map((datos) => {
          if (consulta == "temperatura") {
            return datos.temperatura;
          } else if (consulta == "cardiaca") {
            return datos.cardiaca;
          } else if (consulta == "respiratoria") {
            return datos.respiratoria;
          } else if (consulta == "oxigeno") {
            return datos.oxigeno;
          } else if (consulta == "arterial") {
            return datos.arterial;
          } else if (consulta == "actitud") {
            return datos.actitud;
          }
        });
        const fechas = array.map((fecha) => fecha.fecha);
        setValores(datos);
        setFecha(fechas);
      };
      consultarApi();
    } catch (error) {
      console.log(error);
    }
  }, [busqueda]);

  return (
    <>
      <SelectGraficos selected={busqueda} setSelected={setBusqueda} />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default Grafico;
