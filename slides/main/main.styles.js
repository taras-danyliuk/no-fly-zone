import Image from "next/image";
import styled from "styled-components";


export const StyledImage = styled(Image) `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
`

export const ImageCover = styled.div `
  background-color: rgba(21, 0, 0, 0.75);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Content = styled.div `
  position: absolute;
  top: 90px;
  bottom: 58px;
  left: 10px;
  right: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    top: 70px;
  }

  @media screen and (max-width: 576px) {
    top: 50px;
  }
`

export const Heading = styled.h1 `
  font-weight: 400;
  font-size: 64px;
  line-height: 95px;
  text-align: center;
  color: white;
  
  span {
    font-weight: 700;
    color: var(--text-main);
  }

  @media screen and (max-width: 768px) {
    font-size: 54px;
    line-height: 74px;
  }

  @media screen and (max-width: 576px) {
    font-size: 44px;
    line-height: 54px;
  }
`

export const Text = styled.p `
  font-weight: 700;
  font-size: 64px;
  line-height: 65px;
  color: var(--text-main);
  text-align: center;
  
  span {
    color: white;
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 54px;
    line-height: 54px;
    
    span {
      font-size: 36px;
    }
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 100px;
    font-size: 34px;
    line-height: 44px;

    span {
      font-size: 26px;
    }
  }
`

export const ScrollButton = styled.div `
  cursor: pointer;
  margin-top: 88px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 576px) {
    display: none;
  }
`
