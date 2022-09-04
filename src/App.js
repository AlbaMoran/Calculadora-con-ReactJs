import './App.css';
import Logo from "./images/ajm-logo.png";
import Button from "./Components/Button";
import './stylesheets/Button.css';
import Pantalla from './Components/Pantalla';
import ButtonClear from './Components/ButtonClear';
import { createFactory, useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState( '' );
  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input) {

    setInput(evaluate(input))
  } else {
    alert('Ingrese un valor')
  }
  
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img 
          src={Logo} 
          className= "logo"
          alt="Logo de AJM"  />
          
      </div>
      <div className="container">
          <h1> Alba's Javascript Models </h1></div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/> 
        {/* le asignamos el valor que viene del hook de estado mas arriba */}

        <div className='fila'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}> 2 </Button>
          <Button manejarClic={agregarInput}> 3 </Button>
          <Button manejarClic={agregarInput}> + </Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}> 4 </Button>
          <Button manejarClic={agregarInput}> 5 </Button>
          <Button manejarClic={agregarInput}> 6 </Button>
          <Button manejarClic={agregarInput}> - </Button>
        </div>
        <div className='fila'> 
          <Button manejarClic={agregarInput}> 7 </Button>
          <Button manejarClic={agregarInput}> 8 </Button>
          <Button manejarClic={agregarInput}> 9 </Button>
          <Button manejarClic={agregarInput}> * </Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}> . </Button>
          <Button manejarClic={agregarInput}> 0 </Button>
          <Button manejarClic={calcularResultado}> =  </Button>
          <Button manejarClic={agregarInput}> / </Button> 
        </div>
        <div className='fila'> 
          <ButtonClear manejarClear={()=> setInput('')} > Clear</ButtonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
