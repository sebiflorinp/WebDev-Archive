function useDepth(depth) {
  let properties = {
    textSize: "",
    arrowSize: "",
    rightPadding: "",
    leftPadding: "",
  };
  switch (depth) {
    case 1:
      properties.textSize = "text-4xl";
      properties.arrowSize = "h-8";
      properties.rightPadding = "pr-0 pt-2";
      properties.leftPadding = "pl-0";
      break;
    case 2:
      properties.textSize = "text-3xl";
      properties.arrowSize = "h-6";
      properties.rightPadding = "pr-1";
      properties.leftPadding = "pl-12";
      break;
    case 3:
      properties.textSize = "text-2xl";
      properties.arrowSize = "h-4";
      properties.leftPadding = "pl-20";
      break;
  }

  return {
    properties,
  };
}

export default useDepth;
