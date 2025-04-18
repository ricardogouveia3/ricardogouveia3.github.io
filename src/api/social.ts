import {SocialItem} from "../types/Social.type.ts";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@apis/firebase.ts";

export const fetchSocialItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "website-social-links"));
    const socialItems: SocialItem[] = querySnapshot.docs.map((doc, index) => {
      const data = doc.data();
      return {
        id: doc.id ?? index,
        order: data.order,
        hoverColor: data.hoverColor,
        iconName: data.iconName,
        label: data.label,
        link: data.link,
      };
    }).sort((a, b) => a.order - b.order);
    return(socialItems);
  } catch (error) {
    console.error("Error while fetching social items: ", error);
    return [];
  }
};