export const Navigation = ({ setPage, stylesheet }) => {
  const locations = {
    "Task Picker": "wellplan",
    Dashboard: "dashboard",
    Diary: "diary",
    Archive: "archive",
    "User Settings": "settings",
  };
  console.log(stylesheet.navigation);
  return (
    <div id="navigation" style={stylesheet.navigation}>
      <img src={stylesheet.logo.src} style={stylesheet.logo.style} />
      {Object.keys(locations).map((key) => {
        return (
          <button
            style={stylesheet.navigation.link}
            onClick={() => {
              console.log(key);
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
