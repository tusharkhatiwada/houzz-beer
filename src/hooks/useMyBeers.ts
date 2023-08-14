import * as React from "react";
import { MyBeersContext } from "../context/myBeersContext";

export function useMyBeers() {
  return React.useContext(MyBeersContext);
}
