const logo = require("../images/logo/dirty-text300px.png");

export const Navigation = ({ setPage }) => {
  const locations = {
    Dashboard: "dashboard",
    Diary: "diary",
    "User Settings": "settings",
  };
  return (
    <div id="navigation">
      <img src={logo} />
      {Object.keys(locations).map((key) => {
        return (
          <button
            className="navLink"
            onClick={() => {
              setPage(locations[key]);
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
