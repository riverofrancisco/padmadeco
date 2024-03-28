import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


export const deleteSale = async (id: string) => {
   try{
    await deleteDoc(doc(db, "sales", id));
    console.log("Sale info deleted Succesfully")
   }catch(error){
    console.log({Error: error})
   }
}