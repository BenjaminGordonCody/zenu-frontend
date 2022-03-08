import { notDependencies } from "mathjs";
import bckground from "../images/jungle.jpg";
import navigatorBackground from "../images/navigationBackgroundWhite.png";
const logo = require("../images/logo/greytexture1k.png");

const text = "darkGreen";
const background = "white";
const transparentBackground = "rgba(255,255,255,0.8";
export const junglestyle = {
  logo: {
    src: logo,
    style: { height: "30vh" },
  },
  app: {
    backgroundImage: `url(${bckground})`,
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
    border: "10px solid white",
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
    display: "flex",
    // border: "solid 3px red",
    link: {
      transform: "rotate(-25deg",
      color: text,
      fontSize: "200%",
      height: "15vh",
      margin: "5vh",
      backgroundColor: background,
      border: "none",
      fontFamily: '"Sofia",sans-serif',
    },
  },
};
