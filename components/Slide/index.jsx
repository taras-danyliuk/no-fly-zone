import React from "react";
import { Wrapper, Hashtag } from "./slide.styles";
import { HR } from "../../styles/shared.styles";

export const Slide = ({ hideHashtag, noPadding, justify, children }) => {
  return (
    <Wrapper noPadding={noPadding} justify={justify}>
      {!hideHashtag && (
        <>
          <Hashtag>
            <h2>#NoFlyZone</h2>
          </Hashtag>
          <HR />
        </>
      )}
      {children}
    </Wrapper>
  );
};
