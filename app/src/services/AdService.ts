/* eslint-disable no-console */
import {
  addDoc,
  collection,
  FirestoreError,
  getFirestore,
} from 'firebase/firestore';
import { app } from '../firebase/config';

export interface Ad {
  adDescription: string;
  adPrice: number;
  authors: string[];
  bookDescription: string;
  bookName: string;
  courseCodes: string[];
  tags: string[];
  publishDate: Date;
  wear: number;
  isbn: number;
}

interface Response {
  success: boolean;
  error?: string;
}

const db = getFirestore(app);

export default class AdService {
  static async addAd(ad: Ad): Promise<Response> {
    try {
      const docRef = await addDoc(collection(db, 'ads'), ad);
      console.log('Document written with ID: ', docRef.id);
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
