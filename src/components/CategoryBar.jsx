import useIcons from "../hooks/useIcons.jsx";
import { useContext, useState } from "react";
import activeArrowDropped from "../assets/down-arrow-black.png";
import inactiveArrowNotDropped from "../assets/up-arrow-gray.png";
import useDepth from "../hooks/useDepth.jsx";
import { Link, useLocation } from "react-router-dom";
import { AppStateContext } from "../contexts/AppStateContext.jsx";

function CategoryBar({ category, depth }) {
  const { setIsDropDownOpened } = useContext(AppStateContext);
  const { getIcon } = useIcons();
  const activeLocation = useLocation().pathname;
  const { properties } = useDepth(depth);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={handleClick}
        className={`flex justify-between items-center ${properties.rightPadding} ${properties.leftPadding}`}
      >
        {category.type === "category" ? (
          <div className="flex justify-center items-center gap-2">
            {category.icon !== "" && (
              <img
                className="h-10"
                src={getIcon(category.icon)}
                alt={category.icon + "icon"}
              />
            )}
            <p
              className={`${properties.textSize} ${active ? "text-black" : "text-gray-400"}`}
            >
              {category.title}
            </p>
          </div>
        ) : (
          <Link onClick={() => setIsDropDownOpened(false)} to={category.path}>
            <div className="flex justify-center items-center gap-2">
              <p
                className={`${properties.textSize} ${activeLocation === category.path ? "text-black" : "text-gray-400"} max-w-60`}
              >
                {category.title}
              </p>
            </div>
          </Link>
        )}
        {category.type === "category" ? (
          <div>
            {active ? (
              <img
                className={`${properties.arrowSize}`}
                src={activeArrowDropped}
                alt="active-arrow"
              />
            ) : (
              <img
                className={`${properties.arrowSize}`}
                src={inactiveArrowNotDropped}
                alt="inactive-arrow"
              />
            )}
          </div>
        ) : null}
      </div>
      {category.content !== undefined &&
        category.content.length > 0 &&
        active &&
        category.content.map((category) => {
          return (
            <CategoryBar
              key={category.title}
              category={category}
              depth={depth + 1}
            />
          );
        })}
      <div className="hidden">
        <p className="text-4xl h-8 pr-0 pl-0"></p>
        <p className="text-3xl h-6 pr-1 pl-12"></p>
        <p className="text-2xl h-4 pl-20"></p>
      </div>
    </div>
  );
}

export default CategoryBar;
