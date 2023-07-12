import GoogleMarker from './GoogleMarker';
import { useStations } from '../../query/markerQuery';
import { googleMapStore } from '../../store/googleMapStore';
import { useExternalValue } from '../../utils/external-state';

function StationsContainer() {
  const googleMap = useExternalValue(googleMapStore);
  console.log(googleMap?.getBounds());

  // react-query
  const { ...queryInfo } = useStations();
  const markers = queryInfo.data;
  console.log(`markers in component: ${markers?.length}`);

  if (!markers || !googleMap || !queryInfo.isSuccess) {
    return <></>;
  }

  return (
    <>
      {markers.map((marker) => (
        <GoogleMarker
          key={marker.id}
          map={googleMap}
          marker={marker}
          onClick={() => console.log(marker)}
        />
      ))}
    </>
  );
}

export default StationsContainer;
