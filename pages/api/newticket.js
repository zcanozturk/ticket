
import { postTicket } from "../../helpers/deletepostTicket";

async function handler(req, res) {
  if (req.method === "POST") {
    const titleref = req.body.title;
    const requesterref = req.body.requester;
    const descref = req.body.description;
    const typeref = req.body.typeid;
    const mailref = req.body.mail
    const uid = req.body.uid


    const NewTicket = {
      mail: mailref,
      typeid : typeref,
      isAnswered: false,
      name: requesterref,
      title: titleref,
      description: descref,
      time: new Date(),
      uid: uid
    };
    const post = await postTicket(NewTicket)
    if(post !== null){
      res.status(200).json({ message: "works! ", });
    }
  } 
}

export default handler;
