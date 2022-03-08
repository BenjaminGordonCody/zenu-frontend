export const Settings = ({ setUser }) => {
  return (
    <div className="page" id="settings">
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
