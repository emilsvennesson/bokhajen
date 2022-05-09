export interface Advert {
  uid: string;
  userId: string;
  bookId: string;
  price: number;
  condition: string;
  conditionDescription: string;
  status: 'available' | 'reserved' | 'sold';
}

export interface NewAdvert extends Omit<Advert, 'uid'> {}
