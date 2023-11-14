import PlaceCard from '../../components/place-card/place-card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Map from '../../components/map/map';
import {settings} from '../../settings';
import Locations from '../../components/locations/locations';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import {useAppSelector} from '../../index';
import {useState} from 'react';
import {OfferType} from '../../types/offerType';


function Main(): JSX.Element {

  const currentCity = useAppSelector((state) => state.city);
  const offersData = useAppSelector((state) => state.offers);

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (listItemName:OfferType) => {
    setSelectedPoint(listItemName);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in {currentCity}</b>
              <PlacesSorting/>
              <div className="cities__places-list places__list tabs__content">{
                offersData.slice(0, settings.OffersAmountOnMainPage).map((element) => <div className={'cities__card'} key={element.id}><PlaceCard data={element} onPlaceCardHover={onPlaceCardHover}/></div>)
              }
              </div>
              <Footer noContainer/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map">
                <Map data={offersData.slice(0, settings.OffersAmountOnMainPage)} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Main;
