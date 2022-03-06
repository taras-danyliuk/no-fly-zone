import styled from "styled-components";


export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 62px;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 23px;
  }
`

export const Title = styled.h2 `
  font-size: 24px;
  line-height: 28.8px;
  color: var(--black);
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 29.64px;
  }
`

export const Time = styled.p `
  font-size: 36px;
  line-height: 43.2px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin: 0;
  
  span {
    color: var(--text-main)
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 35.57px;
  }

  @media screen and (max-width: 576px) {
    font-size: 17px;
    line-height: 30.1px;
    letter-spacing: 0;
  }
`
