import { Input } from "./Input";
import { submitLogInHandler } from "../utils";

export const Login = ({
  setUser,
  setUsername,
  username,
  password,
  setPassword,
}) => {
  try {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(username, password, "login");
          submitLogInHandler(e, setUser, username, password);
        }}
      >
        <h1>Log In!</h1>
        Username:
        <Input setter={setUsername} />
        Password:
        <Input setter={setPassword} />
        <button type="submit">Log in</button>
      </form>
    );
  } catch (e) {
    console.log(e.message);
  }
};
