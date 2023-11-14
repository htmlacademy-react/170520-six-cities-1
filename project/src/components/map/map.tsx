import {useEffect, useRef} from 'react';
import {OfferType} from '../../types/offerType';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import useMap from '../../hooks/useMap';
import {Icon, Marker, layerGroup} from 'leaflet';

type MapProps = {
  data: OfferType[];
  selectedPoint: OfferType | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

function Map({data, selectedPoint}: MapProps): JSX.Element {

  const mapRef = useRef(null);

  const city = data[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const placeLayer = layerGroup().addTo(map);
      map.setView(
        [
          data[0].city.location.latitude,
          data[0].city.location.longitude
        ],
        data[0].city.location.zoom
      );

      data.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker.setIcon(
          selectedPoint && offer.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(placeLayer);
      });

      return () => {
        map.removeLayer(placeLayer);
      };
    }
  }, [map, city, data, selectedPoint]);

  return (
    <section className="map" ref={mapRef}></section>
  );
}

export default Map;
