import React from "react";

const SideBar = (props) => {
  const { handleShowModel, data } = props;
  return (
    <div className="sideBar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data.explanation}</p>
        </div>
        <button onClick={handleShowModel}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
