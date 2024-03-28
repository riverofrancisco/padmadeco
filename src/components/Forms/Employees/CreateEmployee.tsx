import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { Employee, addEmployee } from "../../../middlewares/employees/add";
import { employeesUpdater } from "../../../redux/reducer/actions";
import { Link, useNavigate } from "react-router-dom";


const CreateEmployee: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentEmployees = useAppSelector((state) => state.global.employees.list);

  const [employeeData, setEmployeeData] = useState<Employee>({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newEmployees = [...currentEmployees, employeeData];
    addEmployee(employeeData);
    dispatch(employeesUpdater(newEmployees))
    setEmployeeData({
      firstName: "",
      lastName: "",
      role: "",
      email: "",
    });
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={employeeData.role}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <button type="submit">Create employee</button>
      <Link to={'/'}><button>Go Back To List</button></Link>
    </form>
  );
};

export default CreateEmployee;
