const YEAR_IN_SECONDS = 365 * 24 * 60 * 60;
const MONTH_IN_SECONDS = 30 * 24 * 60 * 60;
const DAY_IN_SECONDS = 24 * 60 * 60;
const HOUR_IN_SECONDS = 60 * 60;
const MINUTE_IN_SECONDS = 60;
export const secondsToTime = (seconds: number) => {
  const years = Math.floor(seconds / YEAR_IN_SECONDS);

  let rest = seconds % YEAR_IN_SECONDS;
  const months = Math.floor(rest / MONTH_IN_SECONDS);

  rest = rest % MONTH_IN_SECONDS;
  const days = Math.floor(rest / DAY_IN_SECONDS);

  rest = rest % DAY_IN_SECONDS;
  const hours = Math.floor(rest / HOUR_IN_SECONDS);

  rest = rest % HOUR_IN_SECONDS;
  const minutes = Math.floor(rest / MINUTE_IN_SECONDS);

  seconds = rest % MINUTE_IN_SECONDS;

  return { years, months, days, hours, minutes, seconds };
};
