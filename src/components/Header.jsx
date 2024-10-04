import Menu from "../assets/menu.png";
import Logo from "../assets/logo.jpg";

function Header() {
  return (
    <div className="flex justify-between lg:flex-col lg:h-screen lg:border-r-2 items-center px-4 py-3 pr-7 border-b-2 border-black lg:border-b-0">
      <img className="h-16 lg:h-24" src={Logo} alt="Webarchive Logo" />
      <img className="h-12 lg:hidden" src={Menu} alt="Menu" />
    </div>
  );
}

export default Header;
