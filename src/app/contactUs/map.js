'use client'

import { Loader } from '@googlemaps/js-api-loader';
import React, {useEffect} from 'react';

export function Map() {

    const mapRef = React.useRef(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader(
                {
                    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                    version: 'weekly'
                }
            );

            const { Map } = await loader.importLibrary('map');

            const position = {
                lat: 43.642693,
                lng: -79.3871189
            }

            // map options
            const mapOptions = google.maps = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            // setup the map
            const map = new Map(mapRef.current, mapOptions);
        }
        initMap();
    }, []);

    return (
        <>
        <h1>Google Map</h1>
        {/* <div style={{height:'600px'}} ref={mapRef}/> */}
        </>
    )
}