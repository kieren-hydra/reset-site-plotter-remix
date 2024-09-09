import { GoogleMap, useJsApiLoader} from "@react-google-maps/api";

// Access the API key from environment variables
const apiKey = process.env.VITE_GOOGLE_MAPS_API;

const containerStyle = {
  width: "100%",
  height: "100%", // Adjust height as needed
};

const center = {
  lat: -34.397, // Default latitude
  lng: 150.644, // Default longitude
};

type GoogleMapComponentProps = {
    children: React.ReactNode;
    addPolygonCoordinates: (coord: { lat: number; lng: number }) => void;
  };

const GoogleMapComponent = ({ children, addPolygonCoordinates } : GoogleMapComponentProps) => {

  // Load the Google Maps JavaScript API
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey, // Make sure the API key is correctly set
  });

  if (loadError) {
    return <div>Error loading maps. Please try again later.</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    // Check if event has latLng (might be null in some cases)
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      addPolygonCoordinates({lat, lng})
    }
  };

  return (
    <div className="h-full, grow">
      <GoogleMap 
      mapContainerStyle={containerStyle} 
      center={center} 
      zoom={10}
      onClick={handleMapClick}
      >
        {children}

      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
