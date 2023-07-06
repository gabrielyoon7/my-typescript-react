import { useCallback, useEffect, useRef } from 'react';

interface GoogleMapProps {
  apiKey: string;
  location: { lat: number; lng: number };
  style?: React.CSSProperties;
  zoom: number;
}

function VanillaGoogleMap({ apiKey, location, style, zoom }: GoogleMapProps) {
  const mapElement = useRef(null);

  const loadScript = useCallback((url: string) => {
    const firstScript = window.document.getElementsByTagName('script')[0];
    const newScript = window.document.createElement('script');
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  const initMap = useCallback(() => {
    const { google } = window;
    if (!mapElement.current || !google) return;

    const map = new google.maps.Map(mapElement.current, {
      zoom: zoom,
      center: location,
    });
    new google.maps.Marker({
      position: location,
      map,
    });
  }, [location]);

  useEffect(() => {
    const script = window.document.getElementsByTagName('script')[0];
    const includeCheck = script.src.startsWith(
      'https://maps.googleapis.com/maps/api'
    );

    if (includeCheck) return initMap();

    window.initMap = initMap;
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&language=ko`
    );
  }, [apiKey, initMap, loadScript]);

  return (
    <div
      ref={mapElement}
      style={{
        ...style,
      }}
    />
  );
}

export default VanillaGoogleMap;
