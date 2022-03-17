import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../firebase/initializeFirebase";

export async function getAllTickets() {
  const db = getFirestore(app);
  const ticketsCol = collection(db, "tickets");
  const ticketSnapshot = await getDocs(ticketsCol);
  const ticketList = ticketSnapshot.docs.map((doc) => doc.data());
return ticketList; 
}
export async function getTicketByName(name, tickets){
  const ticket = tickets.find(ticket => ticket.name === name)
  console.log(ticket)
  return ticket
}

export async function getNotAnswered() {
  const data = await getAllTickets();
  return data.filter((tickets) => !tickets.isAnswered);
}

export async function replyAnswer(reply, ticketid) {
  const body = {
    reply : reply,
    ticketId: ticketid
  }
  console.log(reply,ticketid)
  const db = getFirestore(app);
  const post = await addDoc(collection(db, "replies"), body);

  return post;
}

export async function UpdateAnswered(ticketid){
  const db =getFirestore(app);
  const post = await updateDoc(doc(db, 'tickets',ticketid),{
    isAnswered : true
  })
  return post;
}

export async function getTicketIdByName(ticketname) {
  const db = getFirestore(app);
  const ticketsRef = collection(db,'tickets');
  const q = query(ticketsRef, where('name', '==', ticketname))
  const snap = await getDocs(q)
  return snap.docs[0].id
}
export async function getAnswerById(ticketid) {
  const db = getFirestore(app);
  const ticketsRef = collection(db,'replies');
  const q = query(ticketsRef, where('ticketId', '==', ticketid))
  const snap = await getDocs(q)
  return snap.docs[0].data().reply
}

export async function postTicket(newticket) {
  const db = getFirestore(app);
  const post = await addDoc(collection(db, "tickets"), newticket);

  return post;
}
export async function getReplies() {
  const db = getFirestore(app);
  const repliesCol = collection(db, "replies");
  const repliesSnapshot = await getDocs(repliesCol);
  const repliesList = repliesSnapshot.docs.map((doc) => doc.data());
  
  return repliesList;
}

export async function getTypes(){

  const db = getFirestore(app);
  const typesCol = collection(db, "types");
  const typesSnapshot = await getDocs(typesCol);
  const typesList = typesSnapshot.docs.map((doc) => doc.data());
  
  return typesList;

}

export async function getTypeById(typeid){
  const db = getFirestore(app);
  const typeRef = collection(db,'types');
  const q = query(typeRef, where('typeid', '==', typeid))
  const snap = await getDocs(q)
  return snap.docs[0].data().typename

}



