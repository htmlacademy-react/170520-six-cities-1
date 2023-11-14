import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offerType';
import {starsToPct} from '../../utils';
import {AppRoute, HOUSING_KINDS} from '../../const';

type PlaceCardProps = {
  horizontal?: boolean;
  onPlaceCardHover?: (listItemName: OfferType) => void;
  data: OfferType;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {

  const placeCardHoverHandler = () => {
    props.onPlaceCardHover?.(props.data);
  };

  return (
    <article onMouseEnter={placeCardHoverHandler} className={`place-card${ props.horizontal ? ' place-card--horizontal' : ''}`}>
      {
        props.data.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${props.data.id}`}>
          <img className="place-card__image" src={props.data.previewImage} width={`${props.horizontal ? '150' : '260' }`} height={`${props.horizontal ? '110' : '200'}`} alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.data.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${ props.data.isFavorite ? ' place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsToPct(props.data.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${props.data.id}`}>{props.data.title}</Link>
        </h2>
        <p className="place-card__type">{HOUSING_KINDS[props.data.type]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
