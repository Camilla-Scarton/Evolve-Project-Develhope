import { useMemo, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer } from "@react-google-maps/api";

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}



function Map() {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [selectedDirections, setSelectedDirections] = useState(null);
    const [distance, setDistance] = useState(0);

    const calculateDistance = (lat1, lng1, lat2, lng2) => {
        const toRadian = (value) => (value * Math.PI) / 180;
        const R = 6371; // radius of earth in km
        const dLat = toRadian(lat2 - lat1);
        const dLng = toRadian(lng2 - lng1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadian(lat1)) *
            Math.cos(toRadian(lat2)) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    };


    const getDirections = (origin, destination, place) => {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin,
                destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setSelectedDirections(result);
                    setSelectedPlace(place);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    };


    useMemo(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                console.error(error);
            },
            { enableHighAccuracy: true }
        );
    }, []);

    useEffect(() => {
        if (center.lat === 0 && center.lng === 0) return;
        const service = new window.google.maps.places.PlacesService(
            document.createElement("div")
        );
        service.nearbySearch(
            {
                location: center,
                radius: 5000,
                type: ["gym"],
            },
            (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setPlaces(results);
                }
            }
        );
    }, [center]);

    const handleMapClick = () => {
        setSelectedPlace(null);
        setSelectedDirections(null);
    };

    const handleMarkerClick = (place) => {
        setSelectedPlace(place);
        setDistance(calculateDistance(center.lat, center.lng, place.geometry.location.lat(), place.geometry.location.lng()));
    };

    return (
        <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="mapContainer"
            onClick={handleMapClick}
            options={{ mapTypeControl: false }}
        >
            {places.map((place) => (
                <Marker
                    key={place.id}
                    position={{
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                    }}
                    onClick={() => handleMarkerClick(place)}


                />

            ))}
            {selectedPlace && (
                <InfoWindow
                    position={{
                        lat: selectedPlace.geometry.location.lat(),
                        lng: selectedPlace.geometry.location.lng(),
                    }}
                    onCloseClick={handleMapClick}
                >
                    <div className="p-4 text-sm bg-blue-900 rounded shadow-md ">
                        <h3 className="font-bold text-lg">{selectedPlace.name}</h3>
                        <p className="text-white">{selectedPlace.vicinity}</p>
                        <p className="text-white">Distance: {distance.toFixed(2)} km</p>
                        <button onClick={() => getDirections(center, { lat: selectedPlace.geometry.location.lat(), lng: selectedPlace.geometry.location.lng() })} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4">Get Directions</button>
                    </div>
                </InfoWindow>
            )}

            {selectedDirections && (
                <DirectionsRenderer directions={selectedDirections} />
            )}
        </GoogleMap>
    );
}
