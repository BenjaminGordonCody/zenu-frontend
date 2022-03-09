import React, { useState } from "react";
import { fetchRequestAddJournalEntry } from "../../utils";
import "../../styles/diary.css";

export default function DiaryForm({ user, stylesheet }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    let itemObject = {
      title: title,
      date: new Date(date),
      text: text,
      username: user.username,
    };
    fetchRequestAddJournalEntry(itemObject);
    // addItem(itemObject)
    // setTitle("")
    // setDate("")
    // setText("")
  };

  return (
    <div style={stylesheet.page}>
      <form onSubmit={onSubmit}>
        <div className="diary-form">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Add a title for today..."
            className="diary-input"
          />
          <p>Chose a date</p>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="diary-date-input"
          />
        </div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Write about your day..."
          rows="10"
          className="diary-textarea"
        ></textarea>
        <button type="submit" className="diary-button">
          Save your diary
        </button>
      </form>
    </div>
  );
}
