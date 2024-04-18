import { matchPath, useLocation } from "react-router-dom";

const useMatch = (path, end = false) => {
  const { pathname } = useLocation();

  if (Array.isArray(path)) {
    return path.find(pathPattern => matchPath({ path: pathPattern, end }, pathname));
  } else {
    return matchPath({ path, end }, pathname);
  }
};

export default useMatch;
