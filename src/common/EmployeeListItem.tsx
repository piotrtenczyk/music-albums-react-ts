import React from "react";
import OrangeLink from "./OrangeLink";

const employeeItemStyle = {
  margin: "5px",
  textAlign: "center" as const,
  padding: "10px",
};

const salaryStyle = {
  color: "blue",
};

const positionStyle = {
  padding: "5px",
  margin: "5px",
};

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  salary: number;
  position: string;
}

interface EmployeeListItemProps {
  employee: Employee;
  itemNumber: number;
}

const EmployeesListItem = ({ employee, itemNumber }: EmployeeListItemProps) => {
  const pathToEmployeePage = `/employee/${employee.id}`;

  return (
    <li style={employeeItemStyle}>
      <div>({itemNumber})</div>
      <OrangeLink to={pathToEmployeePage}>
        <div>
          {employee.firstName} {employee.lastName}
        </div>
      </OrangeLink>
      <div>{employee.dateOfBirth}</div>
      <div style={salaryStyle}>{employee.salary}</div>
      <div style={positionStyle}>{employee.position}</div>
    </li>
  );
};

export default EmployeesListItem;
