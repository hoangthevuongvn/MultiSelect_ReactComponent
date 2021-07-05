// import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
// //import Button from "component/button/Button";
// import Button from "./component/button/Button";
// import Form from "./component/form/Form";
// import Condition from "./condition.js";
// import Welcome from "./component/Props";
// import State from "./component/State";
// import Submit from "./component/Submit";
// //import InlineStyle from "./component/Select";
// import MyComponent from "./component/SelectAutocomple";
//import SelectAuto from "./component/SelectAutocomple";
// import Onchange from "./component/OnChange";
// import Example from "./component/functionComponent/hookState";
import Select from "./component/functionComponent/Select";
// import UsdVnd from "./component/functionComponent/converUSDVND";
// import VndUsd from "./component/functionComponent/converUSDVND";
import React, { useState } from "react";
//import { Button } from "bootstrap";
/* Props
function App() {
  
  return <Welcome name="Vuong" />;
}
*/
//return <Condition isLogin={true   } />; //Condition

// function App() {
//   const [mes1, setMes1] = useState();
//   const [mes2, setMes2] = useState();
//   console.log(mes1);

//   function Backs(data, data2) {
//     //console.log(data);
//     setMes1(data);
//     setMes2(data2);
//     console.log(data);
//     console.log(data2);
//   }

//   // function Backs2(data2) {
//   //   return setMes2(data2);
//   // }

//   //console.log(mes1);
//   return (
//     <div>
//       <UsdVnd ParentCallback={Backs} value={mes1} />
//       <VndUsd ParentCallback={Backs} value={mes1 * 23} />
//     </div>
//   );
// }
function App() {
  //return <SelectAuto isMultis={true} />;
  return <Select />;
}
export default App;
