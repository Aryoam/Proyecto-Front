import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";

const SlideOver = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RiMenuAddLine className="text-3xl" onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu de Opciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Este es el cuerpo del menu para los telefonos moviles y ya no se que
          mas escribir
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SlideOver;
