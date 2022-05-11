import { useState } from "react";
import "../styles/app.css";
import { BiArrowFromRight, BiArrowFromLeft } from "react-icons/bi";

function Calendario() {
  const [date, setDate] = useState(new Date());

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let month = months[date.getMonth()];
  let monthNum = [date.getMonth() + 1];
  let dia = date.getDate();
  let anyo = date.getFullYear();
  //Primer dia de la semana 0 = Domingo, fallo en los meses que empiezan en domingo
  let diaSem = days[date.getDay()];

  //Ultimo dia del mes actual
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  //Primer dia de la semana
  const firstDayofWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  function DiasRecursivo() {
    //Primer dia de la semana con su dia
    let misdias = [];
    for (let i = 0; i < firstDayofWeek; i++) {
      misdias.push(<div key={i}></div>);
    }
    //Comparación de dia actual y creacion de cada dia
    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        misdias.push(
          <div className="today" key={i}>
            {i}
          </div>
        );
      } else {
        misdias.push(<div key={i}>{i}</div>);
      }
    }
    return <>{misdias}</>;
  }
  //Mes atras con icon
  function CambioMesAtras() {
    let newdate = new Date(date.getTime());
    newdate.setMonth(date.getMonth() - 1);
    setDate(newdate);
  }
  //Mes adelante con icon
  function CambioMesAdelante() {
    let newdate = new Date(date.getTime());
    newdate.setMonth(date.getMonth() + 1);
    setDate(newdate);
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="calendar">
            <div className="month">
              <p>
                <BiArrowFromRight onClick={CambioMesAtras} />
              </p>
              <div className="date">
                <h1>{month}</h1>
                <span>
                  {diaSem}, {month}, {dia}/{monthNum}/{anyo}
                </span>
              </div>
              <p>
                <BiArrowFromLeft onClick={CambioMesAdelante} />
              </p>
            </div>
            <div className="weekdays">
              <div>Dom</div>
              <div>Lu</div>
              <div>Ma</div>
              <div>Mi</div>
              <div>Ju</div>
              <div>Vi</div>
              <div>Sa</div>
            </div>
            <div className="days">{DiasRecursivo()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calendario;
