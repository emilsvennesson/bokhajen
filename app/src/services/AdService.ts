/* eslint-disable no-console */
import { addDoc, collection, FirestoreError } from 'firebase/firestore';
import db from '../firebase/db';
import ServiceSuccessResponse from './ServiceSuccessResponse';

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

export default class AdService {
  static async addAd(ad: Ad): Promise<ServiceSuccessResponse> {
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
