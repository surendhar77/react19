import React, { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleButtonColor = { backgroundColor: isOn ? "#4caf50" : "" };
  return (
    <>
    <h1 style={{color:"#000", textAlign :"center"}}>
    Toggle Switch
    <IoIosSwitch style={{color:"red", textAlign :"center"}}/>
    </h1>
    <div
      className="toggle-switch"
      style={toggleButtonColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
    </>
  );
};

export default ToggleSwitch;
