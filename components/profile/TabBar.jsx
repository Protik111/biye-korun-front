import React, { useState, useRef, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
const TabBar = ({
  tabs,
  initialTab,
  icons,
  activeIcons,
  onTabChange,
  padding_value = "",
}) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabScrollRef = useRef(null);

  //   useEffect(() => {
  //     updateScrollArrows();
  //   }, [tabs]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log("tabClick", tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const scrollTabs = (scrollOffset) => {
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setActiveTab(pathname.replace(/^\/+/, ""));
  }, [activeTab]);

  const renderedTabs = useMemo(() => {
    return tabs.map((tab, index) => (
      <div
        key={index}
        className={`tab ${
          activeTab === tab ? "active" : ""
        } flex flex-gap-10 aligin-center`}
        onClick={() => handleTabClick(tab)}
      >
        {icons && activeIcons && icons[index] && activeIcons[index] && (
          <span className="tab-icon">
            <img
              src={activeTab === tab ? activeIcons[index] : icons[index]}
              alt={`Icon for ${tab}`}
            />
          </span>
        )}

        <span>{tab}</span>
      </div>
    ));
  });
  return (
    <div className="tab-bar" style={{ padding: padding_value }}>
      {/* {showLeftArrow && (
        <button className="scroll-button left" onClick={() => scrollTabs(-200)}>
          &lt;
        </button>
      )} */}
      <div className="tab-scroll" ref={tabScrollRef}>
        {renderedTabs}
      </div>
      {/* {showRightArrow && (
        <button className="scroll-button right" onClick={() => scrollTabs(200)}>
          &gt;
        </button>
      )} */}
    </div>
  );
};

export default TabBar;
