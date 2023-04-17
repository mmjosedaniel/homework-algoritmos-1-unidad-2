const Exercise8 = () => {
	// Algorith to process the data.
	const handleProcess = () => {
	  // Here I ask the user to set the length N of the matriz
	  const lengthOfTheMatrixN = prompt("Inserte el largo N deseado de la matriz")
	  // Here I ask the user to set the length N of the matriz
	  const lengthOfTheMatrixM = prompt("Inserte el largo M deseado de la matriz")
		// Here I ask the user to set the vaue d
		const valueD = prompt("Inserte valor D");
	  // Here I declare and initialize the matrix
	  const matrix = []
      
	  // Loop to fill the array
	  for(let i = 0; i < lengthOfTheMatrixN; i++) {
	    matrix[i] = [];
	    for(let j = 0; j < lengthOfTheMatrixM; j++) {
	      matrix[i][j] = randomIntFromFourToNine();
	    }
	  }

    // here I create a new Matrix
    const newMatrix = [];
    for(let i = 0; i < lengthOfTheMatrixN; i++) {
      newMatrix[i] = matrix[i].slice();
    }

    // Here I show the lod matrix
    console.log("Matrix before aplying value D: ", matrix);
    
	  // A loop to pass through each element in the matrix 
	  for(let i = 0; i < lengthOfTheMatrixN; i++) {
	    for(let j = 0; j < lengthOfTheMatrixM; j++) {
        // Multiply the element by valueD
        newMatrix[i][j] *= valueD
	    };
	  };
	  
      
	  // Here I show the result
	  console.log("result: ", newMatrix);
	};
      
	// A funtion to get a random number from 4 to 9.
	function randomIntFromFourToNine() {
	  return Math.floor(Math.random() * 6 + 4);
	}
      
	return (
	  <div>
	    <h1>Exercise 8</h1>
      
	    <p>
	    	labore un método (procedimiento en pseint) que 
		genere una matriz de n*m elementos (aleatorios 
		entre 4 y 9) y le pida al usuario un valor d. Luego 
		modifique la matriz multiplicando cada elemento 
		por el valor d.
	    </p>
      
	    <button type="button" onClick={handleProcess}>Precione para iniciar</button>
	  </div>
	);
      };
      
      export default Exercise8;