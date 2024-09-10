export type AppContextType = {
    polygonCoordinates: Coordinate[];
    addPolygonCoordinates: (newCoord: Coordinate) => void;
    clearPolygonCoordinates: () => void;
    deleteLastCoordinate: () => void;
};

export type AppContextWithApiKey = AppContextType & { googleMapsApiKey: string };

export type Coordinate = { lat: number; lng: number };

export type Site = {
    name: string;
    id: number,
    coordinates: Coordinate[];
};

export type SiteData = {
    sites : Site[]
}