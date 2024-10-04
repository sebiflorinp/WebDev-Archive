import Menu from "../assets/menu.png";
import Logo from "../assets/logo.jpg";
import SIDEBARCONTENT from "../SIDEBAR.json";
import CategoryBar from "./CategoryBar.jsx";

function Header() {
  return (
    <div className="flex justify-between lg:justify-start lg:gap-7 lg:flex-col lg:h-screen lg:border-r-2 items-center px-4 py-3 pr-7 border-b-2 border-black lg:border-b-0">
      <img className="h-16 lg:h-24" src={Logo} alt="Webarchive Logo" />
      <img className="h-12 lg:hidden" src={Menu} alt="Menu" />
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
