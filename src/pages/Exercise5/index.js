const Exercise5 = () => {
  const handleProcess = () => {
    // Variable to storage the data entered 
    let data = []

    // Variable to store the length of the array.
    const numberOfElementsInArray = prompt('Ingrese la cantidad de datos deseada');
    // Loop to ask the user to write the data.
    for(let i  = 0; i < +numberOfElementsInArray; i++) {
      const tempValue = prompt("Increse el dato " + i)
      data.push(+tempValue);
    };
    // the number tha the user wnats to analize
    const numberToAnalize = prompt("Ingrese el dato a calcular")

    analyzeNumber(data, numberToAnalize)
  };

  const analyzeNumber = (arrayToAnalyze, numberToAnalyze) => {
    // Accumulator to know how many times de element is repeated
    let timesNumberIsRepeated = 0;

    // Loop to pass over eache element in the array
    for(let i = 0; i < arrayToAnalyze.length; i++) {
      // condition to realize if the element is equl to the current element in the array
      if(arrayToAnalyze[i] === +numberToAnalyze) {
        timesNumberIsRepeated += 1;
      }
    }

    // output
    alert('El dato ' + numberToAnalyze + ' se repite ' + timesNumberIsRepeated);
  }

  return (
    <div>
      <h2>Exercise 5:</h2>
      <p>
        Elabore un método (función en pseint) que calcule y 
        retorne cuántas veces se halla un dato d, entrado 
        como parámetro, en un vector de N elementos. 
      </p>

      <button type="button" onClick={handleProcess}>Presione el botón para empezar</button>
    </div>
  );
};

export default Exercise5;
