import { Slide } from "../../components/Slide";
import { Title } from "./share.styles";


const Share = () => {
  return (
    <Slide hideHashtag justify="center">
      <Title>
        Stop this madness! Spread the word!
        <br/>
        <span className="text-red">Save Thousands of lives!</span>
      </Title>
    </Slide>
  )
}

export default Share;
