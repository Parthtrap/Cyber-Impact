import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: {
        lat: parseFloat(props.lat),
        lng: parseFloat(props.long),
      },
      zoom: 16,
    });

    new window.google.maps.Marker({
      position: {
        lat: parseFloat(props.lat),
        lng: parseFloat(props.long),
      },
      map: map,
    });
  });

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
