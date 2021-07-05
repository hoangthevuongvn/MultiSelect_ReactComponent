function UserGreeting(props) {
  return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please Sign Up</h1>;
}

function Condition(props) {
  if (props.isLogin) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
export default Condition;
