import { useEffect, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SelectGraficos from "./SelectGraficos";

const Grafico = ({ data }) => {
  const [valores, setValores] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [cardiaca, setCardiaca] = useState(null);
  const [respiratoria, setRespiratoria] = useState(null);
  const [oxigeno, setOxigeno] = useState(null);
  const [arterial, setArterial] = useState(null);
  const [actitud, setActitud] = useState(null);
  const [busqueda, setBusqueda] = useState({
    tipo: "Temperatura",
    db: "temperatura",
  });

  let rango = [];
  let lineas = [];
  let serie = [];
  if (busqueda.db === "comparar") {
    serie = [
      {
        name: "Temperatura",
        data: temperatura,
      },
      {
        name: "Frecuencia Cardiaca",
        data: cardiaca,
        visible: false,
      },
      {
        name: "Frecuencia Respiratoria",
        data: respiratoria,
        visible: false,
      },
      {
        name: "Saturación de oxígeno",
        data: oxigeno,
        visible: false,
      },
      {
        name: "Presión Arterial",
        data: arterial,
        visible: false,
      },
      {
        name: "Actitud del Paciente",
        data: actitud,
        visible: false,
      },
    ];
  } else if (busqueda.db === "temperatura") {
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
    serie = [
      {
        name: "Temperatura",
        data: temperatura,
        zones: rango,
      },
    ];
  } else if (busqueda.db === "cardiaca") {
    rango = [
      { color: "#F1C40E", value: 60 },
      { color: "#16a34a", value: 100 },
      { color: "#F52D46" },
    ];
    lineas = [
      {
        color: "#22c55e",
        width: 2,
        dashStyle: "shortdash",
        value: 70,
      },
      {
        color: "#FF0000",
        width: 2,
        dashStyle: "shortdash",
        value: 100,
      },
    ];
    serie = [
      {
        name: "Frecuencia Cardiaca",
        data: cardiaca,
        zones: rango,
      },
    ];
  } else if (busqueda.db === "respiratoria") {
    rango = [
      { color: "#F1C40E", value: 12 },
      { color: "#16a34a", value: 20 },
      { color: "#F52D46" },
    ];
    lineas = [
      {
        color: "#22c55e",
        width: 2,
        dashStyle: "shortdash",
        value: 12,
      },
      {
        color: "#FF0000",
        width: 2,
        dashStyle: "shortdash",
        value: 20,
      },
    ];
    serie = [
      {
        name: "Frecuencia Respiratoria",
        data: respiratoria,
        zones: rango,
      },
    ];
  } else if (busqueda.db === "oxigeno") {
    rango = [
      { color: "#F1C40E", value: 95 },
      { color: "#16a34a", value: 100 },
    ];
    lineas = [
      {
        color: "#FF0000",
        width: 2,
        dashStyle: "shortdash",
        value: 95,
      },
      {
        color: "#22c55e",
        width: 2,
        dashStyle: "shortdash",
        value: 95,
      },
    ];
    serie = [
      {
        name: "Saturación de oxígeno",
        data: oxigeno,
        zones: rango,
      },
    ];
  } else if (busqueda.db === "arterial") {
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
    serie = [
      {
        name: "Presión Arterial",
        data: arterial,
        zones: rango,
      },
    ];
  } else if (busqueda.db === "actitud") {
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
    serie = [
      {
        name: "Actitud del Paciente",
        data: actitud,
        zones: rango,
      },
    ];
  }
  const options = {
    chart: {
      height: 500,
      type: "line",
    },
    navigator: {
      series: {
        color: "#FF00FF",
        lineWidth: 2,
      },
    },
    plotOptions: {
      series: {
        lineWidth: 1,
      },
    },
    title: {
      text: `Historico de ${data.nombre}`,
    },

    subtitle: {
      text: `${busqueda.tipo}`,
    },
    series: serie,
    showInNavigator: true,
    xAxis: {
      categories: fecha,
      crosshair: {
        width: 1,
        color: "black",
        dashStyle: "shortdash",
      },
    },
    yAxis: {
      title: {
        text: "Temperatura (°C)",
      },
      plotLines: lineas,
      //   min:
      //     busqueda.db === "temperatura"
      //       ? 35
      //       : busqueda.db === "cardiaca"
      //       ? 60
      //       : busqueda.db === "respiratoria"
      //       ? 0
      //       : null,
      //   max:
      //     busqueda.db === "temperatura"
      //       ? 40
      //       : busqueda.db === "cardiaca"
      //       ? 120
      //       : busqueda.db === "respiratoria"
      //       ? 60
      //       : null,
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

        const temperatura = array.map((datos) => {
          return datos.temperatura;
        });

        const cardiaca = array.map((datos) => {
          return datos.cardiaca;
        });

        const respiratoria = array.map((datos) => {
          return datos.respiratoria;
        });

        const oxigeno = array.map((datos) => {
          return datos.oxigeno;
        });

        const arterial = array.map((datos) => {
          return datos.arterial;
        });

        const actitud = array.map((datos) => {
          return datos.actitud;
        });

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
        setTemperatura(temperatura);
        setCardiaca(cardiaca);
        setRespiratoria(respiratoria);
        setOxigeno(oxigeno);
        setArterial(arterial);
        setActitud(actitud);
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
