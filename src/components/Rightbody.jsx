import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import MyMap from "./MapContainer";
import {
  GoogleMap,
  MarkerF,
  PolylineF,
  useJsApiLoader,
} from "@react-google-maps/api";

function Rightbody(props) {
  const { data } = props;
  useEffect(() => {
    console.log("lat:", window.localStorage.getItem("latitude"));
    console.log("long:", window.localStorage.getItem("longitude"));
  }, [data]);

  const center = {
    lat: undefined, // Latitude of the center of the map
    lng: undefined, // Longitude of the center of the map
  };

  {
    data?.map((a) => ((center.lat = a?.latitude), (center.lng = a.longitude)));
  }

  const mapContainerStyle = {
    width: "100%",
    height: window.innerHeight * 0.85,
  };

  const marker1 = {
    lat: 38.706, // Latitude of Marker 1
    lng: 35.281, // Longitude of Marker 1
  };

  const marker2 = {
    lat: 38.337, // Latitude of Marker 2
    lng: 38.308, // Longitude of Marker 2
  };

  const polylinePath = [marker1, marker2]; // Array of latlng objects for the Polyline

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCLbKz83bRJv7C2k7yxhRgGldo7sWgZUHw",
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 10,
      });
    }
  }, [isLoaded]);

  return (
    <Box flex={2} paddingLeft={"20px"} marginTop={"10px"}>
      <Box
        borderRadius={"5px"}
        width={"100%"}
        height={window.innerHeight * 0.85}
        bgcolor={"red"}
      >
        <div>
          {isLoaded ? (
            <GoogleMap
              ref={mapRef}
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={7}
            >
              <MarkerF position={marker1} />
              <MarkerF position={marker2} />
              <PolylineF
                path={polylinePath}
                options={{
                  strokeColor: "#FF0000",
                  strokeOpacity: 1.0,
                  strokeWeight: 3,
                }}
              />
            </GoogleMap>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Box>
    </Box>
  );
}

export default Rightbody;
