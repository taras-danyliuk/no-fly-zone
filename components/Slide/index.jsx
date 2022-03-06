import React from "react";
import { CardContainer, Card, CardRow } from "../Card";
import { PieChart } from "../Charts/pie";
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
