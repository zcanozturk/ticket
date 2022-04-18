import { doc, collection, addDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/initializeFirebase.js";

export async function createUser(body,uid) {
  const mybody = {
    name: body.name,
    mail: body.mail,
  };
  console.log(uid)
  const add = await setDoc(doc(db, "users",uid), mybody);
  
  return add;
}
