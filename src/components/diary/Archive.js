import { useEffect, useState } from "react";
import { fetchRequestAllJournalEntries } from "../../utils";
import { Entry } from "./Entry";

export const Archive = ({ user, stylesheet }) => {
  const [entries, setEntries] = useState(false);
  if (entries === false) {
    fetchRequestAllJournalEntries(user.username, setEntries);
  }
  console.log(entries);

  return (
    <div style={stylesheet.page}>
      <h1>Archive</h1>
      <div id="entries">
        {entries
          ? entries.map((entry) => {
              return <Entry post={entry} />;
            })
          : ""}
      </div>
    </div>
  );
};
