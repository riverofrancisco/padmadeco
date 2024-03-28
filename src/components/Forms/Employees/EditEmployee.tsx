import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { Employee } from "../../../middlewares/employees/add";
import { setEmployee } from "../../../middlewares/employees/edit";
import { Link, useNavigate} from "react-router-dom";

interface Props {
  refresh: any;
}

const EditEmployee = ({ refresh }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedEmployee = useAppSelector(
    (state) => state.global.employees.selectedEmployee
  );
  const id = selectedEmployee.id;

  const [employeeData, setEmployeeData] = useState({
    id: selectedEmployee.id,
    firstName: selectedEmployee.firstName,
    lastName: selectedEmployee.lastName,
    role: selectedEmployee.role,
    email: selectedEmployee.email,
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
    setEmployee(id, employeeData);
    setEmployeeData({
      id: "",
      firstName: "",
      lastName: "",
      role: "",
      email: "",
    });
    refresh();
    navigate('/')
  };

  React.useEffect(() => {
    setEmployeeData(selectedEmployee);
  }, [selectedEmployee]);

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
      
        <button type="submit">
          Update employee
        </button>
      
      <Link to={"/"}>
        {" "}
        <button>Go Back To List</button>
      </Link>
    </form>
  );
};

export default EditEmployee;
