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

  @media screen and (max-width: 768px) {
    padding: 60px;
  }

  @media screen and (max-width: 576px) {
    padding: 30px;
  }
`

export const ImageBlock = styled.div `
  height: calc(50vh - 90px);
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
    background-color: rgba(0,0,0,0.65);
  }

  @media screen and (max-width: 768px) {
    height: calc(50vh - 70px);
  }

  @media screen and (max-width: 576px) {
    height: calc(50vh - 40px);
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
  
  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 54px;
  }
  
  @media screen and (max-width: 576px) {
    font-size:  24px;
    line-height: 42px;
  }
`
