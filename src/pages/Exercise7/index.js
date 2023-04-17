const Exercise7 = () => {
  // Algorith to process the data.
  const handleProcess = () => {
    // Here I ask the user to set the length of the matriz
    const lengthOfTheMatrix = prompt("Inserte el largo deseado de la matriz")
    // Here I declare and initialize the matrix
    const matrix = []

    // Loop to fill the array
    for(let i = 0; i < lengthOfTheMatrix; i++) {
      matrix[i] = [];
      for(let j = 0; j < lengthOfTheMatrix; j++) {
        matrix[i][j] = randomIntFromOneToSix();
      }
    }

    // an accomulator to do the sum
    let sumAccumulator = 0;
    // A variable length whih will let me decide which elemen will I sum
    let maxRangeToSum = lengthOfTheMatrix;

    // A loop to pass through each element in the matrix 
    for(let i = 0; i < lengthOfTheMatrix; i++) {
      for(let j = 0; j < lengthOfTheMatrix; j++) {
        // A condition to deside whether the element should be sumed or not 
        if(j >= maxRangeToSum) {
          sumAccumulator += matrix[i][j];
          const numberToSum = matrix[i][j]
          // Here I show the mumber that is being summed
          console.log({numberToSum})
        }
      };
      // Here I shorten the range to take into account when summing
      maxRangeToSum -= 1;
    };
    

    // Here I show the result
    console.log(matrix);
    console.log({sumAccumulator});
  };

  // A funtion to get a random number from 1 to 6.
  function randomIntFromOneToSix() {
    return Math.floor(Math.random() * 6 + 1);
  }

  return (
    <div>
      <h1>Exercise 7</h1>

      <p>
        labore un método (función en pseint) que calcule y 
        retorne en el programa principal la suma de los 
        elementos que están por debajo de la diagonal 
        secundaria en una matriz cuadrada de orden N 
        generada con números aleatorios comprendidos 
        entre 1 y 6. 
      </p>

      <button type="button" onClick={handleProcess}>Precione para iniciar</button>
    </div>
  );
};

export default Exercise7;