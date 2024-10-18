import useContent from "../hooks/useContent.jsx";
import { useLocation } from "react-router-dom";
import CONTENT from "../CONTENT.json";

function DocumentationPage() {
  const { displayContent } = useContent();
  const location = useLocation();
  const contentToDisplay = CONTENT.filter((contentItem) => {
    return contentItem.route === location.pathname;
  });
  return (
    <div id="docs" className="pt-32 lg:pt-0 lg:col-start-3 lg:col-span-6">
      {displayContent(contentToDisplay[0].content)}
    </div>
  );
}

export default DocumentationPage;
