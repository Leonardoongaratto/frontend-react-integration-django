import React from "react";


export default function ItemComponent(props){
    const status = props.status;
    return (
        <li>
            {props.name} 
            <p>status: {status ? <div>Finalizado</div> : <div>Não finalizado</div>}</p>
        </li>
    )
}