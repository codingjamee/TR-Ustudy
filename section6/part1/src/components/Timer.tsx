import Container from "./UI/Container.tsx";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainigTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(function () {
        setRemainigTime((prev) => {
          if (prev <= 0) {
            return prev;
          }
          return prev - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2).toString();
  console.log(formattedRemainingTime);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
//에러 났던 상황 props를 잘못 전달 remainingTime인데 formattedRemainingTime전달
