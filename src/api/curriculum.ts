import { collection, getDocs } from 'firebase/firestore';
import { db } from '@apis/firebase.ts';

export const fetchCV = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'website-cv'));
    return querySnapshot.docs.map((doc, index) => {
      const data = doc.data();
      return {
        id: doc.id ?? index,
        link: data.link,
      };
    });
  } catch (error) {
    console.error('Error while fetching cv: ', error);
    return [];
  }
};
