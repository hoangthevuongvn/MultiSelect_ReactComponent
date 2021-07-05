import React from "react";
/*
class Welcome extends React.Component {
    console.log(this.props.name); 
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
*/

function Welcome(props) {
  console.log(props);
  return <h1>Hello {props.name}</h1>;
}

//const element = <Welcome name="Vuong" />;
export default Welcome;
