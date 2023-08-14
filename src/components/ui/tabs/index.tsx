import { classNames } from "../../../utils";

export interface TabItemProps {
  name: string;
  key: string;
}

interface TabProps {
  tabItems: TabItemProps[];
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

export default function Tabs({ tabItems, selectedTab, onSelectTab }: TabProps) {
  return (
    <div className='mb-4'>
      <div className='sm:hidden my-5'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        <select
          id='tabs'
          name='tabs'
          className='block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          defaultValue={
            tabItems.find((tab: TabItemProps) => tab.key === selectedTab)?.key
          }
          onChange={(e) => onSelectTab(e.target.value)}
        >
          {tabItems.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
            {tabItems.map((tab) => (
              <button
                key={tab.name}
                onClick={() => onSelectTab(tab.key)}
                className={classNames(
                  tab.key === selectedTab
                    ? "border-primary text-primary/80"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold ring-0",
                )}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
