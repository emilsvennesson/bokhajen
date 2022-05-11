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
  getDoc,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';
import db from '../firebase/db';
import ServiceSuccessResponse from './ServiceSuccessResponse';
import { AdStatus, Advert, NewAdvert } from './Advert';
import { FSUser } from './FSUser';

/**
 * Handles all fetching and publishing of ads
 *
 * @version 1.0.0
 * @author [Daniel Rygaard](https://github.com/Danryg)
 * @author [Johan Blickhammar](https://github.com/JohanBlickhammar)
 */
export default class AdService {
  static async publishAd(ad: NewAdvert): Promise<ServiceSuccessResponse> {
    const newAd: any = ad;
    newAd.user = doc(db, `users/${ad.userUid}`);
    delete newAd.userUid;
    try {
      await addDoc(collection(db, 'ads'), newAd);
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
   * @param bookUid : string (optional) will find ads with this book uid
   * @param userUid : string (optional) will find ads with this user uid
   * @returns Promise<ServiceSuccessResponse>
   */
  private static async getAds(
    bookUid?: string,
    userUid?: string,
  ): Promise<Advert[]> {
    const queryConstraints = [];
    if (bookUid) queryConstraints.push(where('bookId', '==', bookUid));
    if (userUid) queryConstraints.push(where('uid', '==', userUid));
    const q = query(collection(db, 'ads'), ...queryConstraints);
    const querySnapshot = await getDocs(q);
    const advertPromises: Promise<Advert>[] = [];

    querySnapshot.forEach((adDoc) => {
      advertPromises.push(this.parseAd(adDoc));
    });

    const ads = await Promise.all(advertPromises);
    return ads;
  }

  private static async parseAd(
    adDoc: QueryDocumentSnapshot<DocumentData>,
  ): Promise<Advert> {
    const userDoc = await getDoc(adDoc.data().user);
    const ad: Advert = {
      uid: adDoc.id,
      user: { uid: userDoc.id, ...(userDoc.data() as Object) } as FSUser,
      bookId: adDoc.data().bookId,
      price: adDoc.data().price,
      condition: adDoc.data().condition,
      conditionDescription: adDoc.data().conditionDescription,
      status: adDoc.data().status,
    };

    return ad;
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

    let res: ServiceSuccessResponse = { success: false };
    await updateDoc(docRef, data)
      .then(() => {
        res = { success: true };
      })
      .catch((e) => {
        res = { success: false, error: (e as FirestoreError).message };
      });

    return res;
  }

  /**
   * This will retrun all the ads that have been published
   * @returns Promise<ServiceSuccessResponse>
   */
  static async getAllAds(): Promise<Advert[]> {
    return this.getAds();
  }

  /**
   * Returns all the ads that have been published by a specific user
   * @param user will find all ads that have been published by this user uid
   * @returns
   */
  static async getAdsFromUser(userUid: string): Promise<Advert[]> {
    return this.getAds(undefined, userUid);
  }

  /**
   * Returns all the ads that are of a specific book
   * @param bookUid will find all ads that have this book uid
   * @returns Promise<ServiceSuccessResponse>
   */
  static async getAdsFromBook(bookUid: string): Promise<Advert[]> {
    return this.getAds(bookUid);
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
   * Edits the status of the ad
   * @param adUid the id of the ad that will be altered
   * @param newStatus the new status that will be set on the ad
   * @returns Promise<ServiceSuccessResponse>
   */
  static async editAdStatus(
    adUid: string,
    newStatus: AdStatus,
  ): Promise<ServiceSuccessResponse> {
    return this.editAd(adUid, { status: newStatus });
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
      conditionDescription: newConditionDescription,
    });
  }
}
