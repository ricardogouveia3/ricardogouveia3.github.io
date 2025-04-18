import {collection, getDocs} from "firebase/firestore";
import {db} from "@apis/firebase.ts";
import { TechItem } from "src/types/Marquee.type";

export const getTech = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "website-tech-stack"));
    const techData: TechItem[] = querySnapshot.docs.map((doc, index) => {
      const data = doc.data();
      return {
        id: doc.id ?? index,
        hoverColor: data.hoverColor,
        iconName: data.iconName,
        label: data.label,
      };
    });
    return(techData);
  } catch (error) {
    console.error("Error while fetching tech stack data: ", error);
    return [];
  }
};