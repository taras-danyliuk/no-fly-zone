import styled from "styled-components";

export const Wrapper = styled.article`
  min-height: 100vh;
  background: var(--slide-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 156px;
  position: relative;
  
  @media screen and (max-width: 768px) {
    padding: 64px 82px; 
  }
  
  @media screen and (max-width: 576px) {
    padding: 32px 16px;
  }
`;

export const Hashtag = styled.header`
  font-size: 72px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-family: var(--font-main);

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  
  @media screen and (max-width: 576px) {
    font-size: 24px; 
  }
`;
