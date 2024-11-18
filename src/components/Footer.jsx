import React from "react";

const Footer = (props) => {
  const {handleShowModel, data} = props
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data.title}</h2>
      </div>
      <button onClick={handleShowModel}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
