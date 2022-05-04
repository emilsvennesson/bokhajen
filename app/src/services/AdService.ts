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
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import db from '../firebase/db';
import ServiceSuccessResponse, {
  FetchAdvertSuccessResponse,
} from './ServiceSuccessResponse';
import Advert from './Advert';

/**
 * Handles all fetching and publishing of ads
 *
 * @version 1.0.0
 * @author [Daniel Rygaard](https://github.com/Danryg)
 * @author [Johan Blickhammar](https://github.com/JohanBlickhammar)
 */
export default class AdService {
  static async publishAd(ad: Advert): Promise<ServiceSuccessResponse> {
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

  /**
   * This methods get all the ads from the connected firebase
   * @param book : Book (optional) will find ads with this book
   * @param user : User (optional) will find ads with this user
   * @returns Promise<ServiceSuccessResponse>
   */
  private static async getAds(
    book?: Book,
    user?: User,
  ): Promise<FetchAdvertSuccessResponse> {
    const queryConstraints = [];
    if (book) queryConstraints.push(where('bookId', '==', book.uid));
    if (user) queryConstraints.push(where('uid', '==', user.uid));

    const q = query(collection(db, 'ads'), ...queryConstraints);

    const ads: Advert[] = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((docs) => {
      const ad: Advert = {
        uid: docs.id,
        userId: docs.data().uid,
        bookId: docs.data().bookId,
        price: docs.data().price,
        condition: docs.data().condition,
        conditionDescription: docs.data().conditionDescription,
      };

      ads.push(ad);
    });

    return { success: true, ads };
  }

  /**
   * This edits a document in the connected Firebase Firestore
   * @param ad the ad that should be edited
   * @param data the data that should be changed, Ex input {condition: newCondition} or {price: newPrice}
   * @returns Promise<ServiceSuccessResponse>
   */
  private static async editAd(
    adId: string,
    data: {
      [x: string]: any;
    },
  ): Promise<ServiceSuccessResponse> {
    const docRef = doc(db, 'ads', adId);

    await updateDoc(docRef, data)
      .then(() => ({ success: true }))
      .catch((e) => ({ success: false, error: (e as FirestoreError).message }));

    return { success: true };
  }

  /**
   * This will retrun all the ads that have been published
   * @returns Promise<ServiceSuccessResponse>
   */
  static async getAllAds(): Promise<ServiceSuccessResponse> {
    return this.getAds();
  }

  /**
   * Returns all the ads that have been published by a specific user
   * @param user will find all ads that have been published by this user
   * @returns
   */
  static async getAdsFromUser(user: User): Promise<ServiceSuccessResponse> {
    return this.getAds(undefined, user);
  }

  /**
   * Returns all the ads that are of a specific book
   * @param book will find all ads that have this book
   * @returns Promise<ServiceSuccessResponse>
   */
  static async getAdsFromBook(book: Book): Promise<ServiceSuccessResponse> {
    return this.getAds(book);
  }

  /**
   * Removes an add from the connected Firebase
   * @param adUid the ID of the ad that will be deleted
   * @returns Promise<ServiceSuccessResponse>
   */
  static async removeAd(adUid: string): Promise<ServiceSuccessResponse> {
    const success = await deleteDoc(doc(db, 'ads', adUid))
      .then(() => ({ success: true }))
      .catch((e) => ({ success: false, error: (e as FirestoreError).message }));

    return success;
  }

  /**
   * Edits the price of an ad
   * @param adUid the id of the ad that will be altered
   * @param newPrice the new price that will be set on the ad
   * @returns Promise<ServiceSuccessResponse>
   */
  static async editAdPrice(
    adUid: string,
    newPrice: number,
  ): Promise<ServiceSuccessResponse> {
    return this.editAd(adUid, { price: newPrice });
  }

  /**
   * Edits a condition of an ad
   * @param adUid the id of the ad that will be altered
   * @param newCondition the new condition that will be set on the ad
   * @returns Promise<ServiceSuccessResponse>
   */
  static async editAdCondition(
    adUid: string,
    newCondition: string,
  ): Promise<ServiceSuccessResponse> {
    return this.editAd(adUid, { condition: newCondition });
  }

  /**
   * Edits the condition describtion of an ad
   * @param adUid the id of the ad that will be altered
   * @param newConditionDescription the new condition describtion that will be set on the ad
   * @returns Promise<ServiceSuccessResponse>
   */
  static async editAdConditionDescription(
    adUid: string,
    newConditionDescription: string,
  ): Promise<ServiceSuccessResponse> {
    return this.editAd(adUid, {
      conditionDescribtion: newConditionDescription,
    });
  }
}
