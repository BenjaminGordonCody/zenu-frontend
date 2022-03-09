import { useState } from "react";
import { fetchRequestAllJournalEntries } from "../../utils";

export const Archive = ({ user, stylesheet }) => {
  const [entries, setEntries] = useState(
    fetchRequestAllJournalEntries(user.username)
  ); //this loops forever, change it to use useEffect

  return (
    <div style={stylesheet.page}>
      <h1>Archive</h1>
    </div>
  );
};
