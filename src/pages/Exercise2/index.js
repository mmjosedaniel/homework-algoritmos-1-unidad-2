import { useState } from "react";
import Employee from "./Employee";

const Exercise2 = () => {
  // Create state for number of employees.
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  // Create an array with employees
  const [employees, setEmployees] = useState([]);
  // State to manage the employee with the biggest salary
  const [biggestSalaryEmployee, setBiggestSalaryEmployee] = useState({ name: "", salary: 0});
  // State to manage the employee with the lowest salary 
  const [lowestSalaryEmployee, setLowestSalaryEmployee] = useState({ name: "", salary: Number.POSITIVE_INFINITY });

  // Function to process the increment that comes from the number of years working in the company
  const getIncrementForYearsInCompany = (yearsInCompany) => {
    // Accumolator to help to define the increment
    let sumOfIncrementForYearsInCompany = 0;

    // Forr loop to do the increment
    for(let i = 0; i <= yearsInCompany; i++) {
      sumOfIncrementForYearsInCompany += i;
    };

    return sumOfIncrementForYearsInCompany;
  };

  // Algorithm that is being asked in the exercise 
  const handleProcessEployees = () => {
    // temporal values to manage the lowes and bigest salaries
    let tempBiggestSalary = 0;
    let tempBigestSalaryName = "";

    let templowestSalary = Number.POSITIVE_INFINITY;
    let templowestSalaryName = "";

    // Loop to create the employees and calculate the salary
    for(let i = 1; i <= +numberOfEmployees; i++) {
      // Constant which represent the base salary in the company
      const BASE_SALARY = 100;
      // Prompts to hask foir the infotmation of the employees
      const employeeName = prompt('Ingrese el nombre del empleado No ' + i);
      const employeeAge = +prompt('Ingrese la edad del empleado No' + i);
      const employeeYearsInCompany = +prompt('Ingrese los años en la compañía del empleado No' + i);
      // Here the increment for years working in the company is calculated.
      const incrementForYearsInCompany = getIncrementForYearsInCompany(employeeYearsInCompany);

      // Variable to define the salary
      let employeeSalary = 0
      // As it is not possible to dive by 0 it is necessary to use a condition in case the years
      // worked in the company is equals to 0
      if (employeeYearsInCompany === 0) {
        employeeSalary = (BASE_SALARY + employeeAge + incrementForYearsInCompany);
      } else {
        employeeSalary = (BASE_SALARY + employeeAge + incrementForYearsInCompany) / employeeYearsInCompany;
      };
      
      // Here a new user is added to the employees state
      setEmployees(
          prevValue => [
            ...prevValue,
            { 
              name: employeeName,
              age: employeeAge,
              yearsInCompany: employeeYearsInCompany,
              salary: employeeSalary
            }
          ]
        )

      // condition to decide if the current user has a bigger salary.
      if(tempBiggestSalary < employeeSalary) {
        tempBiggestSalary = employeeSalary;
        tempBigestSalaryName = employeeName;
      };
      // condition to decide if the current user has a lower salary.
      if(templowestSalary > employeeSalary) {
        templowestSalary = employeeSalary;
        templowestSalaryName = employeeName;
      }
    };

    // Manages the employees with the biggest an lowest salaries.
    setBiggestSalaryEmployee({ name: tempBigestSalaryName, salary: tempBiggestSalary});
    setLowestSalaryEmployee({ name: templowestSalaryName, salary: templowestSalary });

  };



	return (
    <div>
      <h2>Exercise 2</h2>
      <p>
      Una empresa utiliza la siguiente fórmula para calcular el sueldo de sus empleados:
      </p>
      <p>Sueldo = (100 + edad + (1+2+3+...+años en la compañía)) /años en la compañía.</p>
      <p>
        Elabore un algoritmo que permita imprimir el sueldo 
        y el nombre de cada uno de los 40 empleados de la 
        compañía, así como el total acumulado de sueldos y 
        el nombre del empleado que gana más y el que 
        gana menos.
      </p>

      <label htmlFor="number-of-employees-exercise-2">Ingrese el número de empleados: </label>
      <input
        type="number"
        id="number-of-employees-exercise-2"
        onChange={(event) => setNumberOfEmployees(event.target.value)}
      />
      <button type="button" onClick={handleProcessEployees}>Procesar</button>
      
      <br />
      {/* Employees are aded to the view */}
      {
        employees.map(
          (employee, i) =>  
            <Employee employeeName={employee.name} employeeSalary={employee.salary} key={i} />
        )
      }

      <p>El empleado que gana más es {biggestSalaryEmployee.name} con {biggestSalaryEmployee.salary}.</p>
      <p>El empleado que gana menos es {lowestSalaryEmployee.name} con {lowestSalaryEmployee.salary}.</p>
    </div>
  );
};

export default Exercise2;
