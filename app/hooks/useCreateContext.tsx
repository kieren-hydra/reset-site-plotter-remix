import {useEffect, useState} from "react";
import {Coordinate} from "../types";

const useCreateContext = () => {

    const [polygonCoordinates, setPolygonCoordinates] = useState<Coordinate[]>(() => {
        if (typeof window !== "undefined") {
            const storedCoords = localStorage.getItem('coordinates');
            return storedCoords ? JSON.parse(storedCoords) : [];
        }
        return [];
    });

    // Sync coordinates with local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('coordinates', JSON.stringify(polygonCoordinates));
        console.log("polygon coordinates", polygonCoordinates)
    }, [polygonCoordinates]);

    const addPolygonCoordinates = (newCoord: Coordinate) => {
        setPolygonCoordinates((prevCoords) => [...prevCoords, newCoord]);
    };

    const clearPolygonCoordinates = () => {
        setPolygonCoordinates(() => []);
    };

    const deleteLastCoordinate = () => {
        setPolygonCoordinates((prevCoords) => [...prevCoords.slice(0, -1)])
    }

    return { polygonCoordinates, addPolygonCoordinates, clearPolygonCoordinates, deleteLastCoordinate };
}

export default useCreateContext;