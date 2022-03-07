import Image from 'next/image';
import { Slide } from "../../components/Slide";
import { Link, Row, Title } from "./share.styles";
import FacebookIcon from "../../components/Icons/FacebookIcon";
import TwitterIcon from "../../components/Icons/TwitterIcon";
import LinkedinIcon from "../../components/Icons/LinkedinIcon";
import ViberIcon from "../../components/Icons/ViberIcon";
import TelegramIcon from "../../components/Icons/TelegramIcon";
import PinterestIcon from "../../components/Icons/PinterestIcon";


const Share = () => {
  return (
    <Slide hideHashtag justify="center">
      <Title>
        Stop this madness! Spread the word!
        <br/>
        <span className="text-red">Save Thousands of lives!</span>
      </Title>

      <Row>
        <Link hoverColor="#1877F2">
          <FacebookIcon width="42px" height="42px"/>
        </Link>

        <Link hoverColor="#1DA1F2">
          <TwitterIcon width="42px" height="42px"/>
        </Link>

        <Link hoverColor="#0A66C2">
          <LinkedinIcon width="42px" height="42px"/>
        </Link>

        <Link hoverColor="#59267C">
          <ViberIcon width="42px" height="42px"/>
        </Link>

        <Link hoverColor="#0088CC">
          <TelegramIcon width="42px" height="42px"/>
        </Link>

        <Link hoverColor="#E60023">
          <PinterestIcon width="42px" height="42px"/>
        </Link>
      </Row>
    </Slide>
  )
}

export default Share;
