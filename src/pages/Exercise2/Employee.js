const Employee = ({ employeeName, employeeSalary }) => {
  return (
    <div>
      <h3>{employeeName}</h3>
      <p>{employeeSalary}</p>
      <br />
    </div>
  );
};

export default Employee;
