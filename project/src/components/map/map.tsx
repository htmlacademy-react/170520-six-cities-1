import {useEffect, useRef} from 'react';
import {OfferType} from '../../types/offerType';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  data: OfferType[];
}

function Map(props: MapProps): JSX.Element {

  const mapRef = useRef(null);
  let mapRenderedFlag = false;

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  useEffect(() => {

    if (mapRef.current !== null && !mapRenderedFlag) {

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: 52.370216,
          lng: 4.895168,
        },
        zoom: 12,
        scrollWheelZoom: false
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      props.data.map((element) => {
        leaflet
          .marker({
            lat: element.location.latitude,
            lng: element.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(instance);
      });


      mapRenderedFlag = true;
    }


  }, [mapRef]);

  return (
    <div className="map" ref={mapRef}>

    </div>
  );
}

export default Map;
