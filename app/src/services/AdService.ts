/* eslint-disable no-console */
import { Book } from 'cremona';
import { User } from 'firebase/auth';
import {
  collection,
  FirestoreError,
  getDocs,
  query,
  addDoc,
  where,
} from 'firebase/firestore';
import db from '../firebase/db';
import ServiceSuccessResponse from './ServiceSuccessResponse';

export interface Ad {
  uid: string;
  bookId: string;
  price: number;
  condition: string;
  conditionDescribtion: string;
}

export default class AdService {
  static async publishAd(ad: Ad): Promise<ServiceSuccessResponse> {
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

  static async getAds(
    book: Book | undefined = undefined,
    user: User | undefined = undefined,
  ): Promise<ServiceSuccessResponse> {
    const queryConstraints = [];
    if (book) queryConstraints.push(where('bookId', '==', book.uid));
    if (user) queryConstraints.push(where('uid', '==', user.uid));

    const q = query(collection(db, 'ads'), ...queryConstraints);

    const ads: Ad[] = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((docs) => {
      const ad: Ad = {
        uid: docs.data().uid,
        bookId: docs.data().bookId,
        price: docs.data().price,
        condition: docs.data().condition,
        conditionDescribtion: docs.data().conditionDescribtion,
      };

      ads.push(ad);
    });

    return { success: true, data: ads };
  }
}
