import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";


export const getSales = async () => {
    const querySnapshot = await getDocs(collection(db, "sales"));
    const myData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})
    );
    return myData
}