import { AdStatus } from '../services/Advert';

export const getStatusColor = (status: AdStatus) => {
  switch (status) {
    case 'Tillgänglig':
      return '#00C853';
    case 'Reserverad':
      return '#FF9800';
    case 'Såld':
      return '#F44336';
    default:
      return '';
  }
};
