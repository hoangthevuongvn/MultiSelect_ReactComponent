import React, { useState } from "react";

function Select() {
  var children = [];
  const [selectValue, setSelectValue] = useState(children);

  function userExists(name) {
    return selectValue.some(function (el) {
      return el.name === name;
    });
  }
  var handleChange = (e) => {
    if (userExists(e.target.value) === false) {
      setSelectValue((children) => [
        ...children,
        { key: e.target.options.selectedIndex, name: e.target.value },
      ]);
    }
    console.log(e.target.options.selectedIndex);
  };
  const delButton = (even) => {
    console.log("key", even.target.id);
    const updateValue = selectValue.filter(
      (selectValue) => selectValue.key != even.target.id
    );
    console.log("updateValue", updateValue);
    setSelectValue(updateValue);
    console.log("selectValue", selectValue);
  };
  return (
    <div>
      <select multiple={false} onChange={handleChange}>
        <option value="N/A">N/A</option>
        <option value="Vang">Vang</option>
        <option value="Do">Do</option>
        <option value="Cam">Cam</option>
        <option value="Xanh">Xanh</option>
      </select>
      <div id="show">
        {selectValue.map((val) => {
          return (
            <span id={val.key} key={val.key}>
              <button className={val.key}>{val.name}</button>
              <button id={val.key} name={val.name} onClick={delButton}>
                x
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
//onClick={delButton(index)}
export default Select;
