import './App.css';
import Logo from "./images/ajm-logo.png";
import Button from "./Components/Button";
import './stylesheets/Button.css';
import Screen from './Components/Screen';
import ButtonClear from './Components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState( 0 );
  
  const addInput = valor => {
    setInput(valor);
    

  };

  const calculateResult = () => {
    if(input) {

    setInput(evaluate(input))
  } else {
    alert('Ingrese un valor')
  }
  
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img 
          src={Logo} 
          className= "logo"
          alt="Logo de AJM"  />
          
      </div>
      <div className="container">
          <h1> Alba's Javascript Models </h1></div>

      <div className='calculator-container'>
        <Screen input={input}/> 
        {/* le asignamos el valor que viene del hook de estado mas arriba */}

        <div className='row-calculator'>
          <Button actionClic={addInput}>1</Button>
          <Button actionClic={addInput}> 2 </Button>
          <Button actionClic={addInput}> 3 </Button>
          <Button actionClic={addInput}> + </Button>
        </div>
        <div className='row-calculator'>
          <Button actionClic={addInput}> 4 </Button>
          <Button actionClic={addInput}> 5 </Button>
          <Button actionClic={addInput}> 6 </Button>
          <Button actionClic={addInput}> - </Button>
        </div>
        <div className='row-calculator'> 
          <Button actionClic={addInput}> 7 </Button>
          <Button actionClic={addInput}> 8 </Button>
          <Button actionClic={addInput}> 9 </Button>
          <Button actionClic={addInput}> * </Button>
        </div>
        <div className='row-calculator'>
          <Button actionClic={addInput}> . </Button>
          <Button actionClic={addInput}> 0 </Button>
          <Button actionClic={calculateResult}> =  </Button>
          <Button actionClic={addInput}> / </Button> 
        </div>
        <div className='row-calculator'> 
          <ButtonClear actionClear={()=> setInput('')} > Clear</ButtonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
