import { useEffect, useState } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api"

export default function Map() {
    const [myPosition, setMyposition] = useState({});
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setMyposition(pos.coords)
        })
    }
        , [])

    return <div>
        {!isLoaded && <p>Loading...</p>}
        {isLoaded &&
            <GoogleMap
                zoom={10}
                center={myPosition ? { lat: myPosition.latitude, lng: myPosition.longitude }
                    : { lat: 0, lng: 0 }}
                mapContainerClassName="mapContainer"></GoogleMap>}
    </div>

}
