import styled from "styled-components";


export const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: #000000;
  padding: 80px;
  width: 100%;
  height: 100vh;
  position: relative;
`

export const ImageBlock = styled.div `
  height: calc(50vh - 90px);
  background-color: pink;
  width: 100%;
  position: relative;
  
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
  }
`

export const TextHolder = styled.div `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  right: 50px;
`

export const Text = styled.h3 `
  color: white;
  font-size: 36px;
  line-height: 61px;
  font-weight: 400;
  text-align: center;
`