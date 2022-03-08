export const Navigation = ({ setPage }) => {
  const locations = {
    Dashboard: "dashboard",
    Diary: "diary",
    "User Settings": "settings",
  };
  return (
    <div id="Navigation">
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
