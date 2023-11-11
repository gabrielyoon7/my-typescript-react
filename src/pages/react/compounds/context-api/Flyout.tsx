import {createContext, ReactNode, useState} from "react";

const FlyoutContext = createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {
  },
});

interface FlyoutProps {
  children: ReactNode;
}

function Flyout({children}: FlyoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlyoutContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </FlyoutContext.Provider>
  );
}

export default Flyout;
