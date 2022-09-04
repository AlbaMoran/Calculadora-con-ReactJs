import '../stylesheets/ButtonClear.css'

const ButtonClear = ( props ) =>(
<div 
    className="button-clear"
    onClick={props.actionClear}>

        {props.children}

</div>

)
export default ButtonClear