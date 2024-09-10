import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";

import {useOutletContext} from "@remix-run/react";
import {AppContextType} from '../types';

const containerStyle = {
    width: "100%",
    height: "100%", // Adjust height as needed
};

const center = {
    lat: 53.34771, // Default latitude
    lng: -1.48267, // Default longitude
};

type GoogleMapComponentProps = {
    children: React.ReactNode,
    clickable: boolean,
    apiKey: string
};

const GoogleMapComponent = ({children, clickable, apiKey}: GoogleMapComponentProps) => {

    const {addPolygonCoordinates} = useOutletContext<AppContextType>()

    // Load the Google Maps JavaScript API
    const {isLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: apiKey, // Make sure the API key is correctly set
    });

    if (loadError) {
        return <div>Error loading maps. Please try again later.</div>;
    }

    if (!isLoaded) {
        return <div>Loading Maps...</div>;
    }

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (clickable && event.latLng) {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            addPolygonCoordinates({lat, lng})
        }
    };

    return (
        <div className="h-full grow">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onClick={handleMapClick}
            >
                {children}

            </GoogleMap>
        </div>
    );
};

export default GoogleMapComponent;
