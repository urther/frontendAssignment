import { useEffect, useRef } from "react";

const DURATION = 700;
const DELAY = 200;

const useFadeIn = (orderNum: number) => {
  const element = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!element.current) return;

    element.current.style.transition = `opacity ${DURATION}ms ${
      DELAY * orderNum
    }ms`;
    element.current.style.opacity = "1";
    element.current.style.animation = `fade-in ${DURATION}ms ${
      DELAY * orderNum
    }ms ease-in`;
  }, [orderNum]);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
