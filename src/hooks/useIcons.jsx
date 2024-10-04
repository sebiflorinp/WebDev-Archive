import ReactIcon from "../assets/react.png";

function useIcons() {
  function getIcon(iconName) {
    switch (iconName) {
      case "react":
        return ReactIcon;
    }
  }
  return {
    getIcon,
  };
}

export default useIcons;
