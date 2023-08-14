import * as React from "react";
import { NewBeerProps } from "../screens/myBeers";

export const MyBeersContext = React.createContext<any>(null);

export const MyBeersDispatchContext = React.createContext<any>(null);

function myBeersReducer(
  myBeers: any,
  action: { type: "add" | "remove"; beer: NewBeerProps },
) {
  switch (action.type) {
    case "add":
      console.log("====Action Beer====", action);
      return [...myBeers, action.beer];
    case "remove":
      // can be utilized to remove beer
      return true;
    default:
      throw new Error("Unhandled action " + action.type);
  }
}

export function MyBeersProvider({ children }: { children: React.ReactNode }) {
  const [myBeers, dispatch] = React.useReducer<any>(myBeersReducer, []);

  return (
    <MyBeersContext.Provider value={myBeers}>
      <MyBeersDispatchContext.Provider value={dispatch}>
        {children}
      </MyBeersDispatchContext.Provider>
    </MyBeersContext.Provider>
  );
}
