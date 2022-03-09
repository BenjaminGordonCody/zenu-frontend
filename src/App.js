//components
import { useState } from "react";
import { Entrance } from "./components/Entrance";
import { Welcome } from "./components/Welcome";
import { Dashboard } from "./components/Dashboard";
import DiaryForm from "./components/diary/DiaryForm";
import { Navigation } from "./components/Navigation";
import { Settings } from "./components/Settings";
import { WellnessPlan } from "./components/WellPlan";

//styles
import "./App.css";
import { Archive } from "./components/diary/Archive";
const { junglestyle: jungleStyle } = require("./styles/jungleStyle");
const { cityStyle } = require("./styles/cityStyle");

function App() {
  //states
  const [page, setPage] = useState("welcome");
  const [user, setUser] = useState(false);
  const [theme, setTheme] = useState("jungle");

  //based on what page variable is, the main App component loads other pages
  // as sub-components. Each page recieves "setPage" as a prop so that
  // navigation will work.
  let returnedPage = undefined;

  //switch for variable styling
  let stylesheet;

  switch (theme) {
    case "jungle":
      stylesheet = jungleStyle;
      break;
    case "city":
      stylesheet = cityStyle;
      break;
    default:
      break;
  }

  if (!user.hasOwnProperty("username")) {
    return <Entrance page={setPage} user={user} setUser={setUser} />;
  } else if (page === "wellplan") {
    returnedPage = (
      <WellnessPlan setPage={setPage} user={user} stylesheet={stylesheet} />
    );
  } else if (page === "welcome") {
    returnedPage = (
      <Welcome setPage={setPage} user={user} stylesheet={stylesheet} />
    );
  } else if (page === "dashboard") {
    returnedPage = (
      <Dashboard
        setPage={setPage}
        user={user}
        setUser={setUser}
        stylesheet={stylesheet}
      />
    );
  } else if (page === "diary") {
    returnedPage = (
      <DiaryForm setPage={setPage} user={user} stylesheet={stylesheet} />
    );
  } else if (page === "settings") {
    returnedPage = (
      <Settings
        setPage={setPage}
        user={user}
        setUser={setUser}
        stylesheet={stylesheet}
      />
    );
  } else if (page === "archive") {
    returnedPage = <Archive user={user} stylesheet={stylesheet} />;
  } else {
    returnedPage = <div> There has been an error with page routing</div>;
  }
  return (
    <div style={stylesheet.app}>
      <Navigation setPage={setPage} stylesheet={stylesheet} />
      {returnedPage}
    </div>
  );
}

export default App;
