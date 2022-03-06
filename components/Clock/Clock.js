import { intervalToDuration } from "date-fns";
import { useState, useEffect } from "react";

import { Time, Title, Wrapper } from "./clock.styles";


const start = new Date("2022-02-24T04:00:00.000Z");
const format = duration => {
  let result = "";
  Object.entries(duration).forEach(([key, value]) => {
    if (!value) return;
    result += `<span>${value}</span> ${value === 1 ? key.substr(0, key.length - 1) : key} `;
  });

  return {
    __html: result
  };
}


const Clock = () => {
  const [duration, setDuration] = useState(intervalToDuration({
    start: start,
    end: new Date()
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(intervalToDuration({
        start: start,
        end: new Date()
      }));
    }, 1000);

    return () => clearTimeout(intervalId);
  }, []);


  return (
    <Wrapper>
      <Title>Ukraine is being bombed for:</Title>
      <Time dangerouslySetInnerHTML={format(duration)}/>
    </Wrapper>
  )
}

export default Clock;
