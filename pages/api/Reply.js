import { replyAnswer, UpdateAnswered } from "../../helpers/api-util";


async function handler(req,res){
    if (req.method === "POST") {
      const body = {
        reply: req.body.reply,
        ticketId: req.body.ticketid,
        uid: req.body.uid,
        replytime : new Date()
      };
        
        const post = await replyAnswer(body);
        const updatepost = await UpdateAnswered(body.ticketId);
        
        if(post.id !== null){
          res.status(200).json({ message: "works! ", });
        }
      } 

}


export default handler;