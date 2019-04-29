import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Field from "./field.js";
import "./styles.css";

function App() {
  const [values, setValues] = useState(Array(9).fill(""));

  useEffect(() => {
    if (
      (values[0] === "X" || values[0] === "Y") &&
      (values[0] === values[1] && values[1] === values[2])
    ) {
      setIsCommpleted(true);
    }

    if (
      (values[3] === "X" || values[3] === "Y") &&
      (values[3] === values[4] && values[4] === values[5])
    ) {
      setIsCommpleted(true);
    }

    if (
      (values[6] === "X" || values[6] === "Y") &&
      (values[6] === values[7] && values[7] === values[8])
    ) {
      setIsCommpleted(true);
    }

    // Y axis conditions
    if (
      (values[0] === "X" || values[0] === "Y") &&
      (values[0] === values[3] && values[3] === values[6])
    ) {
      setIsCommpleted(true);
    }

    if (
      (values[1] === "X" || values[1] === "Y") &&
      (values[1] === values[4] && values[4] === values[7])
    ) {
      setIsCommpleted(true);
    }

    if (
      (values[2] === "X" || values[2] === "Y") &&
      (values[2] === values[5] && values[5] === values[8])
    ) {
      setIsCommpleted(true);
    }

    // Na ukos
    if (
      (values[0] === "X" || values[0] === "Y") &&
      (values[0] === values[4] && values[4] === values[8])
    ) {
      setIsCommpleted(true);
    }

    if (
      (values[2] === "X" || values[2] === "Y") &&
      (values[2] === values[4] && values[4] === values[6])
    ) {
      setIsCommpleted(true);
    }
  }, [values]);

  const [isCompleted, setIsCommpleted] = useState(null);

  const [isXNext, setIsXNext] = useState(true);

  const onClick = index => {
    if (values[index] === "") {
      const newValues = [...values];
      newValues[index] = isXNext ? "X" : "Y";
      setIsXNext(!isXNext);
      setValues(newValues);
    }
  };

  const onRefresh = () => {
    setValues(Array(9).fill(""));
    setIsCommpleted(false);
  };

  let winner;

  if (isCompleted) winner = isXNext ? "Y win" : "X Win";

  return (
    <div className="App">
      <h1 className="who">{isXNext ? "X player turn " : "Y player turn"}</h1>
      <div className="board">
        {values.map((val, index) => (
          <Field
            value={val}
            key={index}
            index={index}
            onClick={isCompleted ? null : () => onClick(index)}
          />
        ))}
      </div>
      <button className="refresh" onClick={onRefresh}>
        Refresh
      </button>
      {winner ? alert(winner) : null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
