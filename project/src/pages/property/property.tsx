import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {useParams} from 'react-router-dom';
import {OfferType} from '../../types/offerType';
import {offersData} from '../../mocks/offersData';
import {commentsData} from '../../mocks/comments';
import {pluralize, starsToPct} from '../../utils';
import {HOUSING_KINDS} from '../../const';
import {settings} from '../../settings';
import NotFound from '../not-found/not-found';
import NearPlaces from '../../components/near-places/near-places';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';

function Property(): JSX.Element {

  const offerId: number | undefined = Number(useParams().offerId);

  if (offerId === undefined) {
    return <NotFound/>;
  }

  const currentOffer: OfferType | undefined = offersData.find((element) => element.id === offerId);

  if (currentOffer === undefined) {
    return <NotFound/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          {
            currentOffer.images.length !== 0 &&
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {currentOffer.images.slice(0, settings.MaxPhotoOnDetailedPage).map((element) => <div className="property__image-wrapper" key={crypto.randomUUID()}><img src={element} alt="Studio"/></div>)}
                </div>
              </div>
          }
          <div className="property__container container">
            <div className="property__wrapper">
              {
                currentOffer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={`property__bookmark-button${ currentOffer.isFavorite ? ' property__bookmark-button--active' : '' } button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: starsToPct(currentOffer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {HOUSING_KINDS[currentOffer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {pluralize(currentOffer.bedrooms, 'Bedroom', 's')}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {pluralize(currentOffer.maxAdults, 'adult', 's')}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {
                currentOffer.goods.length !== 0 &&
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {currentOffer.goods.map((element) => <li className="property__inside-item" key={crypto.randomUUID()}>{element}</li>)}
                    </ul>
                  </div>
              }
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl ? currentOffer.host.avatarUrl : 'img/avatar.svg'} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {
                    currentOffer.host.isPro &&
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
              <div className="property__reviews">
                <Reviews data={commentsData}/>
              </div>
            </div>
          </div>
          <section className="property__map">
            <Map data={offersData.slice(0, 3)} />
          </section>
        </section>
        <NearPlaces data={offersData.slice(0, 3)}/>
      </main>
      <Footer/>
    </div>
  );
}

export default Property;
