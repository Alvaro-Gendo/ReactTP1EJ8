import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [DNI, setDNI] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(nombre.trim() === "" && apellido.trim() === "" && DNI.trim() === "" && email.trim() === ""){
            alert("Faltan cargar datos")
        }else{
            setNombre("");
            setApellido("");
            setDNI("");
            setEmail("");
            alert("Datos enviados")
        }
    }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Ingrese su nombre"
          minLength={6}
          maxLength={30}
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        ></Form.Control>
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Ingrese su apellido"
          minLength={4}
          maxLength={30}
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
        ></Form.Control>
        <Form.Label>DNI</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Ingrese su DNI"
          minLength={6}
          maxLength={7}
          onChange={(e) => setDNI(e.target.value)}
          value={DNI}
        ></Form.Control>
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Ingrese su email"
          minLength={6}
          maxLength={20}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Form.Control>
        <Button className="m-2" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
