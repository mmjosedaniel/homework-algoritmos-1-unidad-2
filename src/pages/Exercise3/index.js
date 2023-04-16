import { useState } from "react";

const Exercise3 = () => {
  // Creation of state to manage inputs and output
  const [numberToPower, setNumberToPower] = useState(0);
  const [power, setPower] = useState(1);
  const [result, setResult] = useState();

  // Algorithm to manage the power operation
  const handleGetPowerResult = () => {
    // Here I create an acommulator o do the product of the operation.
    let tempResult = numberToPower;
    // Loop to do the operation one by one.
    for(let i = 1; i < power; i++) {
      tempResult *= numberToPower;
    }

    // Set the result
    setResult(tempResult);
  }

  return (
    <div>
      <h2>Exercise 3</h2>

      <p>
        Elaborar un método tipo función (función en pseint)
        que encuentre X^y por multiplicaciones sucesivas.
      </p>

      <label htmlFor="numer-to-power-exercise-3">Ingrese el número a elevar: </label>
      <input
        id="numer-to-power-exercise-3"
        type="number"
        min={0}
        onChange={(event) => setNumberToPower(event.target.value)}
      />

      <label htmlFor="power-exercise-3">Ingrese la potencia a la que desea elevar el númer anterior: </label>
      <input id="power-exercise-3" type="number" min={1} onChange={(event) => setPower(event.target.value)}/>

      <button type="button" onClick={handleGetPowerResult}>Procesar</button>

      <p>{result && 'El número ' + numberToPower + ' elevado en ' + power + " es igual a: " + result }</p>
    </div>
  );
};

export default Exercise3;
