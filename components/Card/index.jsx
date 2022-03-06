import React from "react";
import { Wrapper, CardWrapper, Row } from "./card.styles";

export const CardContainer = Wrapper;

export const CardRow = Row;

export const Card = ({ children }) => <CardWrapper>{children}</CardWrapper>;
