import { useState } from "react";

const Exercise1 = () => {
  // Get input value
  const [inputValue, setInputValue] = useState("")
  // Variable to manage the result
  const [outputValue, setOutputValue] = useState("");

  // Funtion to process the data
  const handleSpecialCount = () => {
    // Resets the output
    setOutputValue('');
    // Takes over each number that should be displayed
    for(let i = 1; i <= +inputValue; i++) {
      // Reapeats each numer x times equals to its value
      for(let f = 0; f < i; f++) {
        // Concatenates the number to the output value
        setOutputValue((prevValue) => prevValue + i);
      };
      // Adds an space to separate numbers
      setOutputValue((prevValue) => prevValue + ' ');
    };
  };

	return (
    <div>
      <h2>Exercise 1</h2>
      <p>
        Elabore un algoritmo que imprima los enteros desde 1 hasta n de la
        siguiente manera: 1 22 333 4444 55555 …
      </p>

      <label htmlFor="number-for-exercise-1">Escriba un entero positivo: </label>
      {/* Takes the value from the user */}
      <input
        id="number-for-exercise-1"
        type="number"
        onChange={(event) => setInputValue(event.target.value)}
        min={0}
      />
      <button type="button" onClick={handleSpecialCount}>Procesar</button>

      <br />
      <p>{outputValue}</p>
    </div>
  );
};

export default Exercise1;
