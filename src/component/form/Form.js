import React from "react";
class Form extends React.Component {
  render() {
    return (
      <div class="form-group">
        <label for="sel1">Select list (select one):</label>
        <select class="form-control" id="sel1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <br />
        <textarea rows="4" cols="50" autofocus></textarea>
        <br />
        <label for="sel2">
          Mutiple select list (hold shift to select more than one):
        </label>
        <select multiple class="form-control" id="sel2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    );
  }
}
export default Form;
