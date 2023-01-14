import React from "react";
import PageTitle from "../common/PageTitle";

const LayoutDemo = () => {
  const boxStyle = {
    width: "50px",
    height: "50px",
    border: "3px solid green",
    display: "inline-block",
    position: "static" as "static",
  };

  const thirdBoxStyle = {
    ...boxStyle,
    position: "relative" as "relative",
    // top: "-80px",
  };

  return (
    <div>
      <PageTitle title="Layout demo" />
      <div style={{ width: "100vw" }}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={thirdBoxStyle}>3</div>
        <div style={boxStyle}>4</div>
      </div>
    </div>
  );
};

export default LayoutDemo;
