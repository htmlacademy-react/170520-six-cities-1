import {changeCity, fetchOffers} from '../../store/action';
import {useDispatch} from 'react-redux';
import {citiesList} from '../../store/reducer';
import {useAppSelector} from '../../index';


function Locations(): JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useAppSelector((state) => state.city);

  const handleChangeCity = (newCity: string) => {
    dispatch(changeCity(newCity));
    dispatch(fetchOffers());
  };


  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesList.map((element) => (
            <li className="locations__item" key={element}>
              <a className={`locations__item-link tabs__item${element === currentCity ? ' tabs__item--active' : ''}`} href="#" onClick={() => handleChangeCity(element)}>
                <span>{element}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Locations;
