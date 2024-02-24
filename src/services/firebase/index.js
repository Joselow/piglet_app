import { doc, setDoc, getDocs, collection, getFirestore   } from "firebase/firestore"; 
import { db } from "../../main"; 


const nameCollection = 'orders'
const idNewData = 'idnew'

export const addOrder = async (payload) => {
    const uuid = crypto.randomUUID()
    await setDoc(doc(db, nameCollection, uuid), payload);
}

export const getOrders = async () => {
    const querySnapshot = await getDocs(collection(db, nameCollection));
    const orders = []
    querySnapshot.forEach((doc) => {
        orders.push(doc.data())
    });
    return orders
}


