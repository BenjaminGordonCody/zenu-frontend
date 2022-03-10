export const fetchRequestSignUp = async (
  setUser,
  username,
  email,
  password,
  setPage
) => {
  console.log(`${process.env.REACT_APP_REST_API}user`);
  try {
    const taskTally = "{}";
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        taskTally,
      }),
    });
    const data = await response.json();
    setUser(data.user);
    setPage("wellplan");
  } catch (error) {
    console.log(error);
  }
};

export const fetchRequestLogIn = async (setUser, username, password) => {
  console.log(username, password);
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUser(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchRequestDeleteUser = async (user, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user.username }),
    });
    console.log(response);
    const data = await response.json();
    if (data.deleteCount > 0) {
      setUser(false);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchRequestUpdateTaskTally = async (
  username,
  newTaskTally,
  setUser
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}tally`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, newTaskTally }),
    });
    const data = await response.json();
    console.log("sent to set User", data.updatedUser);
    setUser(data.updatedUser);
  } catch (error) {
    console.log("fetchRequestUpdateTaskTally", error.message);
  }
};
export const submitSignUpHandler = (
  e,
  setUser,
  username,
  email,
  password,
  setPage
) => {
  e.preventDefault();
  fetchRequestSignUp(setUser, username, email, password, setPage);
};

export const submitLogInHandler = (e, setUser, username, password) => {
  e.preventDefault();
  console.log(username, password, "submit log in handler");
  fetchRequestLogIn(setUser, username, password);
};

export const fetchRequestAddJournalEntry = async (journalObj) => {
  console.log("fetch request recieves:", journalObj);
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}journal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ journalObj }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchRequestAllJournalEntries = async (username, setEntries) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}getPosts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    console.log(data.posts);
    setEntries(data.posts);
  } catch (error) {
    console.log(error);
  }
};
