import { useState } from "react";

const Exercise4 = () => {
  // State to gety the value of the input
  const [numberToAnalyze, setNumberToAnalyze] = useState();

  // Algorithm to analyze the number
  const handleAnalizeNumber = () => {
    // Array to store the divisors.
    let tempDivisors = [];
    // Loop to find the divisors
    for (let i = 1; i <= numberToAnalyze/2; i++) {
      if (numberToAnalyze % i === 0) {
          tempDivisors.push(i);
      };
    };
    
    // Accumulator to sum the divisors
    let tempResult = 0;
    for(let i = 0; i < tempDivisors.length; i++) {
      tempResult += tempDivisors[i];
    }

    // Condition to verify if the number is perfect or no.
    if(tempResult === numberToAnalyze) {
      alert('El número ' + numberToAnalyze + ' es perfecto.');
    } else {
      alert('El número ' + numberToAnalyze + ' no es perfecto');
    }
  }



  return (
    <div>
      <h2>Exercise 4</h2>

      <p>
        laborar un método (procedimiento en pseint) que 
        reciba un número y determine si dicho número es 
        perfecto o no. Un número N es perfecto si la suma 
        de todos sus divisores, excepto por él mismo, da N.
      </p>

      <label htmlFor="perfect-number-exercise-4">Intodusca el npumero que desea analizar: </label>
      <input
        id="perfect-number-exercise-4"
        type="number"
        onChange={(event) => setNumberToAnalyze(+event.target.value)}
        min={1}
      />

      <button type="button" onClick={handleAnalizeNumber}>Analizar</button>
    </div>
  );
};

export default Exercise4;
