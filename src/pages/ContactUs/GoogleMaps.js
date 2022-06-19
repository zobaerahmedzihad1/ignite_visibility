import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "320px",
};

const center = {
  lat: 24.098379,
  lng: 90.328712,
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBlmkYiPYtOLXN2MwXjborox1c9FGtsetI">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
