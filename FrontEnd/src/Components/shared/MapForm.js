import React, { useRef, useEffect } from "react";

import "./MapForm.css";

const MapForm = (props) => {
  const mapRef = useRef();

  const [lat, long] = props.initialCoordinates();
  console.log(lat, long);

  var lt = useRef(28.7041);
  var lg = useRef(77.1025);

 

  useEffect(() => {

    if(lat){
      lt.current = parseFloat(lat);
    }
    if(long){
      lg.current = parseFloat(long);
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: {
        lat: lt.current,
        lng: lg.current,
      },
      zoom: 16,
    });

    const marker = new window.google.maps.Marker({
      position: {
        lat: lt.current,
        lng: lg.current,
      },
      map: map,
      draggable: true,
    });

    window.google.maps.event.addListener(marker, "drag", function () {
        const lat = marker.position.lat().toFixed(6);
        const long = marker.position.lng().toFixed(6);
        
        props.onCoordinate(lat, long);
    });
  });

  // const map = new window.google.maps.Map(mapRef.current, {
  //     center: {
  //       lt,
  //       lg,
  //     },
  //     zoom: 16,
  //   });

  //   const marker = new window.google.maps.Marker({
  //     position: {
  //       lt,
  //       lg,
  //     },
  //     map: map,
  //     draggable: true,
  //   });

  //   window.google.maps.event.addListener(marker, "drag", function () {
  //     setLatitude(marker.position.lat().toFixed(6));
  //     setLongitude(marker.position.lng().toFixed(6));
  //   });

  return (
    <div className="mapBox">
      <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
      ></div>
    </div>
  );
};

export default MapForm;
