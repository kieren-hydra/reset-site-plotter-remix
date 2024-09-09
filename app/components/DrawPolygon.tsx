import { Polygon } from '@react-google-maps/api';
import { useEffect } from 'react';

type DrawPolygonProps = {
    polygonCoordinates: { lat: number; lng: number }[];
  };

const DrawPolygon = ({ polygonCoordinates } : DrawPolygonProps) => {

    useEffect(() => {
        console.log("Coordinates array in draw polygon:", JSON.stringify(polygonCoordinates, null, 2));
      }, [polygonCoordinates]);

    return (
        <Polygon
          path={polygonCoordinates}
          options={{
            fillColor: '#00FF00',
            fillOpacity: 0.4,
            strokeColor: '#00FF00',
            strokeOpacity: 1,
            strokeWeight: 2,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 1,
          }}
        />
    )
}

export default DrawPolygon