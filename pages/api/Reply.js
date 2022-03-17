import { replyAnswer, UpdateAnswered } from "../../helpers/api-util";


async function handler(req,res){
    if (req.method === "POST") {
        const reply = req.body.reply;
        const ticketid = req.body.ticketid;
       
        
        const post = await replyAnswer(reply,ticketid);
        const updatepost = await UpdateAnswered(ticketid);
        if(post.id !== null){
          res.status(200).json({ message: "works! ", });
        }
      } 

}


export default handler;