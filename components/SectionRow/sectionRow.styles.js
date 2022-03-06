import styled from "styled-components";


export const Wrapper = styled.div `
  display: flex;
  width: 100%;
  margin: 40px 0;
  align-items: center;
`

export const Label = styled.span `
  flex-shrink: 0;
  width: 200px;
  font-size: 24px;
  line-height: 23px;
  font-weight: 600;
  color: var(--text-secondary);
`

export const BarHolder = styled.div `
  position: relative;
  flex: 1;
`

export const BarValue = styled.p `
  position: absolute;
  top: -30px;
  left: 20px;
  font-size: 24px;
  line-height: 24px;
  color: var(--text-secondary);
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
