import styled from "styled-components";


export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2 `
  font-size: 24px;
  line-height: 28.8px;
  color: var(--black);
  font-weight: 400;
`

export const Time = styled.p `
  font-size: 36px;
  line-height: 43.2px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin: 0;
  
  span {
    color: var(--red)
  }
`
