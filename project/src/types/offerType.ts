import {UserType} from './userType';
import {CityType} from './cityType';
import {LocationType} from './locationType';
import {HOUSING_KINDS} from '../const';

export type OfferType = {
  id: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  price: number;
  type: keyof typeof HOUSING_KINDS;
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

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
