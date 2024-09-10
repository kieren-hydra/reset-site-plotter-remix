import { Polygon } from '@react-google-maps/api';
import {useOutletContext} from "@remix-run/react";
import {AppContextType} from "../../../types";

type DrawPolygonProps = {
    colour: string
}

const DrawPolygon = ({colour} : DrawPolygonProps) => {

    const { polygonCoordinates } = useOutletContext<AppContextType>();

    return (
        <Polygon
          path={polygonCoordinates}
          options={{
            fillColor: colour,
            fillOpacity: 0.4,
            strokeColor: colour,
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