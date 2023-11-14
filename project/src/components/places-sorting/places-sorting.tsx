import {useState} from 'react';
import {useAppSelector} from '../../index';
import {SORT} from '../../const';
import {useDispatch} from 'react-redux';
import {changeSort} from '../../store/action';

function PlacesSorting(): JSX.Element {

  const currentSort = useAppSelector((state) => state.sort);
  const dispatch = useDispatch();


  // https://www.letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks/
  // const $placesOptions = useRef(null);
  //
  // window.addEventListener('click', (event) => {
  //   if ($placesOptions.current !== null && !$placesOptions.current.contains(event.target)) {
  //     setIsExpanded(!isExpanded);
  //   }
  // });
  // <ul ref={$placesOptions}


  window.addEventListener('keydown', (event) => {
    if( event.key === 'Escape' ) {
      setIsExpanded(false);
    }
  });

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={()=>{ setIsExpanded(!isExpanded); }}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isExpanded ? ' places__options--opened' : ''}`}>
        {
          Object.values(SORT).map((element) => (
            <li key={element}
              className={`places__option${element === currentSort ? ' places__option--active' : ''}`}
              onClick={() => {
                dispatch(changeSort(element));
                setIsExpanded(false);
              }}
              tabIndex={0}
            >
              {element}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
