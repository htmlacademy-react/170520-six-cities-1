import {createReducer} from '@reduxjs/toolkit';
import {fetchOffers, changeCity} from './action';
import {OfferType} from "../types/offerType";

const citiesList = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const initialState: {city: string, offers: OfferType[]} = {
  city: 'Paris',
  offers: [
    {
    'id': 1,
    'title': 'Beautiful & luxurious apartment at great location',
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.5,
    'price': 130,
    'type': 'apartment',
    'bedrooms': 2,
    'maxAdults': 5,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n\nAn independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    'previewImage': 'img/apartment-01.jpg',
    'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'id': 1,
      'avatarUrl': 'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 10
    },
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    }
  },
    {
      'id': 2,
      'title': 'Wood and stone place',
      'isPremium': false,
      'isFavorite': true,
      'rating': 4,
      'price': 80,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 2,
      'description': 'This charming cottage nestled in a tranquil forest setting offers the perfect escape from the hustle and bustle of daily life.\n\nIts rustic interior and private garden make it an ideal spot for nature lovers seeking a peaceful retreat',
      'images': ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
      'previewImage': 'img/apartment-02.jpg',
      'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      'host': {
        'id': 2,
        'avatarUrl': 'img/avatar-angelina.jpg',
        'name': 'Valery',
        'isPro': true
      },
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 10
      },
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10
        },
        'name': 'Cologne'
      }
    },
    {
    'id': 3,
    'title': 'Canal View Prinsengracht',
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.2,
    'price': 132,
    'type': 'apartment',
    'bedrooms': 4,
    'maxAdults': 9,
    'description': 'Urban Oasis.\n\nA modern, stylish apartment located in the heart of the city.\n\nWith floor-to-ceiling windows that provide stunning skyline views,\n this property is a sanctuary in the midst of the urban jungle.',
    'images': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    'previewImage': 'img/apartment-03.jpg',
    'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'id': 3,
      'avatarUrl': 'img/avatar-angelina.jpg',
      'name': 'Valery',
      'isPro': true
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 10
    },
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    }
  }
  ]
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
  ;
});

export {cityReducer, citiesList};
