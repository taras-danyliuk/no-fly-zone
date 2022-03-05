import SectionRow from "../SectionRow/SectionRow";


const Section = ({ name, items }) => {
  return (
    <div className="flex-column align-center">
      <h3>{name}</h3>

      {items?.map(item => <SectionRow key={item.name} statistic={item}/>)}
    </div>
  )
}

export default Section;
