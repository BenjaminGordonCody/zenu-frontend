import { fetchRequestDeleteUser } from "../utils";

export const Settings = ({ setUser, stylesheet, user }) => {

  return (
    <div style={stylesheet.page}>
      <h1>User Settings</h1>
      <button
        onClick={() => {
          setUser(false);
          console.log('logout pressed');
        }}
      >
        Log Out
      </button>
      <button onClick={() => {
        setUser(false);
        fetchRequestDeleteUser(user);
        console.log("deleted account", user)
      }}
      >
        Delete Account
      </button>
    </div>
  );
};
