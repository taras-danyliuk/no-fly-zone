import React from "react";
import { Wrapper, Hashtag, HR } from "./slide.styles";

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
