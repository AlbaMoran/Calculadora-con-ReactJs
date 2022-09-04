import React from 'react';

function Button(props) {

    const isOperator = (val)=>{

    return isNaN(val) && (val !== '.') && (val !== '=')
};



return (
        <div className={`button-container ${isOperator(props.children) ? 'operator': ''}`.trimEnd()}
        onClick={()=> props.actionClic(props.children)}> 
            {props.children}
        </div>


    )
}
export default Button