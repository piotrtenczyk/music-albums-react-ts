export interface EmployeeRawData {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  position: string;
  salary: number;
}

const employeesData: EmployeeRawData[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1980-01-01',
      position: 'Production worker',
      salary: 2900,
    },
    {
      id: 2,
      firstName: 'Peter',
      lastName: 'Baz',
      dateOfBirth: '1990-01-01',
      position: 'Production worker',
      salary: 2600,
    },
    {
      id: 3,
      firstName: 'Ania',
      lastName: 'Strączek',
      dateOfBirth: '1983-07-10',
      position: 'Office worker',
      salary: 10000,
    }
  ];

  export default employeesData