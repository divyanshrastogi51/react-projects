import React from "react";
import img from "../src/loader.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h1>loading...</h1>
      <img src={img} alt={"img"} />
    </div>
  );
};

export default Loading;
