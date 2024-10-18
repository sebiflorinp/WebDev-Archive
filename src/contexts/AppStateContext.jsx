import { createContext, useState } from "react";

export const AppStateContext = createContext({
  isDropDownOpened: false,
  setIsDropDownOpened: () => {},
  handleDropDownClick: () => {},
  toggleOnThisPage: false,
  handleToggleOnThisPage: () => {},
  setToggleOnThisPage: () => {},
});

export default function AppStateContextProvider({ children }) {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [toggleOnThisPage, setToggleOnThisPage] = useState(false);
  const handleDropDownClick = () =>
    setIsDropDownOpened((prevDropDown) => !prevDropDown);
  const handleToggleOnThisPage = () => {
    setToggleOnThisPage((prevToggle) => !prevToggle);
  };

  const contextValue = {
    isDropDownOpened,
    setIsDropDownOpened,
    handleDropDownClick,
    toggleOnThisPage,
    handleToggleOnThisPage,
    setToggleOnThisPage,
  };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
}
