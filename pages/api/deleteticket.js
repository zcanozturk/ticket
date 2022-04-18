
import { deleteTicket } from "../../helpers/deletepostTicket";

async function handler(req, res) {
  if (req.method === "POST") {
    const ticketid = req.body;
    const data = await deleteTicket(ticketid);
    if(data !== null){
      res.status(200).json({ message: "works! ", });
    }
  } 
}

export default handler;
