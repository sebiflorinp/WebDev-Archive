import Header from "./components/Header.jsx";
import MobileMenuBar from "./components/MobileMenuBar.jsx";
import { useContext } from "react";
import { AppStateContext } from "./contexts/AppStateContext.jsx";
import MainPage from "./pages/MainPage.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const { isDropDownOpened } = useContext(AppStateContext);
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex flex-col h-screen w-screen lg:grid lg:grid-cols-5">
      <Header />
      {isDropDownOpened && <MobileMenuBar />}
      {location.pathname === "/" && !isDropDownOpened && <MainPage />}
    </div>
  );
}

export default App;
