import { Status, Wrapper } from '@googlemaps/react-wrapper';
import GoogleMap from './components/googleMaps/GoogleMap';
import Layout from './components/ui/Layout';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return (
        <>
          <GoogleMap
            minHeight="100vh"
            initialPosition={{
              lat: 37.5056102333107,
              lng: 127.05081496722168,
            }}
            initialZoomSize={14}
          />
        </>
      );
  }
};

function ReactWrapperWithTanstackQueryRoot({ apiKey }: { apiKey: string }) {
  return (
    <>
      <Wrapper apiKey={`${apiKey}`} render={render} />
      <Layout />
    </>
  );
}

export default ReactWrapperWithTanstackQueryRoot;
