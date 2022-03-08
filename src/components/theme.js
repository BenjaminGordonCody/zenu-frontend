const Theme = () => {
  return (
    <button onClick={myFunction} >Dark mode</button>
  )
}

function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
export default Theme
