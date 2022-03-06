import React from "react";
import { Wrapper, Hashtag } from "./slide.styles";
import { HR } from "../../styles/shared.styles";

export const Slide = ({ children }) => {
  return (
    <Wrapper>
      <Hashtag>
        <h1>#NoFlyZone</h1>
      </Hashtag>
      <HR />
      {children}
    </Wrapper>
  );
};
