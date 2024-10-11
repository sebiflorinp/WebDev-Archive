import rightArrow from "../assets/right-arrow.png";
import downArrow from "../assets/down-arrow-black.png";
import { useState } from "react";
import useContent from "../hooks/useContent.jsx";
import { useLocation } from "react-router-dom";
import CONTENT from "../CONTENT.json";

function DocumentationPage() {
  const { displayContent } = useContent();
  const location = useLocation();
  const [displayOnThisPage, setDisplayOnThisPage] = useState(false);
  const handleDisplayOnPage = () =>
    setDisplayOnThisPage((prevState) => !prevState);
  return (
    <div className="flex flex-col lg:col-start-2 lg:col-span-4 lg:pt-4 lg:mx-8">
      <div
        onClick={handleDisplayOnPage}
        className="flex justify-end items-center gap-3 px-3 py-2 border-b-2 border-solid border-black lg:hidden"
      >
        <p className="font-inter text-xl">On this page</p>
        {displayOnThisPage ? (
          <img className="max-h-4" src={rightArrow} alt="rightArrow" />
        ) : (
          <img className="max-h-4" src={downArrow} alt="downArrow" />
        )}
      </div>
      <div>{displayContent(CONTENT[0].content)}</div>
    </div>
  );
}

export default DocumentationPage;
