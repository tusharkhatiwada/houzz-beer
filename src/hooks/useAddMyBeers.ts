import * as React from "react";
import { MyBeersDispatchContext } from "../context/myBeersContext";

export function useAddMyBeers() {
  return React.useContext(MyBeersDispatchContext);
}
