import Icon from "./Icon";
import {createContext, ReactNode, useContext, useState} from "react";

const FlyOutContext = createContext({
  open: false,
  toggle: (foo: boolean) => {
  },
});

interface FlyOutProps {
  children: ReactNode;
}

export function FlyOut({children}: FlyOutProps) {
  const [open, toggle] = useState(false);

  return (
    <div className="flyout">
      <FlyOutContext.Provider value={{open, toggle}}>
        {children}
      </FlyOutContext.Provider>
    </div>
  );
}

function Toggle() {
  const {open, toggle} = useContext(FlyOutContext);

  return (
    <div className="flyout-btn" onClick={() => toggle(!open)}>
      <Icon/>
    </div>
  );
}

interface ListProps {
  children: ReactNode;
}

function List({children}: ListProps) {
  const {open} = useContext(FlyOutContext);
  return open ? <ul className="flyout-list">{children}</ul> : <></>;
}

interface ItemProps {
  children: ReactNode;
}

function Item({children}: ItemProps) {
  return <li className="flyout-item">{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
