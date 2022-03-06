import styled from "styled-components";
import { Card } from "../../components/Card";

const borders = {
  bottom: {
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    borderBottom: "1px solid",
    borderImage:
      "linear-gradient(to left, var(--card-keyline), rgba(0, 0, 0, 0)) 100% 1",
    paddingRight: 120,
    paddingBottom: 72,
  },
  left: {
    borderLeft: "1px solid",
    borderRight: "none",
    borderBottom: "none",
    borderTop: "none",
    borderImage:
      "linear-gradient(to top, var(--card-keyline), rgba(0, 0, 0, 0)) 1 100%",
    paddingLeft: 120,
    paddingBottom: 72,
  },
  right: {
    borderLeft: "none",
    borderRight: "1px solid",
    borderBottom: "none",
    borderTop: "none",
    borderImage:
      "linear-gradient(to bottom, var(--card-keyline), rgba(0, 0, 0, 0)) 1 100%",
    marginRight: "-1px",
    paddingRight: 120,
    paddingTop: 72,
  },
  top: {
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    borderTop: "1px solid",
    borderImage:
      "linear-gradient(to right, var(--card-keyline), rgba(0, 0, 0, 0)) 100% 1",
    marginTop: "-1px",
    paddingLeft: 120,
    paddingTop: 72,
  },
};

export const InfoCardWrapper = styled.div((props) => ({
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  ...borders[props.borderDirection],
}));

export const InfoCardValue = styled.h1`
  font-size: 64px;
  font-weight: medium;
  color: var(--text-main);
`;

export const InfoCardLabel = styled.p`
  font-size: 24px;
  color: var(--text-main);
`;

export const InfoCardDescription = styled.p`
  color: var(--text-secondary);
`;

export const InfoCardPieContent = styled.div`
  padding: 0 24px;
  text-align: center;

  strong {
    color: var(--text-main);
    font-weight: bold;
  }
`;
