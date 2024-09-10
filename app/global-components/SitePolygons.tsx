import { Polygon } from '@react-google-maps/api';
import {Site, SiteData} from "../types";

type SitePolygonsProps = {
    siteData: SiteData,
    colour: string
}

const SitePolygons = ({siteData, colour} : SitePolygonsProps) => {

    return (
        <>
            {
                siteData && siteData.sites.map((site : Site, index : number) => {
                    return (
                        <Polygon
                            key={index}
                            path={site.coordinates}
                            options={{
                                fillColor: colour,
                                fillOpacity: 0.4,
                                strokeColor: colour,
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
                } )
            }
        </>

    )
}

export default SitePolygons