import React from "react";
import { CardContainer, Card } from "../../components/Card";
import { Slide } from "../../components/Slide";
import { PieChart } from "../../components/Charts/pie";
import {
  InfoCardWrapper,
  InfoCardDescription,
  InfoCardLabel,
  InfoCardValue,
  InfoCardPieContent,
} from "./slide-home.styles";
import Clock from "../../components/Clock/Clock";

const InfoCard = ({ borderDirection }) => {
  return (
    <Card>
      <InfoCardWrapper borderDirection={borderDirection}>
        <div>
          <InfoCardLabel>Kids killed:</InfoCardLabel>
          <InfoCardValue>125</InfoCardValue>
          <InfoCardDescription>During the war</InfoCardDescription>
        </div>

        <PieChart value={10}>
          <InfoCardPieContent>
            Next death expected in:
            <br />
            <strong>4 hours</strong>
          </InfoCardPieContent>
        </PieChart>
      </InfoCardWrapper>
    </Card>
  );
};

export const SlideHome = () => {
  return (
    <Slide>
      <Clock/>

      <CardContainer>
        <InfoCard borderDirection="bottom" />
        <InfoCard borderDirection="left" />
        <InfoCard borderDirection="right" />
        <InfoCard borderDirection="top" />
      </CardContainer>
    </Slide>
  );
};
