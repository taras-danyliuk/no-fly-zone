import styled from "styled-components";


export const Title = styled.h3 `
  font-size: 64px;
  line-height: 103px;
  color: var(--text-secondary);
  text-align: center;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 54px;
    line-height: 74px;
  }

  @media screen and (max-width: 576px) {
    font-size: 40px;
    line-height: 54px;
  }
`

export const Row = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`

export const Link = styled.div `
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid #D6D6D6;
  cursor: pointer;
  margin: 0 10px;
  
  &:hover {
    border-color: ${props => props.hoverColor};
    
    svg {
      fill: ${props => props.hoverColor};
    }
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.8);
    margin: 0;
  }

  @media screen and (max-width: 576px) {
    transform: scale(0.6);
    margin: -10px;
  }
`
