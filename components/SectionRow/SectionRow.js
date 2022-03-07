import { useMemo } from "react";
import Image from 'next/image'
import {
  Bar,
  BarBreakpoint,
  BarHolder,
  BarProgress,
  BarValue, BreakpointLine,
  BreakpointTitle, BreakpointValue,
  Label,
  TextHolder,
  Wrapper
} from "./sectionRow.styles";


const SectionRow = ({ statistic }) => {
  const width = useMemo(
    () => statistic.currentNumber * 100 / statistic.maxNumber,
    [statistic.currentNumber, statistic.maxNumber]
  );

  return (
    <Wrapper>
      <TextHolder>
        <Image src={statistic.imgUrl || ""} width="36px" height="36px"/>

        <Label>{statistic.name}</Label>
      </TextHolder>

      <BarHolder>
        <BarValue>{statistic.currentNumber}</BarValue>

        <Bar>
          <BarProgress style={{ width: `${width}%` }}/>
        </Bar>

        {statistic.breakpoints.map(b => (
          <BarBreakpoint key={b._id} style={{ left: `${b.value * 100 / statistic.maxNumber}%` }}>
            <BreakpointTitle>{b.name}</BreakpointTitle>
            <BreakpointLine/>
            <BreakpointValue>{b.value}</BreakpointValue>
          </BarBreakpoint>
        ))}
      </BarHolder>
    </Wrapper>
  )
}

export default SectionRow;
