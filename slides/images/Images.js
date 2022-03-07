import Image from 'next/image'
import { Slide } from "../../components/Slide";
import { ImageBlock, Text, TextHolder, Wrapper } from "./images.styles";


const Images = () => {
  return (
    <Slide hideHashtag noPadding>
      <Wrapper>
        <ImageBlock>
          <Image src="/images/image-17.png" layout="fill" objectFit="cover"/>
        </ImageBlock>

        <ImageBlock>
          <Image src="/images/image-18.png" layout="fill" objectFit="cover"/>
        </ImageBlock>

        <ImageBlock>
          <Image src="/images/image-19.png" layout="fill" objectFit="cover"/>
        </ImageBlock>

        <ImageBlock>
          <Image src="/images/image-20.png" layout="fill" objectFit="cover"/>
        </ImageBlock>

        <TextHolder>
          <Text>
            If you don't want to close the sky, we can conclude that
            <br/>
            <span className="text-red">you wish Ukrainians were killed.</span>
            <br/>
            This is the responsibility of all western leaders.
          </Text>
        </TextHolder>
      </Wrapper>
    </Slide>
  );
};

export default Images;
