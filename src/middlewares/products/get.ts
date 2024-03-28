import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";


export const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const myData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})
    );
    return myData
}