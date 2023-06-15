import React, { useState } from "react";
import Button from "../components/Buttons";
import "../styleSheets/Buttons.css"
import Counter from "../components/Counter"
import "../styleSheets/Counter.css"


function ClickCounter(params) {

  const [number, setNumber] = useState(0);

  const manejarClick = () => {
    setNumber(number + 1);
  }

  const restartCounter = () => {
    setNumber(0);
  }

  return (
    <>
      <div className="title"><p>Nerea's Counter</p></div>
      <div className="clickCounter">
        <div className="counterBlock">
          <Counter
            clickNumbers={number} />
        </div>

        <div className="buttonsContainer">
          <Button
            text="Click"
            isBotonclick={true}
            manejarClick={manejarClick}
          />
          <Button
            className="botón2"
            text="Restart"
            isBotonclick={false}
            manejarClick={restartCounter}
          />
        </div>
      </div>
    </>
  )
}

export default ClickCounter;