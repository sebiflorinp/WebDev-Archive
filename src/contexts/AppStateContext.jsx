import { createContext, useState } from "react";

export const AppStateContext = createContext({
  isDropDownOpened: false,
  setIsDropDownOpened: () => {},
  handleDropDownClick: () => {},
});

export default function AppStateContextProvider({ children }) {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const handleDropDownClick = () =>
    setIsDropDownOpened((prevDropDown) => !prevDropDown);

  const contextValue = {
    isDropDownOpened,
    setIsDropDownOpened,
    handleDropDownClick,
  };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
}
