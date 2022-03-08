import "./App.css";
import { useState } from "react";
import { Entrance } from "./components/Entrance";
import { Welcome } from "./components/Welcome";
import { Dashboard } from "./components/Dashboard";
import DiaryForm from "./components/diary/DiaryForm";
import { Navigation } from "./components/Navigation";
import { Settings } from "./components/Settings";
import logo from "./images/logo/icon.png";

function App() {
  //states
  const [page, setPage] = useState("welcome");
  const [user, setUser] = useState(false);
  const [theme, setTheme] = useState("jungle");

  //based on what page variable is, the main App component loads other pages
  // as sub-components. Each page recieves "setPage" as a prop so that
  // navigation will work.
  let returnedPage = undefined;

  if (!user.hasOwnProperty("username")) {
    return <Entrance page={setPage} user={user} setUser={setUser} />;
  } else if (page === "welcome") {
    returnedPage = <Welcome setPage={setPage} user={user} />;
  } else if (page === "dashboard") {
    returnedPage = (
      <Dashboard setPage={setPage} user={user} setUser={setUser} />
    );
  } else if (page === "diary") {
    returnedPage = <DiaryForm setPage={setPage} user={user} />;
  } else if (page === "settings") {
    returnedPage = <Settings setPage={setPage} user={user} setUser={setUser} />;
  } else {
    returnedPage = <div> There has been an error with page routing</div>;
  }

  return (
    <div id="AppContainer">
      <Navigation setPage={setPage} />
      {returnedPage}
    </div>
  );
}

export default App;
