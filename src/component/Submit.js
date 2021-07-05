import React from "react";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: 0 };
  }

  render() {
    return (
      <div>
        First name: <input type="text" name="fname"></input>
        <input
          type="button"
          onClick={() => {
            this.setState({ item: 3 });
          }}
        >
          Submit
        </input>
      </div>
    );
  }
}

export default Submit;
