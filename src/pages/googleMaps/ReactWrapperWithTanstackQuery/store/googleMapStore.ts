import {store} from "../utils/external-state";

type googleMapType = google.maps.Map | undefined;
export const googleMapStore = store<googleMapType>(undefined);
