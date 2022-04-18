
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/initializeFirebase";
import { getAllTickets,getTickets } from "./getAllTickets";

export async function getTicketByName(name, tickets) {
  const ticket = tickets.find((ticket) => ticket.name === name);
  return ticket;
}

export async function getNotAnswered() {
  const data = await getAllTickets();
  return data.filter((tickets) => !tickets.isAnswered);
}

export async function replyAnswer(body) {
  const today = new Date();
  const t  = await getDoc(doc(db,"tickets",body.ticketId))
  const b = new Date(t.data().time.seconds*1000)
  const diff = Math.floor((today - b)/60000);
  body.resptime = diff
  const post = await addDoc(collection(db, "replies"), body);
  
  return post;
}

export async function UpdateAnswered(ticketid) {
  const post = await updateDoc(doc(db, "tickets", ticketid), {
    isAnswered: true,
  });


  return post;
}

export async function getTicketIdByName(ticketname) {
  const ticketsRef = collection(db, "tickets");
  const q = query(ticketsRef, where("name", "==", ticketname));
  const snap = await getDocs(q);
  return snap.docs[0].id;
}
export async function getAnswerById(ticketid) {
  const ticketsRef = collection(db, "replies");
  const q = query(ticketsRef, where("ticketId", "==", ticketid));
  const snap = await getDocs(q);
  return snap.docs[0].data().reply;
}

export async function getReplies() {
  const repliesCol = collection(db, "replies");
  const repliesSnapshot = await getDocs(repliesCol);
  const repliesList = repliesSnapshot.docs.map((doc) => doc.data());
  const list = repliesList.map((reply) => {
    reply.replytime = new Date(reply.replytime * 1000).toUTCString();
    return reply;
  });
  return list;
}


