import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Sale } from "../../interfaces/interfaces";

export const addSale = async (sale: Sale) => {
    try{
        await addDoc(collection(db, "sales"), {
            ...sale
             })
        console.log("Sale added Succesfully")
    } catch(error) {
        console.log(error)
    }

}
