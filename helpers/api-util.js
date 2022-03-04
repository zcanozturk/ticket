import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { app } from "../firebase/initializeFirebase";

export async function getAllTickets() {
  const db = getFirestore(app);
  const ticketsCol = collection(db, "tickets");
  const ticketSnapshot = await getDocs(ticketsCol);
  const ticketList = ticketSnapshot.docs.map((doc) => doc.data());
  return ticketList;
}

export async function getNotAnswered() {
  const data = await getAllTickets();
  return data.filter((tickets) => tickets.isAnswered);
}

export async function postTicket(newticket) {
  const db = getFirestore(app);

 const post = await addDoc(collection(db, "tickets"), newticket);

  return post

}
