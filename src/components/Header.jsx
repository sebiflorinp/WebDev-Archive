import Menu from "../assets/menu.png";
import Logo from "../assets/logo.jpg";
import Close from "../assets/close.png";
import SIDEBARCONTENT from "../SIDEBAR.json";
import CategoryBar from "./CategoryBar.jsx";
import { useContext, useState } from "react";
import { AppStateContext } from "../contexts/AppStateContext.jsx";
import { Link, useLocation } from "react-router-dom";
import rightArrow from "../assets/right-arrow.png";
import downArrow from "../assets/down-arrow-black.png";
import useContent from "../hooks/useContent.jsx";
import { Link as RSLink } from "react-scroll";

function Header() {
  const {
    isDropDownOpened,
    handleDropDownClick,
    toggleOnThisPage,
    setToggleOnThisPage,
    handleToggleOnThisPage,
  } = useContext(AppStateContext);
  const [displayOnThisPage, setDisplayOnThisPage] = useState(false);
  const handleDisplayOnPage = () =>
    setDisplayOnThisPage((prevState) => !prevState);
  const location = useLocation();
  const { getAllSections } = useContent();

  return (
    <div className="flex fixed flex-col lg:items-center w-screen lg:relative lg:top-0 lg:sticky lg:h-full lg:px-5 lg:pt-4 lg:col-start-1 lg:col-span-2 lg:w-full border-black lg:justify-start lg:gap-3 lg:flex-col lg:border-r-2 lg:border-b-0">
      <div className="lg:fixed">
        <div className="flex justify-between lg:border-b-0 items-center lg:justify-start border-b-2 border-black py-3 px-5 bg-white">
          <Link to={"/"}>
            <img
              className="h-16 lg:px-8 lg:h-24"
              src={Logo}
              alt="Webarchive Logo"
            />
          </Link>
          <img
            onClick={() => {
              handleDropDownClick();
              setToggleOnThisPage(false);
            }}
            className="h-12 lg:hidden"
            src={isDropDownOpened ? Close : Menu}
            alt="Menu"
          />
        </div>
        {!isDropDownOpened && location.pathname !== "/" && (
          <div className="flex justify-end border-b-2 lg:hidden border-solid border-black bg-white lg:col-start-2 lg:col-span-4 lg:pt-4 lg:mx-8">
            <div
              onClick={handleToggleOnThisPage}
              className="flex justify-end items-center gap-3 px-3 py-2 border-solid border-black lg:hidden"
            >
              <p className="font-inter text-xl">On this page</p>
              {toggleOnThisPage ? (
                <img className="max-h-4" src={rightArrow} alt="rightArrow" />
              ) : (
                <img className="max-h-4" src={downArrow} alt="downArrow" />
              )}
            </div>
          </div>
        )}
        {toggleOnThisPage && (
          <div className="bg-white mt-4 mx-4 p-3 rounded-2xl text-2xl border-2 border-black lg:hidden">
            {getAllSections(location).map((section) => (
              <div className="p-0.5" key={section}>
                <RSLink
                  to={section}
                  offset={-135}
                  spy={true}
                  onClick={handleToggleOnThisPage}
                >
                  {section}
                </RSLink>
              </div>
            ))}
          </div>
        )}
        <div className="hidden lg:block w-full">
          {SIDEBARCONTENT.map((category) => {
            return (
              <CategoryBar key={category.title} category={category} depth={1} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
