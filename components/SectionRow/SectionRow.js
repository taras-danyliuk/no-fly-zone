import { Bar, BarProgress, Label } from "./sectionRow.styles";


const SectionRow = ({ statistic }) => {
  return (
    <div className="flex w-100">
      <Label>{statistic.name}</Label>

      <Bar>
        <BarProgress style={{ width: "5%" }}>24</BarProgress>
      </Bar>
    </div>
  )
}

export default SectionRow;
