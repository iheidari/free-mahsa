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
    <div className="absolute bottom-4 z-10 w-full p-2" dir="ltr">
      <div className="pb-1">{timer.text}</div>

      <div className="flex justify-around text-center">
        {years > 0 && <Part value={years} title="سال" />}
        {(years > 0 || months > 0) && <Part value={months} title="ماه" />}
        <Part value={days} title="روز" />
        <Part value={hours} title="ساعت" />
        <Part value={minutes} title="دقیقه" />
        <Part value={seconds} title="ثانیه" />
      </div>
    </div>
  );
};

export default Timer;
