import { useEffect, useState } from "react";

const DURATION_SECONDS = 2000;
const FAST_FRAME = 100;

const useCounter = (maxCountNumber: number): number => {
  const [currentNum, setCurrentNum] = useState(0);

  useEffect(() => {
    let currentFrame = FAST_FRAME;
    let tmpCurrentNum = currentNum;

    const fastInterval = setInterval(() => {
      if (currentFrame >= DURATION_SECONDS - FAST_FRAME) {
        clearInterval(fastInterval);

        const SLOW_FRAME =
          (Math.round(DURATION_SECONDS - FAST_FRAME) / tmpCurrentNum) * 20;

        const slowInterval = setInterval(() => {
          tmpCurrentNum += 1;
          setCurrentNum(tmpCurrentNum);

          if (tmpCurrentNum >= maxCountNumber) {
            clearInterval(slowInterval);
          }
        }, SLOW_FRAME);
      }
      tmpCurrentNum += Math.round(
        maxCountNumber / (DURATION_SECONDS / FAST_FRAME)
      );
      currentFrame += FAST_FRAME;
      setCurrentNum(tmpCurrentNum);
    }, FAST_FRAME);
  }, [maxCountNumber]);

  return currentNum;
};

export default useCounter;
