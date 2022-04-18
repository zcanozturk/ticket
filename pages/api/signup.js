import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createUser } from "../../helpers/createuser";

function handler(req,res) {
  const name = req.body.name
    const email = req.body.mail
    const password = req.body.password
    console.log(req.body)
  const auth = getAuth();
  const a =  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const id = user.uid
      console.log("asda",id)
      createUser(req.body,id)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage)

    });
    if(a !== null){
        res.status(200).json({ message: "works! ", });
      }
}

export default handler;