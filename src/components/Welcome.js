export const Welcome = ({ stylesheet }) => {
  return (
    <div className="welcome" style={stylesheet.page}>
      <h1> Welcome to Zenu!</h1>
      <h2>What would you like to do today?</h2>
      <div className="options">Would you like to write in your diary?</div>
    </div>
  );
};
