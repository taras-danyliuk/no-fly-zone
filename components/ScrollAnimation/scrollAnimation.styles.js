import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import BombIcon from "../Icons/BombIcon";
import BuildingIcon from "../Icons/BuildingIcon";


export const ParallaxBlock = styled(Parallax) `
  position: absolute;
  top: 100vh;
  width: 20px;
  height: 3px;
  background-color: red;
  left: 0;
  margin-top: -3px;
`

export const Building = styled(BuildingIcon) `
  position: ${props => props.visible ? "fixed" : "absolute"};
  top: ${props => props.visible ? "calc(100vh - 150px)" : "calc(200vh - 150px)"};
  width: 150px;
  z-index: 110;
  ${props => {
    if (props.position === "left") return { left: "30px" }
    if (props.position === "center") return { left: "50%", transform: "translateX(-50%)" }
    if (props.position === "right") return { right: "30px" }
  }};
`

export const Rocket = styled(BombIcon) `
  position: fixed;
  height: 160px;
  margin-top: -170px;
  top: 0;
  z-index: 100;
  display: ${props => props.visible ? "block" : "none"};
  ${props => {
    if (props.position === "left") return { left: 0 }
    if (props.position === "center") return { left: "50%", transform: "translateX(-50%)" }
    if (props.position === "right") return { right: 0 }
  }};
`
