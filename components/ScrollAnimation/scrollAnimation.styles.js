import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";


export const ParallaxBlock = styled(Parallax) `
  position: absolute;
  top: 100vh;
  width: 20px;
  height: 3px;
  background-color: red;
  left: 0;
  margin-top: -3px;
`

export const Building = styled.div `
  position: fixed;
  bottom: 50px;
  height: 80px;
  width: 150px;
  background-color: pink;
  z-index: 110;
  display: ${props => props.visible ? "block" : "none"};
  ${props => {
    if (props.position === "left") return { left: 0 }
    if (props.position === "center") return { left: "50%", transform: "translateX(-50%)" }
    if (props.position === "right") return { right: 0 }
  }};
`

export const Rocket = styled.div `
  position: fixed;
  width: 40px;
  height: 150px;
  border-radius: 20px;
  background-color: black;
  margin-top: -170px;
  top: 0;
  z-index: 100;
  display: ${props => props.visible ? "block" : "none"};
  ${props => {
    if (props.position === "left") return { left: "40px" }
    if (props.position === "center") return { left: "50%", transform: "translateX(-50%)" }
    if (props.position === "right") return { right: "40px" }
  }};
`
