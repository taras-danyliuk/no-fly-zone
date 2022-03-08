import React, { useEffect, useMemo, useState } from "react";
import { CardContainer, Card } from "../../components/Card";
import { Slide } from "../../components/Slide";
import { PieChart } from "../../components/Charts/pie";
import Clock from "../../components/Clock/Clock";
import {
  InfoCardWrapper,
  InfoCardDescription,
  InfoCardLabel,
  InfoCardValue,
  InfoCardPieContent,
} from "./slide-home.styles";
import getChartValues from "../../helpers/getChartValues";


const InfoCard = ({ borderDirection, data, pieLabel }) => {
  const [chartValue, setChartValue] = useState(getChartValues(data));

  useEffect(() => {
    const intervalId = setInterval(() => setChartValue(getChartValues(data)), 1000);
    return () => clearInterval(intervalId);
  }, [data]);

  const current = useMemo(() => {
    if (data.currentNumber < 1000000) return data.currentNumber;
    return `${(data.currentNumber / 1000000).toFixed(1)}M`;
  }, [data.currentNumber])


  return (
    <Card>
      <InfoCardWrapper borderDirection={borderDirection}>
        <div>
          <InfoCardLabel>{data.name}:</InfoCardLabel>
          <InfoCardValue>{current}</InfoCardValue>
          <InfoCardDescription>During the war</InfoCardDescription>
        </div>

        <PieChart value={chartValue.value}>
          <InfoCardPieContent>
            Next {pieLabel} expected in:
            <br />
            <strong>{chartValue.text}</strong>
          </InfoCardPieContent>
        </PieChart>
      </InfoCardWrapper>
    </Card>
  );
};

export const SlideHome = ({ info }) => {
  return (
    <Slide>
      <Clock/>

      <CardContainer>
        <InfoCard borderDirection="bottom" data={info.kids} pieLabel="death"/>
        <InfoCard borderDirection="left" data={info.adults} pieLabel="death"/>
        <InfoCard borderDirection="right" data={info.injured} pieLabel="injury"/>
        <InfoCard borderDirection="top" data={info.refugees} pieLabel="refugee"/>
      </CardContainer>
    </Slide>
  );
};
