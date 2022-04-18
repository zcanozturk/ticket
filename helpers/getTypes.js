import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase/initializeFirebase";


export async function getTypes() {
  const typesCol = collection(db, "types");
  const typesSnapshot = await getDocs(typesCol);
  const typesList = typesSnapshot.docs.map((doc) => doc.data());

  return typesList;
}

export async function getTypeById(typeid) {
  const typeRef = collection(db, "types");
  const q = query(typeRef, where("typeid", "==", typeid));
  const snap = await getDocs(q);
  return snap.docs[0].data().typename;
}
