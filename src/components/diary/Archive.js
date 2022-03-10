import { useEffect, useState } from "react";
import { fetchRequestAllJournalEntries } from "../../utils";

export const Archive = ({ user, stylesheet }) => {
  const [entries, setEntries] = useState(false);
  if (entries === false) {
    fetchRequestAllJournalEntries(user.username, setEntries);
  }
  console.log(entries);

  return (
    <div style={stylesheet.page}>
      <h1>Archive</h1>
      {entries
        ? entries.map((entry) => {
            console.log(entry);
          })
        : ""}
    </div>
  );
};
