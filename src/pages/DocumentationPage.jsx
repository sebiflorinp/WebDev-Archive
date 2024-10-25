import useContent from "../hooks/useContent.jsx";
import { useLocation } from "react-router-dom";
import CONTENT from "../CONTENT.json";
import { Link as RSLink } from "react-scroll";

function DocumentationPage() {
  const { displayContent } = useContent();
  const location = useLocation();
  const contentToDisplay = CONTENT.filter((contentItem) => {
    return contentItem.route === location.pathname;
  });
  const { getAllSections } = useContent();
  return (
    <div className="pt-32 lg:pt-0 lg:grid lg:grid-cols-7 lg:col-start-3 lg:col-span-6">
      <div className="lg:col-start-1 lg:col-span-5">
        {displayContent(contentToDisplay[0].content)}
      </div>
      <div className="hidden lg:flex lg:fixed lg:right-0 lg:pr-36 lg:pt-36 lg:flex-col lg:items-center lg:col-start-6 lg:col-span-2">
        <div>
          <p className="font-inter text-3xl pb-3">On this page</p>
          {getAllSections(location).map((section, index) => (
            <RSLink to={section} offset={index === 0 ? -200 : 0} key={section}>
              <p className="font-inter text-xl max-w-36 p-0.5">{section}</p>
            </RSLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocumentationPage;
