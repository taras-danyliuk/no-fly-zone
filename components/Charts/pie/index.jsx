import React, { useEffect, useState, useRef } from "react";
import {
  Wrapper,
  RingBase,
  Circle,
  Progress,
  ChildrenBase,
  Content,
} from "./pie.styles";
import { NumberShim } from "../../../helpers/number-shim";

const SIZE = 100;
const RADIUS = SIZE / 2;
const CENTER = SIZE / 2;

const Ring = ({ value, strokeWidth, target, onChange }) => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    const radius =
      RADIUS - NumberShim.inRange(strokeWidth, { min: 1, max: RADIUS }) / 2;
    const circumference = 2 * Math.PI * radius;

    let progress = circumference;

    if (target !== 0) {
      progress = NumberShim.inRange(value, { min: 0, max: 100 });
      progress = NumberShim.percentIs(progress, circumference, false);
    }

    setConfig({
      ...config,
      radius,
      circumference,
      currentValue: progress,
      completed: progress === circumference,
    });
  }, [strokeWidth, value, target]);

  const { radius, circumference, currentValue, completed } = config;

  useEffect(() => {
    onChange && onChange(completed);
  }, [completed, onChange]);

  return (
    <RingBase viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <g>
        <Circle
          r={radius}
          cx={CENTER}
          cy={CENTER}
          style={{
            strokeWidth,
            strokeDasharray: `${circumference} ${circumference}`,
          }}
        />
        <Progress
          r={radius}
          cx={CENTER}
          cy={CENTER}
          style={{
            strokeWidth,
            strokeDasharray: `${currentValue} ${circumference}`,
            strokeOpacity: Number(!!currentValue),
          }}
        />
      </g>
    </RingBase>
  );
};

const Children = ({ children, strokeWidth }) => {
  const [padding, setPadding] = useState();

  useEffect(() => {
    const padding = `0 ${strokeWidth}%`;

    setPadding(padding);
  }, [strokeWidth]);

  return (
    <Content style={{ padding }}>
      <ChildrenBase>{children}</ChildrenBase>
    </Content>
  );
};

export const PieChart = ({ children, value }) => {
  return (
    <Wrapper>
      <Ring strokeWidth={2} value={value}></Ring>
      <Children strokeWidth={2}>{children}</Children>
    </Wrapper>
  );
};
