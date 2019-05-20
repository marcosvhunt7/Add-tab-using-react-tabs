import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classnames from "classnames";
import "./Tab.css";

export default () => {
  const [tabs, setTabs] = useState([
    {
      title: "Tab 1",
      content: "content"
    }
  ]);
  return (
    <Tabs
      disabledTabClassName=""
      className="Tabs"
      selectedTabClassName="Selected"
      selectedTabPanelClassName=""
    >
      <TabList className={classnames("TabList", "group")}>
        {tabs.map(({ title }) => (
          <Tab
            key={title}
            className=""
            disabledClassName=""
            selectedClassName=""
          >
            <div>
              <span>{title}</span>
              <button
                onClick={() => {
                  console.log("close");
                }}
              >
                x
              </button>
            </div>
          </Tab>
        ))}
        <div>
          <button
            onClick={() => {
              if (tabs.length <= 1) {
                setTabs([
                  ...tabs,
                  {
                    title: "Tab 2",
                    content: "content 2"
                  }
                ]);
              }
            }}
          >
            +
          </button>
        </div>
      </TabList>

      {tabs.map(({ content }) => (
        <TabPanel key={content}>
          <span>{content}</span>
        </TabPanel>
      ))}
    </Tabs>
  );
};
