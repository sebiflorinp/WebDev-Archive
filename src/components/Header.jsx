import Menu from "../assets/menu.png";
import Logo from "../assets/logo.jpg";
import Close from "../assets/close.png";
import SIDEBARCONTENT from "../SIDEBAR.json";
import CategoryBar from "./CategoryBar.jsx";
import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext.jsx";
import { Link } from "react-router-dom";

function Header() {
  const { isDropDownOpened, handleDropDownClick } = useContext(AppStateContext);
  return (
    <div className="flex justify-between lg:justify-start lg:gap-7 lg:flex-col lg:h-screen lg:border-r-2 items-center px-4 py-3 pr-7 border-b-2 border-black lg:border-b-0">
      <Link to={"/"}>
        <img className="h-16 lg:h-24" src={Logo} alt="Webarchive Logo" />
      </Link>
      <img
        onClick={handleDropDownClick}
        className="h-12 lg:hidden"
        src={isDropDownOpened ? Close : Menu}
        alt="Menu"
      />
      <div className="hidden lg:block w-full">
        {SIDEBARCONTENT.map((category) => {
          return (
            <CategoryBar key={category.title} category={category} depth={1} />
          );
        })}
      </div>
    </div>
  );
}

export default Header;
