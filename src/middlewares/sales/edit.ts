import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";

export const setSale = async (id: string, sale: any) => {
    await setDoc(doc(db, "sales", id), {
...sale
      });
      console.log(`Employee ${sale.id} updated succesfully.`)
}