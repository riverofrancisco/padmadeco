import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


export const deleteEmployee = async (id: string) => {
   try{
    await deleteDoc(doc(db, "employees", id));
    console.log("Employee deleted Succesfully")
   }catch(error){
    console.log({Error: error})
   }
}