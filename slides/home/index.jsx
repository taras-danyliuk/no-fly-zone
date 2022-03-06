import React, { useMemo } from "react";
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
import { WAR_START } from "../../helpers/constants";
import secondsToTime from "../../helpers/secondsToTime";


const InfoCard = ({ borderDirection, data, pieLabel }) => {
  const chartValue = useMemo(() => {
    const diffInSeconds = (new Date().valueOf() - WAR_START.valueOf()) / 1000;
    const rate = diffInSeconds / data.currentNumber;

    return secondsToTime(rate, diffInSeconds);
  }, [data.currentNumber]);


  return (
    <Card>
      <InfoCardWrapper borderDirection={borderDirection}>
        <div>
          <InfoCardLabel>{data.name}:</InfoCardLabel>
          <InfoCardValue>{data.currentNumber}</InfoCardValue>
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
