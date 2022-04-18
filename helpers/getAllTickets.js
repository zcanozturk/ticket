import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/initializeFirebase.js";

export async function getAllTickets() {
  const ticketsCol = collection(db, "tickets");
  const ticketSnapshot = await getDocs(ticketsCol);
  const ticketList = ticketSnapshot.docs.map((doc) => doc.data());
  const list = ticketList.map((ticket) => {
    ticket.time = new Date(ticket.time.seconds*1000).toUTCString();
    return ticket;
  });
  

  return list;
}

// export async function getTickets(uid){
//     const alltickets = await getAllTickets();
//     const tickets = alltickets.filter(tickets => tickets.uid === uid)
//     return tickets
// }
