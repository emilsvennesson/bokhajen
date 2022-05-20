import { BookCondition } from '../config/BookCondition';
import { FSUser } from './FSUser';

export enum AdStatus {
  AVAILABLE = 'Tillgänglig',
  RESERVED = 'Reserverad',
  SOLD = 'Såld',
}

export interface Advert {
  uid: string;
  user: FSUser;
  bookId: string;
  price: number;
  condition: BookCondition;
  conditionDescription: string;
  status: AdStatus;
  createdAt: Date;
  modifiedAt?: Date;
}

export interface NewAdvert
  extends Omit<Advert, 'user' | 'uid' | 'createdAt' | 'modifiedAt'> {
  userUid: string;
}
