import React, { Component } from "react";
import { Server } from "net";

class InlineStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      mang: [],
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
    this.setState({
      mang: this.state.mang.push(e.target.value),
    });
    console.log(this.state.mang);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="N/A">N/A</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>Selected value is : {this.state.selectValue}</div>
        </div>
        <textarea rows="2" cols="50" autofocus>
          {this.state.selectValue}
        </textarea>
      </div>
    );
  }
}
export default InlineStyle;
