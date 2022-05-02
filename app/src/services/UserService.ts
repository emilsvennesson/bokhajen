import { User } from 'firebase/auth';
import { doc, FirestoreError, setDoc } from 'firebase/firestore';
import db from '../firebase/db';
import ServiceSuccessResponse from './ServiceSuccessResponse';

export default class UserService {
  static async addUser(user: User): Promise<ServiceSuccessResponse> {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
      });
      return { success: true };
    } catch (e) {
      console.error('something went wong....', e);
      return {
        success: false,
        error: (e as FirestoreError).message,
      };
    }
  }
}
