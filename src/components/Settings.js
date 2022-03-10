import './WellPlan.css'

export const Settings = ({ setUser, stylesheet }) => {
  return (
    <div style={stylesheet.page}>
      <h1>User Settings</h1>
      <button
        onClick={() => {
          setUser(false);
          console.log("logout pressed");
        }}
      >
        Log Out
      </button>
      <button
        onClick={() => {
          console.log("user deletes account");
        }}
      >
        Delete Account
      </button>
    </div>
  );
};
