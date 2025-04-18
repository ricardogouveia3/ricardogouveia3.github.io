import {collection, getDocs} from "firebase/firestore";
import {db} from "@apis/firebase.ts";
import {Project} from "../types/Project.type.ts";

export const fetchProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "website-projects"));
    const projectsData: Project[] = querySnapshot.docs.map((doc, index) => {
      const data = doc.data();
      return {
        id: doc.id ?? index,
        title: data.title,
        descriptionEn: data.descriptionEn,
        descriptionBr: data.descriptionBr,
        link: data.link,
        imgSrc: data.imgSrc,
        tags: data.tags,
        expanded: data.expanded ?? false,
        order: data.order ?? index,
      };
    }).sort((a, b) => a.order - b.order);
    return(projectsData);
  } catch (error) {
    console.error("Error while fetching projects: ", error);
    return [];
  }
};