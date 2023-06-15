import React from "react";
import "../styleSheets/Buttons.css"

function Button({ text, isBotonclick, manejarClick }) {
  return (
    <>
      <div className="buttonContainer">
        <button className={ isBotonclick ? "boton-click" : "boton-reiniciar" }
        onClick={manejarClick}> {/* Ternarios */} {text}
        </button>
      </div>
    </>
  )
}

export default Button;