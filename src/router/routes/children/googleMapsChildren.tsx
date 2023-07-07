import {Route} from '../../../types/common.ts';
import ApiKeyChecker from "../../../pages/googleMaps/ApiKeyChecker/ApiKeyChecker.tsx";
import VanillaGoogleMap from "../../../pages/googleMaps/VanillaGoogleMap";

export const googleMapsChildren: Route[] = [
  {
    path: '',
    element: <>google maps api를 테스트하는 페이지입니다.</>,
    title: 'README',
  },
  {
    path: 'vanilla-google-maps',
    element: (
      <ApiKeyChecker
        render={(apiKey) => (
          <VanillaGoogleMap
            apiKey={apiKey}
            location={{lat: 37, lng: 127}}
            zoom={10}
            style={{
              minHeight: '50vh'
            }}
          />
        )}
      />
    ),
    title: 'Vanilla Google Map',
  },
];
