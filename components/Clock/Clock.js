import { formatDuration, intervalToDuration } from "date-fns";
import { useState, useEffect } from "react";

import { Wrapper } from "./clock.styles";


const start = new Date("2022-02-24T02:00:00.000Z");


const Clock = () => {
  const [duration, setDuration] = useState(formatDuration(intervalToDuration({
    start: start,
    end: new Date()
  })));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(formatDuration(intervalToDuration({
        start: start,
        end: new Date()
      })));
    }, 1000);

    return () => clearTimeout(intervalId);
  }, []);


  return (
    <Wrapper>
      <h1>The war in Ukraine lasts for:</h1>
      <h2>{duration}</h2>
    </Wrapper>
  )
}

export default Clock;
