import {OfferType} from '../../types/offerType';
import {useState} from 'react';
import Map from '../map/map';
import PlaceCard from '../place-card/place-card';

type NearPlacesProps = {
  data: OfferType[];
}

function NearPlaces(props: NearPlacesProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (listItemName:OfferType) => {
    setSelectedPoint(listItemName);
  };

  return (
    <div>
      <section className="property__map">
        <Map data={props.data} selectedPoint={selectedPoint}/>
      </section>
      <div className="container">
        <section className="near-places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list">
            {
              props.data.map((element, index) => <div className={'near-places__card'} key={element.id}><PlaceCard data={element} onPlaceCardHover={onPlaceCardHover}/></div>)
            }
          </div>
        </section>
      </div>
    </div>

  );
}


export default NearPlaces;

