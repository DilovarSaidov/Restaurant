import React from "react";
import './Loader.css'

export const Loader = () => {
  return (
    <div className="sdwa">
      <div className="imgContainer">
        <img
          className="wave"
          src="https://i.pinimg.com/originals/64/91/54/6491542a239217a7d44bfba368cd06c8.png"
          alt=""
        />
        <img
          className="bottle"
          src="https://i.pinimg.com/originals/67/19/71/6719713708a3a22081b18e9a520c85e8.png"
          alt=""
        />
        <img
          className="wave delay"
          src="https://i.pinimg.com/originals/64/91/54/6491542a239217a7d44bfba368cd06c8.png"
          alt=""
        />
        <img
          className="wave delay"
          src="https://i.pinimg.com/originals/64/91/54/6491542a239217a7d44bfba368cd06c8.png"
          alt=""
        />
      </div>
      <h1 className="h1">Loading...</h1>
    </div>
  );
};
