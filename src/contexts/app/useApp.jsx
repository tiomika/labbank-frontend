import { useContext } from "react";
import { appContext } from "./appContext";

export const useApp = () => {
  return useContext(appContext);
};
