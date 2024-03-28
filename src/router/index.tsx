import { Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import EmployeesList from "../components/Lists/Employees/EmployeesList";
import CreateEmployee from "../components/Forms/Employees/CreateEmployee";
import EditEmployee from "../components/Forms/Employees/EditEmployee";
import LoginForm from "../components/Forms/Login/Login";
import { getEmployees } from "../middlewares/employees/get";
import { useAppDispatch } from "../hooks/hooksRedux";
import { employeesUpdater, salesUpdater } from "../redux/reducer/actions";
import AddSale from "../components/Forms/Sales/NewSale";
import SalesList from "../components/Lists/Sales/SalesList";
import UpdateSale from "../components/Forms/Sales/UpdateSale";
import { getSales } from "../middlewares/sales/get";
import NavBar from "../components/Nav/Navbar";
import {getAuth , onAuthStateChanged, getIdTokenResult } from 'firebase/auth';

export const AppRouter = () => {
const dispatch= useAppDispatch()
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getData = async () => {
    const emp = await getEmployees();
    dispatch(employeesUpdater(emp));
    const sales = await getSales();
    dispatch(salesUpdater(sales))
  };


  useEffect(() => {
   /*  const isAuthenticatedString = localStorage.getItem('is_authenticated');

if (isAuthenticatedString !== null) {
  const isAuthenticated = JSON.parse(isAuthenticatedString);
  setIsAuthenticated(isAuthenticated);
} else {
  // Handle the case where 'is_authenticated' is not present in localStorage
  // For example, you might want to set a default value for 'isAuthenticated'.
  setIsAuthenticated(null); // Or any other default value you prefer. */
  const auth = getAuth();

  // Configuramos un observador para detectar cambios en el estado de autenticación
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // El usuario está autenticado

      // Obtenemos el token de Firebase
      const idTokenResult = await getIdTokenResult(user);

      // Obtenemos la fecha de expiración del token
      const expirationTime = parseInt(idTokenResult.expirationTime);

      // Verificamos si el token ha expirado
      const currentTime = new Date().getTime();
      if (expirationTime < currentTime) {

        setIsAuthenticated(false)
        // El token ha expirado, el usuario debe volver a iniciar sesión
        // Puedes redirigir al usuario a la página de inicio de sesión
      } else {
        // El token aún es válido, el usuario sigue autenticado
    
          setIsAuthenticated(true);      
      }
    } else {
      // El usuario no está autenticado
      setIsAuthenticated(false)
    }
  });


}, []);



  return (
    <div>
      <NavBar />
      {isAuthenticated ?<Routes>
        <Route path={`/createEmployee`} element={<CreateEmployee />} />
        <Route path={`/editEmployee`} element={<EditEmployee refresh={getData}/>} />
        <Route path={'/addSale'} element={<AddSale />}/>
        <Route path={`/updateSale`} element={<UpdateSale refresh={getData}/>} />
        <Route path={'/sales'} element={<SalesList setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path={`/employees`} element={<EmployeesList setIsAuthenticated={setIsAuthenticated}/>} />
        
      </Routes>: <LoginForm setIsAuthenticated={setIsAuthenticated} />  }
      
      
    </div>
  );
};
