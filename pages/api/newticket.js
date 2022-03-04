import fs from "fs";
import path from "path";
import { getAllTickets, postTicket } from "../../helpers/api-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const titleref = req.body.title;
    const requesterref = req.body.requester;
    const descref = req.body.description;

    const NewTicket = {
      isAnswered: true,
      name: requesterref,
      title: titleref,
      description: descref,
    };
    
    const post = postTicket(NewTicket)
    if(post.id !== null){
      res.status(200).json({ message: "works! ", });
    }
  } 
}

export default handler;
