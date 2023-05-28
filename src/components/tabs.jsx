import React, { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, event) => {
    setActiveTab(index);
    console.log(event);
  };

  const handleClickId = (e) => {
    console.log(e.target.id);
  };

  return (
    <div>
      <div className="tab-container">
        <button
          id="1"
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          // onClick={() => handleTabClick(0)}
          onClick={handleClickId}
        >
          Tab 1
        </button>
        <button
          id="2"
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          // onClick={() => handleTabClick(1)}
          onClick={handleClickId}
        >
          Tab 2
        </button>
        <button
          id="3"
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          // onClick={() => handleTabClick(2)}
          onClick={handleClickId}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <p>Content for Tab 1</p>}
        {activeTab === 1 && <p>Content for Tab 2</p>}
        {activeTab === 2 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};
