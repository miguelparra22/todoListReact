import React from "react";

function TodoCounter({total , completed}){

    return (
    <h2 className="TodoCounter">Has completado {completed} de {total} ToDos</h2>
    );
}

export {TodoCounter}