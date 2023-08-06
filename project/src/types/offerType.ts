import {UserType} from './userType';
import {HousingKindType} from './housingKindType';
import {CityType} from './cityType';
import {LocationType} from './locationType';

export type OfferType = {
  id: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  price: number;
  type: HousingKindType;
  bedrooms: number;
  maxAdults: number;
  description: string;
  images: string[];
  previewImage: string;
  goods: string[];
  host: UserType;
  location: LocationType;
  city: CityType;
}
