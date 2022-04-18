import {
  collection, addDoc, doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../firebase/initializeFirebase";


export async function deleteTicket(ticketid) {

  const ref = await deleteDoc(doc(db, "tickets", ticketid));
  return ref;
}

export async function postTicket(newticket) {
  const tick = await addDoc(collection(db, "tickets"), newticket);
  const post = await updateDoc(doc(db, "tickets", tick.id), {
    id: tick.id,
  });
  return post;
}
