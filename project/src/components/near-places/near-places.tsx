import {OfferType} from '../../types/offerType';
import PlaceCard from '../place-card/place-card';


type NearPlacesProps = {
  data: OfferType[];
}

function NearPlaces(props: NearPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list">
          {
            props.data.map((element, index) => <div className={'near-places__card'} key={element.id}><PlaceCard data={element}/></div>)
          }
        </div>
      </section>
    </div>
  );
}


export default NearPlaces;

