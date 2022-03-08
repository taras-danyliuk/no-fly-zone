import { Slide } from "../../components/Slide";
import { HR } from "../../styles/shared.styles";
import SectionRow from "../../components/SectionRow/SectionRow";
import { Holder, SectionTitle, Title } from "./statistics.styles";


const Statistics = ({ statistics }) => {
  return (
    <Slide>
      <Title>
        NATO <span className="text-red">refuses</span> to close the sky over Ukraine.
        <br/>
        Is it because, <span className="text-red">the number of victims is not enough?</span>
      </Title>

      <HR/>

      <SectionTitle>Statistics</SectionTitle>

      <Holder>
        {statistics.map(stat => (<SectionRow key={stat.name} statistic={stat}/>))}
      </Holder>
    </Slide>
  )
}

export default Statistics;
