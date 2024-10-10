import SIDEBARCONTENT from "../SIDEBAR.json";
import CategoryBar from "./CategoryBar.jsx";

function MobileMenuBar() {
  return (
    <div className="block lg:hidden w-screen px-5 pt-4">
      {SIDEBARCONTENT.map((category) => {
        return (
          <CategoryBar key={category.title} category={category} depth={1} />
        );
      })}
    </div>
  );
}

export default MobileMenuBar;
