import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario"
import "./style.css"

function App() {
  return (
    <Container>
      <h1 className='text-center text-white bg-black my-3 p-2 rounded-4'>Formulario</h1>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
