import { useState } from "react";

const Exercise6 = ()=> {
  // Create a state to show the result
  const [valuesToShow, setValuesToShow] = useState([]);

  // Algorthm to pocess the data
  const handleProcess = () => {
    // Variable to store the data from the user
    let data = []

    // Here I ask the user the lenght of the array
    const numberOfElements = prompt("Ingrese el número par deseado de elementos");
    // Loop to get the datra from the user
    for(let i = 0; i < +numberOfElements; i++) {
      const tempData = prompt('Ingrese el dato ' + (i + 1));
      data.push(+tempData);
    }

    // Here I call the function to organize the array
    const result = fixData(data);

    // Output
    console.log(result);
    setValuesToShow(result);
  };

  // Function to organize the array
  function fixData(data) {
    // Temporal variable to avoid motation
    let tempData = data;
    // Loop to organize the data
    for(let i = 0; i < tempData.length / 2; i += 2) {
      const firstValue = tempData[i];
      const secondValue = tempData[i + 1];

      tempData[i] = secondValue;
      tempData[i + 1] = firstValue;
    }
    // Te organized array
    return tempData;
  } 

	return (
    <div>
      <h2>Exercise 6</h2>
      
      <p>
        labore un método (procedimiento en pseint) que 
        intercambie los datos de un vector así: el primero 
        con el segundo, el tercero con el cuarto, el quinto 
        con el sexto, y así sucesivamente.
      </p>

      <button type="button" onClick={handleProcess}>Precione para iniciar</button>
      <p>{valuesToShow}</p>
    </div>
  );
};

export default Exercise6;