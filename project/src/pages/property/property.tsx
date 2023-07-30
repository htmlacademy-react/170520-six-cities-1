import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {useParams} from 'react-router-dom';
import {OfferType} from '../../types/offerType';
import {offersData} from '../../mocks/offersData';
import {pluralize, starsToPct} from '../../utils';
import {HOUSING_KINDS} from '../../const';
import {settings} from '../../settings';
import NotFound from '../not-found/not-found';
import PlaceCard from '../../components/place-card/place-card';

function Property(): JSX.Element {

  const OfferId: string | undefined = useParams().offerId;

  if (OfferId === undefined) {
    return <NotFound/>;
  }

  const currentOffer: OfferType | undefined = offersData.find((element) => element.id === OfferId);

  if (currentOffer === undefined) {
    return <NotFound/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          {
            currentOffer.photo.length !== 0 &&
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {currentOffer.photo.slice(0, settings.MaxPhotoOnDetailedPage).map((element) => <div className="property__image-wrapper" key={crypto.randomUUID()}><img src={element} alt="Photo studio"/></div>)}
                </div>
              </div>
          }
          <div className="property__container container">
            <div className="property__wrapper">
              {
                currentOffer.premium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: starsToPct(currentOffer.ratingInStars)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.ratingInStars}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {HOUSING_KINDS[currentOffer.kind]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {pluralize(currentOffer.bedrooms, 'Bedroom', 's')}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {pluralize(currentOffer.maxAdults, 'adult', 's')}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.priceNightEuro}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {
                currentOffer.amenities.length !== 0 &&
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {currentOffer.amenities.map((element) => <li className="property__inside-item" key={crypto.randomUUID()}>{element}</li>)}
                    </ul>
                  </div>
              }
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.photo ? currentOffer.host.photo : 'img/avatar.svg'} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {
                    currentOffer.host.pro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description wysiwyg">
                  {
                    currentOffer.description ? currentOffer.description : 'No description provided'
                  }
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                      </div>
                      <span className="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: '80%'}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list">
              {
                offersData.slice(0, 3).map((element) => <div className={'near-places__card'} key={element.id}><PlaceCard data={element}/></div>)
              }
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Property;
