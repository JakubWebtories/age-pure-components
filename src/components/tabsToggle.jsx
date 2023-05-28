import { useState, useRef, useEffect } from "react";

export const TabsToggle = () => {
  const divRefs = useRef([]);

  useEffect(() => {
    const divElements = document.querySelectorAll(".tab-toggle");
    divRefs.current = Array.from(divElements);

    const handleTab = (index) => {
      console.log("Clicked on element with index:", index);

      divRefs.current.forEach((item, i) => {
        if (i === index) {
          item.classList.remove("hidden-content");
        } else {
          item.classList.add("hidden-content");
        }
      });
    };

    divRefs.current.forEach((item, index) => {
      item.addEventListener("click", () => handleTab(index));
    });
  }, []);

  return (
    <div className="tabs-toggle-container">
      <button>Items</button>
      <div className="tab-toggle">
        <h3>1 / Vyčištění až 3 dny</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad,
          praesentium quisquam dicta itaque recusandae dolorum officiis
          cupiditate sint alias provident a cumque. Est ducimus et beatae, minus
          quidem fugit.
        </p>
      </div>
      <div className="tab-toggle hidden-content">
        <h3>2 / Chrání antireflexní vrstvu</h3>
        <p className="display-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad,
          praesentium quisquam dicta itaque recusandae dolorum officiis
          cupiditate sint alias provident a cumque. Est ducimus et beatae, minus
          quidem fugit.
        </p>
      </div>
      <div className="tab-toggle hidden-content">
        <h3>3 / Zarovná drobné oděrky / rýhy</h3>
        <p className="display-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad,
          praesentium quisquam dicta itaque recusandae dolorum officiis
          cupiditate sint alias provident a cumque. Est ducimus et beatae, minus
          quidem fugit.
        </p>
      </div>
    </div>
  );
};
