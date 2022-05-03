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
  let rango = [];
  let lineas = [];
  if (busqueda.db === "temperatura") {
    rango = [
      { color: "#F1C40E", value: 37 },
      { color: "#16a34a", value: 38 },
      { color: "#F52D46" },
    ];
    lineas = [
      {
        color: "#FF0000",
        width: 2,
        dashStyle: "shortdash",
        value: 38,
      },
      {
        color: "#22c55e",
        width: 2,
        dashStyle: "shortdash",
        value: 37,
      },
    ];
  } else if (busqueda.db === "cardiaca") {
    rango = [
      { color: "#F1C40E", value: 60 },
      { color: "#16a34a", value: 80 },
      { color: "#F52D46" },
    ];
    lineas = [
      {
        color: "#FF0000",
        width: 2,
        dashStyle: "shortdash",
        value: 80,
      },
      {
        color: "#22c55e",
        width: 2,
        dashStyle: "shortdash",
        value: 90,
      },
    ];
  }
  const options = {
    chart: {
      height: 500,
      type: "line",
    },

    title: {
      text: `Historico de ${data.nombre}`,
    },

    subtitle: {
      text: "Temperatura",
    },
    series: [
      {
        name: "Outlier score",
        data: valores,
        zones: rango,
      },
    ],
    xAxis: {
      categories: fecha,
    },
    yAxis: {
      title: {
        text: "Temperatura (°C)",
      },
      plotLines: lineas,
      min:
        busqueda.db === "temperatura"
          ? 35
          : busqueda.db === "cardiaca"
          ? 60
          : busqueda.db === "respiratoria"
          ? 0
          : null,
      max:
        busqueda.db === "temperatura"
          ? 40
          : busqueda.db === "cardiaca"
          ? 120
          : busqueda.db === "respiratoria"
          ? 60
          : null,
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
