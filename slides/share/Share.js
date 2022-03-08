import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton, ViberShareButton
} from "react-share";
import { Slide } from "../../components/Slide";
import FacebookIcon from "../../components/Icons/FacebookIcon";
import TwitterIcon from "../../components/Icons/TwitterIcon";
import LinkedinIcon from "../../components/Icons/LinkedinIcon";
import ViberIcon from "../../components/Icons/ViberIcon";
import TelegramIcon from "../../components/Icons/TelegramIcon";
import PinterestIcon from "../../components/Icons/PinterestIcon";
import { Link, Row, Title } from "./share.styles";


const url = "https://no-fly-zone.vercel.app/";
const message = "Right now russian missiles are killing Ukrainian kids! We can stop it!";
const hashtag = "#CloseTheSky #NATO #NoFlyZone"


const Share = () => {
  return (
    <Slide hideHashtag justify="center">
      <Title>
        Stop this madness!
        <br/>
        Spread the word!
        <br/>
        <span className="text-red">Save Thousands of lives!</span>
      </Title>

      <Row>
        <FacebookShareButton url={url} quote={message} hashtag={hashtag}>
          <Link hoverColor="#1877F2">
            <FacebookIcon width="42px" height="42px"/>
          </Link>
        </FacebookShareButton>

        <TwitterShareButton url={url} hashtags={hashtag.replace(/#/g, '').split(" ")} title={message}>
          <Link hoverColor="#1DA1F2">
            <TwitterIcon width="42px" height="42px"/>
          </Link>
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={message}>
          <Link hoverColor="#0A66C2">
            <LinkedinIcon width="42px" height="42px"/>
          </Link>
        </LinkedinShareButton>

        <ViberShareButton url={url} title={message}>
          <Link hoverColor="#59267C">
            <ViberIcon width="42px" height="42px"/>
          </Link>
        </ViberShareButton>

        <TelegramShareButton url={url} title={message}>
          <Link hoverColor="#0088CC">
            <TelegramIcon width="42px" height="42px"/>
          </Link>
        </TelegramShareButton>

        <PinterestShareButton url={url} media={`${url}/images/image-14.png`} description={message}>
          <Link hoverColor="#E60023">
            <PinterestIcon width="42px" height="42px"/>
          </Link>
        </PinterestShareButton>
      </Row>
    </Slide>
  )
}

export default Share;
