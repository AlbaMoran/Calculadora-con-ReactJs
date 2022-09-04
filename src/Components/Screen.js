import '../stylesheets/Screen.css'
//se puede tambien definir como una constante para que no se pueda reasiganr un valor a Pantalla//
//Se le asigna una funcion flecha que retorna un valor del props ingresado.//
const Screen = ({ input }) => (

    <div className="input">
        {input}
    </div>
)

export default Screen
    
