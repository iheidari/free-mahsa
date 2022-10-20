import React from "react";
import Part from "./Part";
import { secondsToTime } from "./util";

type Props = {
  timer: TimerProps;
};

export type TimerProps = {
  seconds: number;
  text: string;
};

const Timer = ({ timer }: Props) => {
  const { years, months, days, hours, minutes, seconds } = secondsToTime(
    timer.seconds
  );

  return (
    <div className="absolute bottom-0 z-10 bg-black bg-opacity-70 w-full p-2">
      <div className="pb-1">{timer.text}</div>

      <div className="flex justify-between gap-2 text-center">
        {!!years && <Part value={years} title="year" />}
        {!!years && !!months && <Part value={months} title="month" />}
        <Part value={days} title="days" />
        <Part value={hours} title="hours" />
        <Part value={minutes} title="minutes" />
        <Part value={seconds} title="seconds" />
      </div>
    </div>
  );
};

export default Timer;
