import { Polygon } from '@react-google-maps/api';

const SitePolygons = () => {

    const polygonPath = [
        { lat: -34.397, lng: 150.644 },
        { lat: -34.397, lng: 150.654 },
        { lat: -34.407, lng: 150.654 },
        { lat: -34.407, lng: 150.644 },
      ];

    return (
        <Polygon
          path={polygonPath}
          options={{
            fillColor: '#00FF00',
            fillOpacity: 0.4,
            strokeColor: '#00FF00',
            strokeOpacity: 1,
            strokeWeight: 2,
            clickable: true,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 1,
          }}
        />
    )
}

export default SitePolygons