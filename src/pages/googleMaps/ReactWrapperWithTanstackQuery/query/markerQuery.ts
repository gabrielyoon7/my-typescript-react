import axios from "axios";
import {Station, StationsRequest} from "../types/type";
import {useQuery} from "@tanstack/react-query";
import {googleMapStore} from "../store/googleMapStore";

const getDisplayPosition = (map: google.maps.Map) => {
  const center = map.getCenter() as google.maps.LatLng;
  const bounds = map.getBounds() as google.maps.LatLngBounds;

  const deltaX = (bounds.getNorthEast().lng() - bounds.getSouthWest().lng()) / 2;
  const deltaY = (bounds.getNorthEast().lat() - bounds.getSouthWest().lat()) / 2;
  const centerX = center.lng();
  const centerY = center.lat();

  return {
    longitude: centerX,
    latitude: centerY,
    longitudeDelta: deltaX,
    latitudeDelta: deltaY
  } as StationsRequest
}

export async function fetchStations(): Promise<Station[]> {
  const map = googleMapStore.getState();
  if (map) {
    const query = getDisplayPosition(map);
    const res = await axios.post('/getStations', query);
    return res.data;
  } else {
    return [];
  }
}

export function useStations() {
  return useQuery({queryKey: ['stations'], queryFn: fetchStations})
}

