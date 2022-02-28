import { Input } from "./Input";
import { submitSignUpHandler } from "../utils";

export const SignUp = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  setUser,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitSignUpHandler(e, setUser, username, email, password);
      }}
    >
      <h1>Sign up!</h1>
      Username:
      <Input setter={setUsername} />
      Email:
      <Input setter={setEmail} />
      Password:
      <Input setter={setPassword} />
      <button type="submit">sign up</button>
    </form>
  );
};
