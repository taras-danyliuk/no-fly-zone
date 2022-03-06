import styled from "styled-components";

export const Wrapper = styled.article`
  min-height: 100vh;
  background: var(--slide-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 156px;
`;

export const Hashtag = styled.header`
  font-size: 72px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-family: var(--font-main);
`;

export const HR = styled.hr`
  border-top: 1px solid black;
  width: 42px;
  margin-bottom: 28px;
`;
