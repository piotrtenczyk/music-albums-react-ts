import React, { useEffect, useState } from "react";
import EmployeesListItem from "../common/EmployeeListItem";
import fakeFetch from "../dataMocking/fakeFetch";
import {
  EmployeeRawData,
  default as employeesMockData,
} from "../dataMocking/employeesDataMock";
import CircleLoader from "../common/CircleLoader";
import PageTitle from "../common/PageTitle";

const EmployeesListPage = () => {
  const [employeesData, setEmployeesData] = useState<EmployeeRawData[]>([]);
  const dataIsLoading = employeesData.length === 0;

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const promisedValueFromFetch = await fakeFetch(employeesMockData);
      setEmployeesData(promisedValueFromFetch);
    };
    fetchEmployeeData();
  }, []);

  const employeesListItems = employeesData.map((employee, index) => {
    const numberInTheList = index + 1;

    return (
      <EmployeesListItem
        key={index}
        employee={employee}
        itemNumber={numberInTheList}
      />
    );
  });

  return (
    <div>
      <PageTitle title="Emloyee List" />
      <CircleLoader show={dataIsLoading} />
      <ul style={{ listStyleType: "none" }}>{employeesListItems}</ul>
    </div>
  );
};
export default EmployeesListPage;
