export const fetchRequestSignUp = async (
  setUser,
  username,
  email,
  password
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

export const submitSignUpHandler = (e, setUser, username, email, password) => {
  e.preventDefault();
  fetchRequestSignUp(setUser, username, email, password);
};

export const submitLogInHandler = (e, setUser, username, password) => {
  e.preventDefault();
  fetchRequestLogIn(setUser, username, password);
};

export const fetchRequestAddJournalEntry = async (journalObj) => {
  console.log("fetch request recieves:", journalObj);
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}journal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: journalObj,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
