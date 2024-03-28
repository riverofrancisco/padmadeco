import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Employee } from "./add";

export const setEmployee = async (id: string, employee: any) => {
    await setDoc(doc(db, "employees", id), {
...employee
      });
      console.log(`Employee ${employee.firstName} updated succesfully.`)
}