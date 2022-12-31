import React from "react";
import useTranslate from "../../hooks/useTranslate";
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
  const { t, isLatin } = useTranslate();
  const { years, months, days, hours, minutes, seconds } = secondsToTime(
    timer.seconds
  );

  return (
    <div className="absolute bottom-1 z-10 w-full p-2" dir="ltr">
      <div className={`pb-3 text-sm`}>{timer.text}</div>

      {!!timer.seconds && (
        <div className="flex justify-around text-center">
          {years > 0 && <Part value={years} title={t("سال")} />}
          {(years > 0 || months > 0) && (
            <Part value={months} title={t("ماه")} />
          )}
          <Part value={days} title={t("روز")} />
          <Part value={hours} title={t("ساعت")} />
          <Part value={minutes} title={t("دقیقه")} />
          <Part value={seconds} title={t("ثانیه")} />
        </div>
      )}
    </div>
  );
};

export default Timer;
