import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div`
  flex: 1;
  display: flex;
`;
