import { useState } from "react";
import { Login } from "./LogIn";
import { SignUp } from "./Signup";

export const Entrance = ({ setPage, setUser }) => {
  //states
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <div id="entrance" className="page">
      <h1>ENTRANCE</h1>
      <Login
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setUser={setUser}
      />
      <SignUp
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setUser={setUser}
        setPage={setPage}
      />
    </div>
  );
};
