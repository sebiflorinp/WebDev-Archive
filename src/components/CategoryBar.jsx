import useIcons from "../hooks/useIcons.jsx";
import { useContext, useState } from "react";
import activeArrowDropped from "../assets/down-arrow-black.png";
import inactiveArrowNotDropped from "../assets/up-arrow-gray.png";
import activeUpArrow from "../assets/active-up-arrow.png";
import inactiveUpArrow from "../assets/inactive-up-arrow.png";

import useDepth from "../hooks/useDepth.jsx";
import { Link, useLocation } from "react-router-dom";
import { AppStateContext } from "../contexts/AppStateContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      className="flex flex-col gap-2"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div
        onClick={handleClick}
        className={`flex justify-between items-center font-inter ${properties.rightPadding} ${properties.leftPadding}`}
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
          <div className="inline relative">
            <motion.img
              className={`${properties.arrowSize} `}
              src={inactiveUpArrow}
              animate={{ opacity: active ? 0 : 1, rotate: active ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.img
              className={`${properties.arrowSize} absolute top-0 right-0`}
              src={activeUpArrow}
              animate={{ opacity: active ? 1 : 0, rotate: active ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            />
          </div>
        ) : null}
      </div>
      <AnimatePresence>
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
      </AnimatePresence>
      <div className="hidden">
        <p className="text-4xl h-8 pr-0 pl-0"></p>
        <p className="text-3xl h-6 pr-1 pl-12"></p>
        <p className="text-2xl h-4 pl-20"></p>
      </div>
    </motion.div>
  );
}

export default CategoryBar;
