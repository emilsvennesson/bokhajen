import { doc, FirestoreError, getDoc, setDoc } from 'firebase/firestore';
import db from '../firebase/db';
import { FSUser } from './FSUser';
import ServiceSuccessResponse from './ServiceSuccessResponse';

// TODO: extract interface to new file?

const removeEmpty = (obj: any) => {
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};

export default class UserService {
  static async addUser(user: FSUser): Promise<ServiceSuccessResponse> {
    // TODO: implement this correctly
    const uidRemovedUser = (({ uid, ...o }) => o)(user);
    const cleanedUser = removeEmpty(uidRemovedUser);

    try {
      await setDoc(doc(db, 'users', user.uid), cleanedUser);
      return { success: true };
    } catch (e) {
      console.error('something went wong....', e);
      return {
        success: false,
        error: (e as FirestoreError).message,
      };
    }
  }

  static async getUser(uid: string): Promise<FSUser | undefined> {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        uid,
        email: docSnap.data().email,
        firstName: docSnap.data().firstName,
        lastName: docSnap.data().lastName,
        phoneNumber: docSnap.data().phoneNumber,
      };
    }
    // doc.data() will be undefined in this case
    return undefined;
  }
}
