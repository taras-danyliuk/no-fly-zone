import { useMemo } from "react";
import { Bar, BarProgress, Label } from "./sectionRow.styles";


const SectionRow = ({ statistic }) => {
  const width = useMemo(
    () => statistic.currentNumber * 100 / statistic.maxNumber,
    [statistic.currentNumber, statistic.maxNumber]
  )

  return (
    <div className="flex w-100 mv-1">
      <Label>{statistic.name}</Label>

      <Bar>
        <BarProgress style={{ width: `${width}%` }}>{statistic.currentNumber}</BarProgress>
      </Bar>
    </div>
  )
}

export default SectionRow;
