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
  font-family: var(--font-secondary);

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
    left: 16px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
    left: 12px;
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

export const BarBreakpoint = styled.div `
  position: absolute;
  top: -44px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-50%);
`

export const BreakpointTitle = styled.span `
  color: var(--red-bg);
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  position: relative;
  font-family: var(--font-secondary);
  
  &:after {
    content: "";
    border-top: 6px solid var(--red-bg);
    border-left: 4.5px solid transparent;
    border-right: 4.5px solid transparent;
    width: 0;
    position: absolute;
    left: calc(50% - 4px);
    bottom: -7px;
  }
  
  @media screen and (max-width: 576px) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const BreakpointLine = styled.div `
  border-right: 1px dashed var(--red-bg);
  margin: 10px 0 30px;
  flex: 1;
`

export const BreakpointValue = styled.span `
  font-size: 14px;
  line-height: 23px;
  font-weight: 600;
  font-family: var(--font-secondary);
  letter-spacing: 0.44px;
`
