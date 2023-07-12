import {MouseEventHandler, ReactNode} from "react";
import {googleMapStore} from "../../store/googleMapStore";
import {useExternalValue} from "../../utils/external-state";

function BottomRightBox({children}: { children: ReactNode }) {
  return (
    <div style={{
      zIndex: 999,
      position: 'fixed',
      bottom: 10,
      right: 10,
      backgroundColor: 'white',
      padding: 10,
      boxShadow: '1px 1px 2px gray',
    }}>
      {children}
    </div>
  );
}

function ControlButton({onClick, children}: { onClick: MouseEventHandler<HTMLButtonElement>, children: ReactNode }) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: 'white',
          padding: '12px',
          borderRadius: '10px',
          border: '1px solid gray',
          textAlign: 'center',
          width: '45px',
          height: '45px',
          margin: '5px',
        }}
      >
        {children}
      </button>
    </div>
  );
}

function ZoomController() {

  const googleMap = useExternalValue(googleMapStore);

  const onClickButton = (type: '+' | '-') => {
    if (googleMap) {
      const prevZoom = googleMap.getZoom() as number;
      if (type === '+') {
        googleMap.setZoom(prevZoom + 1);
      }
      if (type === '-') {
        googleMap.setZoom(prevZoom - 1);
      }
    }
  };

  return (
    <>
      <BottomRightBox>
        <ControlButton onClick={() => onClickButton('+')}>+</ControlButton>
        <ControlButton onClick={() => onClickButton('-')}>-</ControlButton>
      </BottomRightBox>
    </>
  );
}

export default ZoomController;
