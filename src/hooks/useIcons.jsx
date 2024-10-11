import ReactIcon from "../assets/react.png";
import DotnetIcon from "../assets/dotnet.png";

function useIcons() {
  function getIcon(iconName) {
    switch (iconName) {
      case "react":
        return ReactIcon;
      case "dotnet":
        return DotnetIcon;
    }
  }
  return {
    getIcon,
  };
}

export default useIcons;
