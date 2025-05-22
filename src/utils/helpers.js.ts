import { useLocation } from "react-router-dom";

export const isUrlMatch = (url: string) => {
  const location = useLocation();

  if(location.pathname === url) return true;

  return false;
}