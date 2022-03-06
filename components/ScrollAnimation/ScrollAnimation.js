import { useCallback, useState } from "react";

import {
  Building,
  Rocket,
  ParallaxBlock
} from "./scrollAnimation.styles";


const ScrollAnimation = ({ position }) => {
  const [entered, setEntered] = useState(false);
  const [firstRocketTop, setFirstRocketTop] = useState(0);

  const onFirstProgressChange = useCallback(progress => {
    const rate = position === "center" ? 50 : 100;
    setFirstRocketTop(progress  * rate);
  }, [position])

  return (
    <div>
      {position !== "center" && <Building position={position} visible={entered}/>}
      <Rocket style={{ top: `${firstRocketTop}%` }} position={position} visible={entered}/>

      <ParallaxBlock
        onProgressChange={onFirstProgressChange}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
        position={position}
      />
    </div>
  )
}

export default ScrollAnimation;
