import Image from "next/image";
import { Slide } from "../../components/Slide";
import { ImageCover, StyledImage, Content, Heading, ScrollButton, Text } from "./main.styles";


const Main = ({ kids }) => {
  const onClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <Slide hideHashtag>
      <StyledImage src="/images/image-14.png" layout="fill"/>
      <ImageCover/>

      <Content>
        <Heading>
          Nato <span>#CloseTheSky</span>
          <br/>
          Over Ukraine
        </Heading>

        <div>
          <Text>
            {kids.currentNumber} children killed
            <br/>
            <span>by russians missiles</span>
          </Text>

          <ScrollButton onClick={onClick}>
            <Image src="/icons/scroll-icon.svg" width="140px" height="112px"/>
          </ScrollButton>
        </div>
      </Content>
    </Slide>
  )
}

export default Main;
