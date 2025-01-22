import React, {useState} from 'react';

function Hook() {
    const [employee, setEmployee] = useState({
        employeeNo : 10, 
        name : "shank",
        designation : "Junion Engineer"
    });

    const promote = () => {
        setEmployee({...employee, designation : "Senior Engineer"});
        alert("You have been promoted to Senior Engineer");
    }

  return (
    <div>
        <h3>Employee Details: </h3>
        <p>Employee Number : {employee.employeeNo}</p>
        <p>Employee Name : {employee.name}</p>
        <p>Employee Desination : {employee.designation}</p>
        <button onClick={promote}>Promote to Senior Engineer</button>
    </div>
  )
}

export default Hook;
