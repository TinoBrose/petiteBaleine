"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const markers: any[] = [
  {
    city: "Sydney",
    country: "Australia",
    latCoord: -33.8688,
    longCoord: 151.2093,
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    latCoord: 52.3676,
    longCoord: 4.9041,
  },
  {
    city: "Seoul",
    country: "South Korea",
    latCoord: 37.5665,
    longCoord: 126.978,
  },
];

const Lage = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? "";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-4.5, 48.0], // center map on Chad
      zoom: 8,
    });
    const geojson = {
      type: "Feature",
      features: {
        properties: {
          city: "Plouhinec",
          country: "France",
          iconSize: [30, 42],
        },
        geometry: {
          type: "Point",
          coordinates: {
            lat: -4.5,
            lng: 48.0,
          },
        },
      },
    };
    map.current.on("load", () => {
      const markerIcon = document.createElement("div");
      markerIcon.className = "location-marker";
      markerIcon.style.backgroundImage = "url(/location-marker.png)";
      markerIcon.style.width = geojson.features.properties.iconSize[0] + "px";
      markerIcon.style.height = geojson.features.properties.iconSize[1] + "px";

      new mapboxgl.Marker()
        .setLngLat([-4.519448630229791, 48.014615333499876])
        .addTo(map.current);
    });

    // create a DOM element for the marker
  }, []);

  return (
    <div className="flex flex-col gap-2 px-2 md:px-0">
      <div>
        <div className="flex flex-col gap-[36px]">
          <p>
            Etwa zwei Kilometer Luftlinie entfernt sehen und hören wir auch oft den Atlantik. An die
            nahen Strände kommt man bergabwärts zu Fuß, per Fahrrad oder Auto. An Kersiny,
            Mesperleuc, Gwendrez und vielen Stränden weiter nach Norden oder Süden findet jeder
            seinen idealen Ort zum Chillen im Sand, zum Surfen, Segeln, Standup-paddeln ...
          </p>
          <div className="border-t-[1px] border-accent"></div>

          <div className="flex flex-col gap-1  text-main_80 mb-4">
            <h1 className="text-2xl mb-4">Adresse</h1>

            <h3>8, Rue de Brenilour</h3>
            <h3>29780 Plouhinec, Frankreich</h3>
          </div>

        </div>
        <div className="h-[500px] w-[100%]" ref={mapContainer} />

      </div>
    </div>
  );
};

export default Lage;
