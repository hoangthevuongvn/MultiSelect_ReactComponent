import React, { useState } from "react";
//import Select from "react-select";
function UsdVnd(props) {
  const [Usds, setUsds] = useState(0);
  function sendDataU(Usds) {
    props.ParentCallback(Usds);
  }
  return (
    <input
      type="number"
      onChange={(e) => {
        //setUsds(e.target.value);
        sendDataU(e.target.value);
        //console.log(e.target.value);
      }}
      //value={Usds}
      value={props.value}
    />
  );
}
function VndUsd(props) {
  const [Vnds, setVnds] = useState(0);
  function sendDataV(Vnds) {
    props.ParentCallback2(Vnds);
  }
  return (
    <input
      type="number"
      //value={props.Usds * 23}
      onChange={(f) => {
        let v = f.target.value / 23;
        //setVnds(v);
        sendDataV(v);
      }}
      value={props.value * 23}
    />
  );
}

export default UsdVnd;
