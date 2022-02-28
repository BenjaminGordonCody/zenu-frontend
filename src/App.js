import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Entrance } from "./components/Entrance";

function App() {
  //states
  const [page, setPage] = useState("welcome");
  const [user, setUser] = useState(false);

  //based on what page variable is, the main App component loads other pages
  // as sub-components. Each page recieves "setPage" as a prop so that
  // navigation will work.

  if (!user) {
    return <Entrance page={setPage} user={user} setUser={setUser} />;
  } else if (page == "welcome") {
    return <div>welcome</div>;
  } else {
    return <div> There has been an error with page routing</div>;
  }
}

export default App;
