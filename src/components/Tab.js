import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default () => {
  const [tabs, setTabs] = useState([
    {
      title: "Tab 1",
      content: "content"
    }
  ]);
  return (
    <Tabs>
      <TabList>
        {tabs.map(({ title }) => (
          <Tab>
            {title}{" "}
            <button
              onClick={() => {
                console.log("close");
              }}
            >
              +
            </button>
          </Tab>
        ))}
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
      </TabList>

      {tabs.map(({ content }) => (
        <TabPanel>
          <h2>{content}</h2>
        </TabPanel>
      ))}
    </Tabs>
  );
};
