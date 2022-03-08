import styled from "styled-components";


export const Title = styled.h2 `
  font-size: 36px;
  line-height: 43.2px;
  text-align: center;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 44px;
  }

  @media screen and (max-width: 576px) {
    font-size:  24px;
    line-height: 40px;
  }
`

export const SectionTitle = styled.h3 `
  font-size: 36px;
  line-height: 43.2px;
  text-align: center;
  font-weight: 400;
  color: var(--text-secondary);
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 576px) {
    font-size: 26px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

export const Holder = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`
