import backgroundImage from "../images/jungle.jpg";
import navigatorBackground from "../images/navigationBackgroundWhite.png";
const logo = require("../images/logo/greytexture1k.png");

const text = "darkGreen";
const background = "white";
const transparentBackground = "rgba(255,255,255,0.9";
const almostClearBackground = "rgba(255,255,255,0.1";

export const junglestyle = {
  logo: {
    src: logo,
    style: { height: "20vh", padding: "15px" },
  },
  app: {
    height: "300vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    padding: "25px",
    color: "darkGreen",
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "0px",
    // bottom: "0px",
  },
  page: {
    position: "relative",
    top: "25vh",
    backgroundColor: transparentBackground,
    zIndex: "1",
    margin: "5vw",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    paddingTop: "2vw",
    borderRadius: "15px",
  },
  button: {
    margin: "15px",
    borderRadius: "3px",
  },
  navigation: {
    backgroundImage: `url(${navigatorBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom-left",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "multiply",
    height: "40vh",
    position: "fixed",
    left: "0px",
    right: "0px",
    top: "0px",
    zIndex: "2",
    display: "flex",
    alignItems: "start",
    // border: "solid 3px red",
    link: {
      transform: "rotate(-15deg",
      color: text,
      fontSize: "xxx-large",
      height: "15vh",
      margin: "15px",
      backgroundColor: almostClearBackground,
      border: "none",
      fontFamily: '"Sofia",sans-serif',
    },
  },
  dashboard: {
    selected: { backgroundColor: "darkGreen" },
    notSelected: { backgroundColor: "white" },
  },
};
