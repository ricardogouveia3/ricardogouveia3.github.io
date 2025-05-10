import {collection, getDocs} from "firebase/firestore";
import {db} from "@apis/firebase.ts";

export const fetchCV = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "website-cv"));
    const cvData = querySnapshot.docs.map((doc, index) => {
      const data = doc.data();
      return {
        id: doc.id ?? index,
        link: data.link,
      };
    })
    return(cvData);
  } catch (error) {
    console.error("Error while fetching cv: ", error);
    return [];
  }
};