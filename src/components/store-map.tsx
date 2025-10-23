
'use client'
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

// Thailand center
const center = {
  lat: 9.5,
  lng: 99.0
};

const mapOptions = {
  mapId: 'OVERBOARD_ASIA_MAP_ID', // Recommended for Advanced Markers
};

type Store = {
    name: string;
    address: string;
    image: string;
    aiHint: string;
    lat: number;
    lng: number;
    mapUrl: string;
}

interface StoreMapProps {
    stores: Store[];
    activeStore: Store | null;
    setActiveStore: (store: Store | null) => void;
}

const libraries: ('marker')[] = ['marker'];

export function StoreMap({ stores, activeStore, setActiveStore }: StoreMapProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: libraries
  })

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [infoWindowStore, setInfoWindowStore] = React.useState<Store | null>(null);
  const [markers, setMarkers] = React.useState<{[key: string]: google.maps.marker.AdvancedMarkerElement}>({});

  const markerRefs = React.useRef<{[key: string]: google.maps.marker.AdvancedMarkerElement}>({});

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(7);
    map.setCenter(center);
    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, [])

  React.useEffect(() => {
    if (map && isLoaded && google.maps.marker) {
      const newMarkers: {[key: string]: google.maps.marker.AdvancedMarkerElement} = {};
      stores.forEach(store => {
        const pin = new google.maps.marker.PinElement({
          background: 'hsl(var(--primary))',
          borderColor: 'hsl(var(--primary))',
          glyphColor: 'hsl(var(--primary-foreground))',
        });
        const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: store.lat, lng: store.lng },
          title: store.name,
          content: pin.element
        });
        marker.addListener('click', () => {
          setInfoWindowStore(store);
        });
        marker.element.addEventListener('mouseover', () => setActiveStore(store));
        marker.element.addEventListener('mouseout', () => setActiveStore(null));

        newMarkers[store.name] = marker;
      });
      setMarkers(newMarkers);
      markerRefs.current = newMarkers;

      // Cleanup function
      return () => {
        Object.values(markerRefs.current).forEach(marker => {
            // Check if marker is still on the map before trying to remove
            if (marker.map) {
                marker.map = null;
            }
        });
      };

    }
  }, [map, isLoaded, stores, setActiveStore]);

   React.useEffect(() => {
    Object.entries(markers).forEach(([name, marker]) => {
      const storeIsActive = activeStore?.name === name;
      const pin = marker.content as HTMLElement;
      if (pin) {
        if (storeIsActive) {
            pin.style.transform = 'scale(1.2)';
            pin.style.transition = 'transform 0.2s ease-in-out';
        } else {
            pin.style.transform = 'scale(1)';
        }
      }
    });
  }, [activeStore, markers]);
  
  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>
  }

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        {infoWindowStore && (
          <InfoWindow
            position={{ lat: infoWindowStore.lat, lng: infoWindowStore.lng }}
            onCloseClick={() => setInfoWindowStore(null)}
          >
            <div>
              <h3 className="font-bold">{infoWindowStore.name}</h3>
              <p>{infoWindowStore.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
  )
}
