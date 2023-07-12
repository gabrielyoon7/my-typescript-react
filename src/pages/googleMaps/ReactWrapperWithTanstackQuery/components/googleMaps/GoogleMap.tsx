import { useEffect, useRef } from 'react';
import { googleMapStore } from '../../store/googleMapStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchStations } from '../../query/markerQuery';
import StationsContainer from './StationsContainer';
import { useExternalState, useExternalValue } from '../../utils/external-state';

function GoogleMapListener() {
  const googleMap = useExternalValue(googleMapStore);
  const queryClient = useQueryClient();

  const stationMutation = useMutation({
    mutationFn: fetchStations,
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['stations'] });
    },
  });

  useEffect(() => {
    if (googleMap) {
      googleMap.addListener('dragend', () => {
        console.log('center is changed. try to re-fetch!');
        stationMutation.mutate(); // react-query 한테 업데이트 요청하는 역할
      });

      googleMap.addListener('zoom_changed', () => {
        console.log('zoom is changed. try to re-fetch!');
        stationMutation.mutate();
      });
    }
  }, []);

  return <></>;
}

interface GoogleMapProps {
  minHeight: string;
  initialPosition: google.maps.LatLngLiteral;
  initialZoomSize: number;
}

function GoogleMap({
  minHeight,
  initialPosition,
  initialZoomSize,
}: GoogleMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = useExternalState(googleMapStore);

  console.log('혹시 재 렌더링 되면 이게 뜰 것임');

  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: initialPosition,
        zoom: initialZoomSize,
        disableDefaultUI: true,
      });

      setGoogleMap(initialMap);
    }
  }, []);

  return (
    <>
      <div ref={ref} id="map" style={{ minHeight: minHeight }} />
      {googleMap && (
        <>
          <GoogleMapListener />
          <StationsContainer />
        </>
      )}
    </>
  );
}

export default GoogleMap;
