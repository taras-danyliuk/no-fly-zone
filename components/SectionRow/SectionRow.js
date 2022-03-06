import { useMemo } from "react";
import { Bar, BarHolder, BarProgress, BarValue, Label, Wrapper } from "./sectionRow.styles";


const SectionRow = ({ statistic }) => {
  const width = useMemo(
    () => statistic.currentNumber * 100 / statistic.maxNumber,
    [statistic.currentNumber, statistic.maxNumber]
  )

  return (
    <Wrapper>
      <Label>{statistic.name}</Label>

      <BarHolder>
        <BarValue>{statistic.currentNumber}</BarValue>

        <Bar>
          <BarProgress style={{ width: `${width}%` }}/>
        </Bar>
      </BarHolder>
    </Wrapper>
  )
}

export default SectionRow;
