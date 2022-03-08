import { notDependencies } from "mathjs";
import backgroundImage from "../images/jungle.jpg";
import navigatorBackground from "../images/navigationBackgroundWhite.png";
const logo = require("../images/logo/greytexture1k.png");

const text = "darkGreen";
const background = "white";
const transparentBackground = "rgba(255,255,255,0.9";
const almostClearBackground = "rgba(255,255,255,0.2";

export const junglestyle = {
  logo: {
    src: logo,
    style: { height: "30vh" },
  },
  app: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    padding: "25px",
    color: "darkGreen",
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "0px",
    bottom: "0px",
  },
  page: {
    position: "relative",
    top: "40vh",
    backgroundColor: transparentBackground,
    zIndex: "1",
    margin: "5vw",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    paddingTop: "2vw",
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
      fontSize: "150%",
      height: "15vh",
      margin: "5vw",
      backgroundColor: transparentBackground,
      border: "none",
      fontFamily: '"Sofia",sans-serif',
    },
  },
};
