import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-width: 193px;
  max-width: 193px;

  @media screen and (max-width: 768px) {
    min-width: 132px;
    max-width: 132px;
  }

  @media screen and (max-width: 576px) {
    min-width: 120px;
    max-width: 120px;
  }
`;

export const RingBase = styled.svg`
  border-radius: 50%;
  display: block;
  transform: rotate(-90deg);
  width: 100%;
`;

export const Circle = styled.circle`
  fill: transparent;
  stroke: var(--pie-chart-whole-fill);
  stroke-dasharray: 100 100;
`;

export const Progress = styled(Circle)`
  fill: transparent;
  stroke: var(--pie-chart-progress-fill);
  stroke-linecap: orange;
  transition: stroke-dasharray 0.25s ease-out;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const ChildrenBase = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
