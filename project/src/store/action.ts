import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offerType';

export const changeCity = createAction('CHANGE_CITY', (city: string) => ({
  payload: {city}
}));


export const fetchOffers = createAction('FETCH_OFFER', () => {

  const offers: OfferType[] = [
    {
      'id': 4,
      'title': 'Nice, cozy, warm big bed apartment',
      'isPremium': true,
      'isFavorite': false,
      'rating': 5,
      'price': 180,
      'type': 'apartment',
      'bedrooms': 3,
      'maxAdults': 5,
      'description': 'Urban Oasis.\n\nA modern, stylish apartment located in the heart of the city.\n\nWith floor-to-ceiling windows that provide stunning skyline views, this property is a sanctuary in the midst of the urban jungle.',
      'images': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
      'previewImage': 'img/apartment-03.jpg',
      'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      'host': {
        'id': 4,
        'avatarUrl': 'img/avatar-angelina.jpg',
        'name': 'Dany',
        'isPro': false
      },
      'location': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
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
      'id': 5,
      'title': 'Artistic Loft Studio',
      'isPremium': false,
      'isFavorite': true,
      'rating': 3.5,
      'price': 80,
      'type': 'hotel',
      'bedrooms': 2,
      'maxAdults': 4,
      'description': 'This beachfront villa boasts breathtaking ocean views and direct access to a pristine sandy beach. With spacious outdoor decks and a private pool, it\'s a luxurious getaway for those seeking a beachside paradise.',
      'images': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
      'previewImage': 'img/apartment-03.jpg',
      'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      'host': {
        'id': 5,
        'avatarUrl': 'img/avatar-angelina.jpg',
        'name': 'Elon',
        'isPro': false
      },
      'location': {
        'latitude': 52.39,
        'longitude': 4.92,
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
      'id': 6,
      'title': 'Yet Another loft studio',
      'isPremium': true,
      'isFavorite': true,
      'rating': 1,
      'price': 30,
      'type': 'hotel',
      'bedrooms': 2,
      'maxAdults': 4,
      'description': 'A secluded mountain lodge surrounded by towering peaks and lush forests. This cozy, log cabin-style property is perfect for winter retreats or summer adventures in nature.',
      'images': [],
      'previewImage': '',
      'goods': ['Wi-Fi'],
      'host': {
        'id': 6,
        'avatarUrl': 'img/avatar-angelina.jpg',
        'name': 'Martin',
        'isPro': false
      },
      'location': {
        'latitude': 52.37,
        'longitude': 4.91,
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
    }
  ];

  return {
    payload: {
      offers
    },
  };
});
