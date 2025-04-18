import {Experience} from "../types/Experience.type.ts";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@apis/firebase.ts";

export const fetchExperiences = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "website-experience"));
    const experienceItems: Experience[] = querySnapshot.docs.map((doc, index) => {
      const data = doc.data();
      return {
        id: doc.id ?? index,
        company: data.company,
        endDate: data.endDate,
        jobTitle: data.jobTitle,
        startDate: data.startDate,
        order: data.order,
      };
    }).sort((a, b) => a.order - b.order);
    return(experienceItems);
  } catch (error) {
    console.error("Error while fetching experience items: ", error);
    return [];
  }
};
