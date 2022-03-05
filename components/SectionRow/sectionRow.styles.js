import styled from "styled-components";


export const Label = styled.span `
  flex-shrink: 0;
  width: 200px;
`

export const Bar = styled.div `
  flex: 1;
  border-radius: 12px;
  height: 24px;
  background-color: var(--gray);
`

export const BarProgress = styled.div `
  background-color: var(--red);
  border-radius: 12px;
  text-align: center;
  height: 100%;
  color: var(--white);
  line-height: 24px;
`
