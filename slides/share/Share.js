import Image from 'next/image';
import { Slide } from "../../components/Slide";
import { Link, Row, Title } from "./share.styles";


const Share = () => {
  return (
    <Slide hideHashtag justify="center">
      <Title>
        Stop this madness! Spread the word!
        <br/>
        <span className="text-red">Save Thousands of lives!</span>
      </Title>

      <Row>
        <Link>
          <Image src="/icons/facebook-icon.svg" width="42px" height="42px"/>
        </Link>

        <Link>
          <Image src="/icons/twitter-icon.svg" width="42px" height="42px"/>
        </Link>

        <Link>
          <Image src="/icons/linkedin-icon.svg" width="42px" height="42px"/>
        </Link>

        <Link>
          <Image src="/icons/viber-icon.svg" width="42px" height="42px"/>
        </Link>

        <Link>
          <Image src="/icons/telegram-icon.svg" width="42px" height="42px"/>
        </Link>

        <Link>
          <Image src="/icons/pinterest-icon.svg" width="42px" height="42px"/>
        </Link>
      </Row>
    </Slide>
  )
}

export default Share;
