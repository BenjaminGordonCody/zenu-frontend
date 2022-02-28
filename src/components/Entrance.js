import { useState } from "react";
import { Login } from "./LogIn";
import { SignUp } from "./Signup";

export const Entrance = ({ setPage, user, setUser }) => {
  //states
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <div id="entrance" className="page">
      <h1>ENTRANCE</h1>
      <Login
        props={(username, setUsername, password, setPassword, user, setUser)}
      />
      <SignUp
        props={(email, setEmail, username, setUsername, password, setPassword)}
      />
    </div>
  );
};
