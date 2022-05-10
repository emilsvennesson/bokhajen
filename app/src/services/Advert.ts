import { BookCondition } from '../config/BookCondition';

export enum AdStatus {
  AVAILABLE = 'Tillgänglig',
  RESERVED = 'Reserverad',
  SOLD = 'Såld',
}

export interface Advert {
  uid: string;
  userId: string;
  bookId: string;
  price: number;
  condition: BookCondition;
  conditionDescription: string;
  status: AdStatus;
}

export interface NewAdvert extends Omit<Advert, 'uid'> {}
