import styled from "styled-components";


export const Wrapper = styled.div `
  display: flex;
  width: 100%;
  margin: 40px 0;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const TextHolder = styled.div `
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%
  }
`

export const BarHolder = styled.div `
  position: relative;
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 80px;
  }
`

export const Label = styled.span `
  flex-shrink: 0;
  width: 200px;
  font-size: 24px;
  line-height: 23px;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`

export const BarValue = styled.p `
  position: absolute;
  top: -30px;
  left: 20px;
  font-size: 24px;
  line-height: 24px;
  color: var(--text-secondary);

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`

export const Bar = styled.div `
  flex: 1;
  border-radius: 12px;
  height: 8px;
  background-color: var(--gray-bg);
`

export const BarProgress = styled.div `
  background-color: var(--red-bg);
  border-radius: 4px;
  text-align: center;
  height: 100%;
  color: var(--white);
  line-height: 8px;
`
