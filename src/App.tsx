import * as React from "react";

import Tabs from "./components/ui/tabs";
import AllBeers from "./screens/allBeers";
import MyBeers from "./screens/myBeers";

const tabs = [
  { name: "All Beers", key: "all-beers" },
  { name: "My Beers", key: "my-beers" },
];

export default function App() {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0].key);

  console.log("===Selected tab===", selectedTab);

  return (
    <div className='mx-4 sm:mx-auto max-w-7xl sm:px-6 lg:px-8 pb-5'>
      <Tabs
        tabItems={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
      {selectedTab === "all-beers" && <AllBeers />}
      {selectedTab === "my-beers" && <MyBeers />}
    </div>
  );
}
