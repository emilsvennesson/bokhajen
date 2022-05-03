import Advert from './Advert';

export default interface ServiceSuccessResponse {
  success: boolean;
  error?: string;
}

export interface FetchAdvertSuccessResponse {
  success: boolean;
  ads?: Advert[];
  error?: string;
}
