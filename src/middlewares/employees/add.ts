import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";

export interface Employee {
    firstName: string;
    lastName: string;
    role: string;
    email: string;
  }

export const addEmployee = async (employee: Employee) => {
    try{
        await addDoc(collection(db, "employees"), {
            ...employee
             })
        console.log("Employee added Succesfully")
    } catch(error) {
        console.log(error)
    }

}
