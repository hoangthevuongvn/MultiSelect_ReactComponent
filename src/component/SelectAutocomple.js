import React, { Component } from "react";
import Select from "react-select";
//import { colourOptions } from "../data";
class SelectAuto extends Select {
  constructor(props) {
    super(props);
    console.log(this.props.isMultis);
    this.state = [
      { value: "0", label: "Chocolate" },
      { value: "1", label: "Strawberry" },
      { value: "2", label: "Vanilla" },
    ];
  }
  /*const mau = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]; */
  render() {
    return (
      <div>
        <Select
          defaultValue={this.state[0]}
          isMulti={this.props.isMultis}
          name="colors"
          options={this.state}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    );
  }
}

export default SelectAuto;

//const MyComponent = () => <Select options={options} />;

//export default MyComponent;
