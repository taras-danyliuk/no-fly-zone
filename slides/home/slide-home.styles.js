import styled from "styled-components";

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

export const InfoCardWrapper = styled.div `
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  ${props => borders[props.borderDirection]};

  @media screen and (max-width: 768px) {
    padding: 25px 100px;
    border: none;
  };

  @media screen and (max-width: 576px) {
    padding: 25px 25px;
  }
`

export const InfoCardValue = styled.span`
  font-size: 64px;
  line-height: 64px;
  letter-spacing: 1px;
  font-weight: 400;
  color: var(--text-main);

  @media screen and (max-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }

  @media screen and (max-width: 576px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const InfoCardLabel = styled.p`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 300;
  color: var(--text-main);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const InfoCardDescription = styled.p`
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 27px;

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const InfoCardPieContent = styled.div`
  font-size: 18px;
  line-height: 23px;
  padding: 0 24px;
  text-align: center;
  letter-spacing: 0.44px;

  strong {
    color: var(--text-main);
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    font-size: 11px;
    line-height: 17px;
  }
`;
